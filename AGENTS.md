# 🤖 AGENTS.md — Directiva Maestra de Desarrollo e Integración Agéntica
> **Estándar:** Marco PIC 2026 (*Precision, Isolation & Context Framework*)  
> **Ecosistema:** Google Gemini Gems ➔ Google Stitch ➔ Supabase PostgreSQL ➔ Google AI Studio Apps

---

## 1. ## System Brief (Visión y Límites del Sistema)

### 🎯 Propósito Central
Guiar a aprendices, desarrolladores y agentes de IA en la construcción de aplicaciones web Single Page Applications (SPA) completas, modernas y listas para producción, conectadas en tiempo real a una base de datos PostgreSQL en Supabase. El proceso se rige estrictamente por la **Tetralogía Documental Canónica (Plan, PRD, User Flow, TRD)** para erradicar el *Understanding Rot* (degradación conceptual) y garantizar la *Experiential Correctness*.

### 📦 La Cadena Canónica de los 7 Artefactos
1. `01_PLAN_PROYECTO.md` — Alcance estricto del MVP (In-Scope vs Out-of-Scope), dependencias y sprints.
2. `02_PRD_PRODUCTO.md` — User Personas, Requerimientos Funcionales (RF) con escenarios Gherkin BDD y Reglas de Negocio.
3. `03_USER_FLOWS_UX.md` — Diagramas Mermaid de navegación y especificación obligatoria de los 4 estados de UI (*Empty*, *Loading Skeleton*, *Success Toast*, *Error Alert & Retry*).
4. `04_TRD_ARQUITECTURA_TECNICA.md` — Stack tecnológico con versiones, Diagrama ERD relacional y especificaciones de seguridad.
5. `05_ESQUEMA_SUPABASE_COMPLETO.sql` — Script SQL DDL con `gen_random_uuid()`, triggers automáticos (`handle_updated_at`, `handle_new_user`) y Row Level Security (RLS) habilitado al 100%.
6. `06_PROMPTS_GOOGLE_STITCH.md` — Prompts visuales para `stitch.withgoogle.com` aplicando estilos del catálogo de 40 estilos frontend y los 4 estados de pantalla.
7. `07_PROMPT_MAESTRO_AISTUDIO.md` — Prompt de compilación fullstack para `aistudio.google.com/apps`.

### ⛔ Límites del Alcance del MVP
* **IN-SCOPE (Dentro del MVP):**
  * Autenticación segura vía Supabase Auth (`email` + `password`).
  * Creación automática de fila en `public.profiles` mediante trigger `AFTER INSERT ON auth.users`.
  * Operaciones CRUD completas sobre las entidades principales del dominio vinculadas a `auth.uid()`.
  * Dashboard con tarjetas KPI calculadas en tiempo real.
  * Manejo estricto de los 4 estados de UI y notificaciones Toast accesibles.
* **OUT-OF-SCOPE (Excluido para v2.0):**
  * Pasarelas de pago (Stripe) y facturación electrónica.
  * Webhooks externos no autenticados.
  * Notificaciones push móviles y sincronización offline compleja.

---

## 2. ## Operational Rules (Convenciones de Código y Arquitectura)

### 🏗️ Stack Tecnológico
* **Frontend:** React 18/19 SPA (o Vanilla JS ES Modules modular), Tailwind CSS, Lucide Icons.
* **Backend & DB:** Supabase PostgreSQL 15+, Supabase Auth, Row Level Security (RLS), Triggers PL/pgSQL.
* **Cliente JS:** `@supabase/supabase-js` v2.x.

### 📁 Estructura Modular Estándar
```text
src/
├── lib/
│   └── supabaseClient.js      # Cliente singleton con persistencia de sesión
├── context/
│   └── AuthContext.jsx        # AuthProvider y hook useAuth() con onAuthStateChange
├── services/
│   ├── profileService.js      # Consultas y actualización de public.profiles
│   └── [entity]Service.js     # Operaciones CRUD con try/catch estructurado
├── components/
│   ├── layout/                # Sidebar, Header, KPI Cards, Modal Wrapper
│   ├── ui/                    # Skeletons, Toasts, Badges, Botones
│   └── features/              # Tablas de datos, Tablero Kanban, Formularios
└── App.jsx                    # Enrutamiento condicional (Auth vs Dashboard)
```

