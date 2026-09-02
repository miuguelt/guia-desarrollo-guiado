# 🔄 Guía de Importación: De Google Stitch a Google AI Studio
## Cómo trasladar el diseño de `stitch.withgoogle.com` a `aistudio.google.com/apps`

Una vez que has generado la interfaz de usuario en **Google Stitch**, el siguiente paso crítico es trasladar esa estructura visual y sistema de componentes a **Google AI Studio Apps** para dotarla de lógica reactiva y conexión en tiempo real a **Supabase**.

---

## 🧭 Flujo de Transferencia Visual a Código Funcional

```mermaid
sequenceDiagram
    autonumber
    actor Dev as Aprendiz / Desarrollador
    participant S as Google Stitch (stitch.withgoogle.com)
    participant AS as Google AI Studio (aistudio.google.com/apps)
    participant SB as Backend Supabase (PostgreSQL)

    Dev->>S: Ingresa Prompt de UI (Generado por la Gema)
    S-->>Dev: Renderiza Diseño UI + Código Tailwind/JSX
    Dev->>Dev: Extrae estructura de componentes y tokens de diseño
    Dev->>AS: Crea nueva App en AI Studio e ingresa Prompt Maestro + Diseño de Stitch
    Dev->>AS: Inyecta Variables de Supabase (URL + Anon Key)
    AS-->>Dev: Compila Web App SPA funcional con React y Supabase
    Dev->>SB: Prueba CRUD y Login en vivo con la Base de Datos
```

---

## 🛠️ Paso a Paso: Cómo Exportar la Suite Multi-Pantalla desde Google Stitch

1. **En Google Stitch (`stitch.withgoogle.com`):**
   - Asegúrate de haber completado la suite de pantallas utilizando el botón **"+ Add Screen"** para cada vista:
     * **SCR-01:** Pantalla de Login / Registro.
     * **SCR-02:** Dashboard Principal (KPIs, gráficos y widgets).
     * **SCR-03:** Explorador / Gestión de Registros (Tabla de datos y Kanban).
     * **SCR-04:** Vista de Detalle 360 del Registro.
     * **SCR-05:** Formulario de Creación por Pasos (Wizard).
     * **SCR-06:** Pantalla de Configuración y Perfil de Usuario.
   - En cada pantalla, haz clic en **"View Code" / "Inspect"** para extraer los tokens de Tailwind CSS compartidos (paleta de colores, curvatura `rounded-2xl`, efectos de desenfoque `backdrop-blur`).

