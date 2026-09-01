# 🔑 Conexión a Supabase con Variables de Entorno en Google AI Studio
## Configuración de `SUPABASE_URL` y `SUPABASE_ANON_KEY` para Consumo en Frontend

Para que una aplicación web construida en **Google AI Studio** pueda interactuar en tiempo real con tu base de datos PostgreSQL, necesita conectarse al backend de **Supabase** mediante dos variables de entorno principales.

---

## 🔐 Las Dos Variables de Entorno Fundamentales

| Variable | Ejemplo de Valor | Propósito y Nivel de Seguridad |
| :--- | :--- | :--- |
| **`SUPABASE_URL`** | `https://desxxxxxxxxxswwwwc.supabase.co` | La URL de tu instancia dedicada de Supabase. Es pública y apunta a los endpoints de REST, Auth, Realtime y Storage. |
| **`SUPABASE_ANON_KEY`** | `sb_publishable_BG-ADvvcccccccxxxxxxxxxxxxxxxxxxxxxxxxxx` | La clave pública segura para clientes web (Frontend). Permite el acceso respetando estrictamente las políticas de **Row Level Security (RLS)**. |

> [!WARNING]
> **NUNCA utilices la clave `service_role` en el frontend**. La clave `service_role` ignora las políticas RLS y tiene control total de administrador. Solo debes usar la clave pública `anon_key`.

---

## 🛠️ Dónde Encontrar tus Credenciales en Supabase

1. Ingresa a tu panel en [supabase.com/dashboard](https://supabase.com/dashboard).
2. Selecciona tu proyecto.
3. En la barra lateral izquierda, haz clic en el icono de engranaje **Project Settings (Configuración del Proyecto)**.
4. Selecciona la pestaña **API**.
5. Copia los valores de:
   * **Project URL** ➔ `SUPABASE_URL`
   * **Project API keys** ➔ `anon` `public` ➔ `SUPABASE_ANON_KEY`

---

## 💻 Código de Conexión Modular para AI Studio

Copia este módulo de inicialización en tu proyecto de AI Studio (o pídele a AI Studio que lo use):

```javascript
// src/lib/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

// 1. Declaración de credenciales (compatible con Vite y AI Studio)
const SUPABASE_URL = (typeof import.meta !== 'undefined' && import.meta.env?.VITE_SUPABASE_URL)
  || 'https://desxxxxxxxxxswwwwc.supabase.co';

const SUPABASE_ANON_KEY = (typeof import.meta !== 'undefined' && import.meta.env?.VITE_SUPABASE_ANON_KEY)
  || 'sb_publishable_BG-ADvvcccccccxxxxxxxxxxxxxxxxxxxxxxxxxx';

// 2. Creación del cliente singleton
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true
  }
});
```

---

## ⚡ Patrones Clave de Consumo en la Aplicación

### 1. Escuchar el Estado de Autenticación (Login / Logout)
```javascript
import { useEffect, useState } from 'react';
import { supabase } from './lib/supabaseClient';

export function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Obtener sesión activa al cargar
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // Escuchar eventos en vivo (LOGIN, LOGOUT, TOKEN_REFRESHED)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  return { user, loading };
}
```

### 2. Realizar Operaciones CRUD Protegidas por RLS
```javascript
import { supabase } from './lib/supabaseClient';

// Obtener registros del usuario activo
export async function getProjects() {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error al obtener proyectos:', error.message);
    throw error;
  }
  return data;
}

// Crear un nuevo proyecto asignándolo al usuario autenticado
export async function createProject(title, description) {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('Usuario no autenticado');

  const { data, error } = await supabase
    .from('projects')
    .insert([
      {
        owner_id: user.id,
        title: title,
        description: description,
        status: 'planning'
      }
    ])
    .select()
    .single();

  if (error) throw error;
  return data;
}
```

---

## 🛡️ Lista de Chequeo de Errores Comunes para Aprendices

* **Error: `42501 / new row violates row-level security policy`:**
  * Causa: Estás intentando insertar un registro con un `owner_id` diferente al del usuario que inició sesión (`auth.uid()`), o la política de `INSERT` no incluye `WITH CHECK (auth.uid() = owner_id)`.
  * Solución: Asegúrate de obtener `user.id` con `const { data: { user } } = await supabase.auth.getUser();` y asignarlo al campo `owner_id`.
* **Error: Las consultas devuelven un arreglo vacío `[]` a pesar de haber datos en Supabase:**
  * Causa: La política RLS de `SELECT` está bloqueando la lectura porque el registro tiene un `owner_id` distinto, o la consulta se ejecutó sin sesión iniciada.
  * Solución: Revisa que la política de `SELECT` tenga `USING (auth.uid() = owner_id)` y valida que el usuario tenga sesión activa con `useAuth()`.
* **Error: Al registrar un usuario en AI Studio no inicia sesión automáticamente:**
  * Causa: Supabase tiene activa la verificación de email obligatoria por defecto.
  * Solución: Ve a Supabase Dashboard ➔ **Authentication** ➔ **Providers** ➔ **Email** ➔ Desactiva **"Confirm email"**.