### 🔒 Reglas Inviolables de Seguridad y Base de Datos
1. **SSoT (Single Source of Truth):** Queda prohibido hardcodear datos simulados o IDs de prueba. Todo dato proviene de Supabase.
2. **Uso Exclusivo de `SUPABASE_ANON_KEY`:** NUNCA utilizar ni exponer la clave `service_role` en el frontend.
3. **RLS en el 100% de Tablas:** Ninguna tabla pública puede crearse sin `ALTER TABLE [tabla] ENABLE ROW LEVEL SECURITY;`.
4. **Vínculo Estricto con `auth.uid()`:** Toda inserción debe asignar `owner_id = user.id` y toda política RLS de modificación debe verificar `USING (auth.uid() = owner_id)`.

---

## 3. ## Harness Config (Ganchos de Seguridad y Límites de Ejecución)

### 🚦 Pre-Execution Checklist (Puertas de Calidad previas a la generación en AI Studio)
Antes de ingresar el prompt en `aistudio.google.com/apps`, verificar:
- [ ] **Configuración Auth Sandbox en Supabase:** Desactivar *Confirm Email* en `Authentication -> Providers -> Email -> Confirm email: OFF` para permitir registro y login inmediato en pruebas.
- [ ] **Esquema SQL Ejecutado:** Las tablas `profiles`, `projects` y `tasks` (o entidades del dominio) están creadas en Supabase con sus llaves primarias UUID y llaves foráneas.
- [ ] **RLS Activo y Verificado:** Las políticas de `SELECT`, `INSERT`, `UPDATE` y `DELETE` están activas en el panel de Supabase.
- [ ] **Credenciales Disponibles:** `SUPABASE_URL` y `SUPABASE_ANON_KEY` copiadas desde *Project Settings -> API*.

### 🛑 Límites de Contexto y Prevención de Degradación (*Context Rot*)
- Los archivos de componentes no deben superar las **250 líneas de código**. Si un componente crece, debe modularizarse en subcomponentes (`components/ui/` o `components/features/`).
- En Google AI Studio, evitar pedir refactorizaciones masivas en un solo mensaje. Aplicar el protocolo de parches incrementales.

---

## 4. ## Persistence Loop (Protocolo de Iteración y Verificación Cruzada)

### 🔄 Ciclo de Verificación Maker-Checker
Para cada requerimiento funcional implementado:
1. **Maker (Generación):** AI Studio compila el componente reactivo y el servicio de conexión a Supabase.
2. **Checker (Auditoría Técnica):**
   * ¿El formulario valida campos vacíos antes de enviar a Supabase?
   * ¿Muestra el Skeleton Loader mientras la promesa de Supabase se resuelve?
   * ¿Maneja el código de error `42501` (violación de RLS) o errores de red con un Toast explicativo?
   * ¿Limpia el estado y actualiza la lista reactivamente tras un `INSERT` exitoso?
3. **Sync & Persistencia:**
   * Abrir Supabase Dashboard ➔ *Table Editor*.
   * Verificar que la fila insertada exista y que su `owner_id` coincida exactamente con el UUID del usuario autenticado en `auth.users`.

### 🩹 Protocolo de Parches Quirúrgicos en AI Studio
Si se detecta un bug en AI Studio, el aprendiz NUNCA debe pedir "reescribe la app". Debe usar la siguiente fórmula de prompt quirúrgico:
```text
"En el archivo [NombreDelArchivo.jsx], ajusta ÚNICAMENTE la función [nombreDeFuncion] para que [comportamiento esperado].
No modifiques el estado global, ni los estilos de otros componentes, ni la inicialización del cliente de Supabase."
```