2. **En Google AI Studio (`aistudio.google.com/apps`):**
   - Inicia sesión con tu cuenta de Google en [aistudio.google.com/apps](https://aistudio.google.com/apps).
   - Haz clic en **"Create App"** o **"New Web App"**.
   - En la caja de instrucciones, pega el **Prompt de Ensamble Multi-Vista** que se muestra a continuación.

---

## 📜 Prompt Base para que el Aprendiz Ensamble su App Multi-Vista en AI Studio

Copia esta plantilla base para ordenar a Google AI Studio que construya la aplicación incorporando todas las pantallas diseñadas en Stitch y la conexión a Supabase:

```markdown
# OBJETIVO DEL PROYECTO
Construye la aplicación web SPA profesional y completa "[NOMBRE_DEL_PROYECTO]" utilizando React 18/19, Tailwind CSS y Lucide Icons, conectada a una base de datos PostgreSQL en Supabase y con navegación multi-vista interactiva entre todas las pantallas diseñadas en Stitch.

# 1. DISEÑO VISUAL Y COMPONENTES (SUITE MULTIPANTALLA DE STITCH)
Replica con total fidelidad el sistema de diseño visual generado en Google Stitch:
- Estilo: [Nombre del Estilo, ej. Bento Grid + Glassmorphism / Dark Mode].
- Paleta unificada: Fondo general (`#0f172a`), tarjetas de contenido (`#1e293b`), bordes sutiles (`#334155`) y acentos de acción (`#6366f1`).
- Tipografía: Inter y JetBrains Mono.

# 2. ENRUTAMIENTO MULTI-VISTA (ROUTER SPA EN REACT)
Implementa un router reactivo interno en `App.jsx` mediante la máquina de estados `currentView`:
- `'auth'`: Login / Registro (si no hay sesión en Supabase Auth).
- `'dashboard'`: Panel con KPIs y gráficos.
- `'items-list'`: Explorador de registros con tabla interactiva y conmutador a tablero Kanban.
- `'item-detail'`: Ficha técnica profunda del registro (`selectedItemId`) con tabs y acciones.
- `'item-create'`: Formulario guiado por pasos (Wizard) para registrar nuevos datos.
- `'settings'`: Configuración de perfil y preferencias.

# 3. SIDEBAR Y HEADER PERSISTENTES
- **Sidebar Izquierdo:**
  * Logo con icono brillante y nombre del proyecto.
  * Botones de navegación interactivos con indicador de ruta activa:
    - Dashboard (`LayoutDashboard`) -> activa `'dashboard'`
    - Registros (`Layers`) -> activa `'items-list'`
    - Nuevo Registro (`PlusCircle`) -> activa `'item-create'`
    - Configuración (`Settings`) -> activa `'settings'`
  * Perfil del usuario activo en la base con botón para cerrar sesión (`LogOut`).
- **Header Superior:**
  * Breadcrumbs dinámicas que reflejan la vista activa (ej. `Inicio > Registros > Detalle`).
  * Buscador rápido con atajo `Ctrl+K`.
  * Botón destacado "+ Nuevo Registro".

# 4. CONEXIÓN A SUPABASE Y VARIABLES DE ENTORNO
Configura el cliente oficial de Supabase con las siguientes credenciales:
```javascript
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://desxxxxxxxxxswwwwc.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_BG-ADvvcccccccxxxxxxxxxxxxxxxxxxxxxxxxxx";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
});
```

# 5. GESTIÓN DE AUTENTICACIÓN Y SESIÓN
- Si el usuario no ha iniciado sesión, renderiza la vista `AuthView` (Login / Registro).
- Al iniciar sesión con éxito, guarda la sesión y redirige automáticamente al `'dashboard'`.
- Escucha activamente el estado de la sesión mediante `supabase.auth.onAuthStateChange`.

# 6. OPERACIONES CRUD EN TIEMPO REAL VINCULADAS A auth.uid()
- Consultar registros: `supabase.from('[tabla]').select('*').order('created_at', { ascending: false })`
- Crear registro: `supabase.from('[tabla]').insert([{ ...datos, owner_id: user.id }])`
- Actualizar registro: `supabase.from('[tabla]').update(cambios).eq('id', selectedItemId)`
- Eliminar registro: `supabase.from('[tabla]').delete().eq('id', itemId)`

# 7. EXPERIENCIA DE USUARIO (LOS 4 ESTADOS DE UI)
- Skeleton Loaders animados mientras cargan los datos en cada pantalla.
- Notificaciones Toast flotantes en la esquina inferior derecha para confirmar acciones.
- Empty States ilustrados cuando no haya registros creados.
- Alertas de error con botón "Reintentar" si falla la red o las políticas RLS.
- Diálogo modal de confirmación antes de eliminar cualquier elemento.
```

---

## ⚠️ Paso Previo Crítico: Configurar Auth en Supabase Sandbox

Antes de probar el registro en AI Studio:
1. Ve a tu panel de Supabase ➔ **Authentication** ➔ **Providers** ➔ **Email**.
2. Desactiva la opción **"Confirm email"** (ponla en `OFF`).
3. Haz clic en **Save**.

> **¿Por qué es vital?** Por defecto, Supabase exige confirmar el correo mediante un enlace. Al desactivar esta opción durante el desarrollo, el aprendiz puede registrar un usuario de prueba (ej. `test@example.com`) e iniciar sesión de inmediato en AI Studio sin quedar bloqueado.

## 🎨 Guía de Traducción: De Tokens de Estilo de Stitch a Clases Tailwind en AI Studio

Cuando lleves el diseño generado en Google Stitch a Google AI Studio, utiliza esta tabla de equivalencias de Tailwind CSS según el estilo visual que hayas elegido del catálogo de 40 estilos:

| Estilo Visual de Stitch | Clases Clave de Tailwind CSS para AI Studio | Efecto Visual Resultante |
| :--- | :--- | :--- |
| **Glasmorfismo / Liquid Glass** | `bg-slate-900/60 backdrop-blur-xl border border-white/10 shadow-2xl rounded-2xl` | Vidrio esmerilado translúcido con reflejos sutiles. |
| **Bento Grid** | `grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-auto rounded-2xl` | Rejilla asimétrica modular tipo Apple/Vercel. |
| **Neo-Brutalism** | `border-[3px] border-black shadow-[4px_4px_0px_#000] font-black rounded-lg bg-yellow-300` | Bordes negros gruesos y sombras sólidas sin difuminar. |
| **Terminal / Hacker UI** | `bg-[#0d1117] text-emerald-400 font-mono border border-emerald-500/30 rounded-md` | Consola CLI con texto verde fósforo y tipografía mono. |
| **Cyberpunk** | `bg-[#0a0a0f] border-cyan-500/60 shadow-[0_0_20px_rgba(6,182,212,0.3)] text-cyan-300` | Fondo negro carbón con resplandor neón cian/magenta. |
| **Claymorphism** | `rounded-3xl bg-indigo-100 shadow-[inset_0_4px_8px_rgba(255,255,255,0.6),0_12px_24px_rgba(99,102,241,0.2)]` | Relieve 3D inflado de arcilla suave en tonos pastel. |
| **Aurora / Gradient UI** | `bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950 shadow-indigo-500/20` | Fondos atmosféricos profundos con halos difusos. |
| **Minimalismo** | `bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 p-8 border border-slate-200 dark:border-slate-800` | Espacio negativo amplio, líneas finas y sobriedad. |

---

## 🩹 Protocolo de Parches Quirúrgicos para Aprendices en AI Studio

Cuando algo no funcione o quieras mejorar un componente, **NO le pidas a AI Studio que reescriba toda la aplicación**. Usa prompts quirúrgicos específicos:

* **Para corregir diseño de Stitch:**  
  *"En el componente `KpiGrid`, ajusta las tarjetas para que tengan fondo `#1e293b`, borde `#334155` y efecto `backdrop-blur-sm` manteniendo intactas las props de datos."*

* **Para solucionar errores de RLS o inserción:**  
  *"Revisa la función `handleCreateProject`: asegúrate de obtener el `user.id` con `supabase.auth.getUser()` y asignarlo explícitamente a `owner_id` antes del `insert`."*

* **Para agregar estados de carga:**  
  *"En la vista de `ProjectsList`, muestra un `SkeletonCard` de 3 filas animadas mientras `loading === true` antes de renderizar la tabla."*


