/**
 * generators.js
 * Lógica para la generación dinámica de Prompts, Artefactos MD individuales, SQL y Conexión Supabase
 */

window.Generators = {
  activeArtifactTab: 'srs',

  // 0. Visualizador de las 7 Fases del SDLC (Antes vs Hoy)
  showSdlcPhase: function(phaseNum) {
    const detailEl = document.getElementById('sdlc-phase-detail');
    if (!detailEl) return;

    // Actualizar botones activos
    for (let i = 1; i <= 7; i++) {
      const btn = document.getElementById(`btn-sdlc-${i}`);
      if (btn) {
        if (i === phaseNum) btn.classList.add('active');
        else btn.classList.remove('active');
      }
    }

    const phases = {
      1: {
        title: "Fase 1: Requisitos & Planificación",
        icon: "📋",
        before: "Semanas de reuniones y documentos Word de 100 páginas que nadie leía y quedaban desactualizados a los 3 días.",
        today: "Gemas socráticas en Gemini que extraen requerimientos en minutos, generando SRS formal, criterios Gherkin y diagramas C4.",
        tools: "Gemini Custom Gems · Mermaid.js · Linear · Eraser.io",
        impact: "Claridad total: no se escribe una línea de código sin entender la necesidad del usuario.",
        color: "#818cf8"
      },
      2: {
        title: "Fase 2: Diseño UI/UX & Prototipado",
        icon: "🎨",
        before: "Diseñadores creando wireframes estáticos en Photoshop o Figma que los programadores debían 're-escribir' desde cero en HTML.",
        today: "Google Stitch y v0 que generan interfaces completas en lenguaje natural, exportando código con Tailwind y componentes accesibles.",
        tools: "Google Stitch · v0.dev · Figma AI · shadcn/ui · Lucide Icons",
        impact: "Fidelidad inmediata: el prototipo visual nace listo para integrarse a la lógica real.",
        color: "#34d399"
      },
      3: {
        title: "Fase 3: Arquitectura & Base de Datos",
        icon: "🐘",
        before: "Servidores SQL frágiles, scripts manuales y bases de datos expuestas a vulnerabilidades por falta de aislamiento de datos.",
        today: "Supabase PostgreSQL con Row Level Security (RLS), llaves UUID, triggers de actualización y tipos TypeScript autogenerados.",
        tools: "Supabase · PostgreSQL RLS · Drizzle ORM · Supabase CLI",
        impact: "Seguridad por diseño: la protección de los datos vive directamente en el motor SQL.",
        color: "#c084fc"
      },
      4: {
        title: "Fase 4: Desarrollo & Codificación Fullstack",
        icon: "⚡",
        before: "Escribir cientos de líneas de código repetitivo ('boilerplate'), memorizar sintaxis y buscar errores en foros durante horas.",
        today: "Google AI Studio y Cursor orquestando componentes modulares reactivos y autocompletado contextual profundo.",
        tools: "Google AI Studio Apps · React 18/19 · TypeScript · Cursor / Windsurf",
        impact: "Velocidad y foco: el desarrollador lidera como arquitecto y no como picador de código.",
        color: "#38bdf8"
      },
      5: {
        title: "Fase 5: Testing & QA Automatizado",
        icon: "🧪",
        before: "Pruebas manuales lentas haciendo clics; los tests automáticos se descartaban por 'falta de tiempo'.",
        today: "Playwright y Vitest generados automáticamente a partir de los criterios Gherkin de la fase de requisitos.",
        tools: "Playwright (E2E) · Vitest (Unit) · Biome · ESLint",
        impact: "Resiliencia absoluta: se valida cada flujo de usuario en cada cambio sin esfuerzo manual.",
        color: "#f472b6"
      },
      6: {
        title: "Fase 6: CI/CD & Despliegue en la Nube",
        icon: "🚀",
        before: "Subir archivos por FTP arrastrando carpetas a un servidor Apache; caídas y estrés en cada lanzamiento.",
        today: "GitHub Actions ejecutando tests automáticos y desplegando a Vercel/Cloudflare Edge en menos de 60 segundos.",
        tools: "GitHub Actions · Vercel · Cloudflare Pages · Docker",
        impact: "Despliegue continuo: Zero-Downtime y reversión instantánea ante cualquier incidente.",
        color: "#60a5fa"
      },
      7: {
        title: "Fase 7: Observabilidad & Mantenimiento",
        icon: "🚨",
        before: "Enterarse de los errores cuando el cliente llamaba enojado; logs de texto gigantescos e incomprensibles.",
        today: "Sentry y PostHog capturando excepciones en tiempo real, con mapa de calor y análisis de causa raíz con IA.",
        tools: "Sentry · PostHog · OWASP ZAP · Dependabot",
        impact: "Evolución proactiva: se corrigen problemas antes de que el usuario final los note.",
        color: "#f87171"
      }
    };

    const p = phases[phaseNum] || phases[1];

    detailEl.innerHTML = `
      <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid var(--border-color); padding-bottom: 0.75rem; margin-bottom: 1rem;">
        <h4 style="color: ${p.color}; font-size: 1.25rem; display: flex; align-items: center; gap: 0.5rem;">
          <span>${p.icon}</span> <span>${p.title}</span>
        </h4>
        <span style="font-size: 0.8rem; background: rgba(255,255,255,0.08); padding: 0.2rem 0.6rem; border-radius: 9999px; color: var(--text-muted);">Herramientas: ${p.tools}</span>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem;">
        <div style="background: rgba(239, 68, 68, 0.1); border-left: 4px solid #ef4444; padding: 1rem; border-radius: 8px;">
          <h5 style="color: #f87171; font-weight: 700; margin-bottom: 0.4rem;">👴 Cómo se hacía ANTES (Flujo Tradicional)</h5>
          <p style="color: #cbd5e1; font-size: 0.9rem; line-height: 1.5;">${p.before}</p>
        </div>

        <div style="background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; padding: 1rem; border-radius: 8px;">
          <h5 style="color: #34d399; font-weight: 700; margin-bottom: 0.4rem;">🚀 Cómo se hace HOY (Flujo con IA)</h5>
          <p style="color: #cbd5e1; font-size: 0.9rem; line-height: 1.5;">${p.today}</p>
        </div>
      </div>

      <div style="margin-top: 1rem; padding: 0.75rem 1rem; background: rgba(99, 102, 241, 0.1); border-radius: 6px; font-size: 0.88rem; color: #a5b4fc;">
        💡 <strong>Salto Holístico:</strong> ${p.impact}
      </div>
    `;
  },

  // 1. Configurador de la Cadena de Gemas Especializadas
  updateMultiGemPrompt: function() {
    const select = document.getElementById('multi-gem-select');
    const output = document.getElementById('multi-gem-output');
    const filenameEl = document.getElementById('multi-gem-filename');
    if (!select || !output) return;

    const val = select.value;
    let text = "";
    let filename = "";

    if (val === 'g1') {
      filename = "GEMA_1_ANALISTA_REQUISITOS_INSTRUCTIONS.md";
      text = `# ROL
Eres un Analista de Requisitos de Software Senior con certificación IREB y experiencia en metodologías ágiles (Scrum, Kanban) y BDD. Tu especialidad es transformar ideas en especificaciones técnicas precisas y testeables.

# MISIÓN
Guiar al aprendiz paso a paso para extraer, estructurar y formalizar los requisitos de su proyecto. NUNCA inventes funcionalidades: siempre pregunta al usuario.

# METODOLOGÍA SOCRÁTICA
1. **Fase de Descubrimiento (3-5 preguntas):**
   - ¿Qué problema específico resuelve tu aplicación y para quién?
   - ¿Quiénes son los tipos de usuarios (roles)?
   - ¿Cuáles son las 3-5 funcionalidades estrella del MVP?
   - ¿Existen restricciones técnicas o de negocio?

2. **Fase de Formalización:**
   Genera DOS archivos Markdown estructurados:
   - Archivo 1: '01_SRS_REQUISITOS.md' (Ficha de proyecto, Roles/Permisos, RF-01 a RF-XX con MoSCoW, RNF y Diagrama Mermaid ERD).
   - Archivo 2: '02_CASOS_USO_GHERKIN.md' (Criterios de Aceptación Dado-Cuando-Entonces con happy path y edge cases).

3. **Fase de Validación:**
   Pide confirmación antes de pasar a la siguiente etapa e indica al aprendiz que suba los archivos a 'Conocimientos' de la Gema 2.`;
    } else if (val === 'g2') {
      filename = "GEMA_2_ARQUITECTO_SUPABASE_INSTRUCTIONS.md";
      text = `# ROL
Eres un Administrador de Bases de Datos PostgreSQL Senior y Arquitecto Backend especializado en Supabase.

# MISIÓN
Leer el archivo '01_SRS_REQUISITOS.md' cargado en tus Conocimientos y generar el script DDL completo '03_ESQUEMA_SUPABASE_RLS.sql'.

# ESPECIFICACIONES TÉCNICAS OBLIGATORIAS
1. Extensión 'pgcrypto' para llaves primarias UUID: 'id UUID DEFAULT gen_random_uuid() PRIMARY KEY'.
2. Función reutilizable 'handle_updated_at()' y triggers BEFORE UPDATE en cada tabla.
3. Función 'handle_new_user()' con SECURITY DEFINER para crear perfil automáticamente al registrarse en Auth.
4. Tabla 'profiles' vinculada a 'auth.users(id)' con ON DELETE CASCADE.
5. Tablas de negocio con integridad referencial, restricciones CHECK e índices B-Tree en FKs.
6. Habilitación estricta de Row Level Security ('ALTER TABLE x ENABLE ROW LEVEL SECURITY;').
7. Políticas RLS granulares para SELECT, INSERT, UPDATE, DELETE vinculadas a 'auth.uid()'.
8. Entrega el archivo SQL limpio y listo para ejecutar en el SQL Editor de Supabase.`;
    } else if (val === 'g3') {
      filename = "GEMA_3_DISENADOR_STITCH_INSTRUCTIONS.md";
      text = `# ROL
Eres un Diseñador UI/UX Senior con experiencia en Design Systems, Tailwind CSS y Google Stitch (stitch.withgoogle.com).

# MISIÓN
Leer los requisitos y casos de uso de tus Conocimientos y generar '04_PROMPTS_GOOGLE_STITCH.md' con prompts visuales de alta fidelidad.

# ESTRUCTURA DE CADA PROMPT PARA STITCH
1. **Contexto & Objetivo:** Tipo de aplicación y rol del usuario.
2. **Layout Estructural:** Sidebar (logo, navegación, perfil), Header (búsqueda Ctrl+K, notificaciones, botón '+ Nuevo'), Área central (grid 12 columnas).
3. **Componentes Clave:** 4 Tarjetas KPIs con métricas y badges de tendencia, tablas interactivas con filtros, modales con validación y empty states ilustrados.
4. **Sistema de Diseño:** Paleta Dark Slate (#0f172a / #1e293b), acentos en Índigo (#6366f1) / Cian (#06b6d4), tipografía Inter, Glassmorphism sutil y bordes rounded-xl.
5. **Estados UI:** Skeleton loaders, microinteracciones hover y toasts accesibles.`;
    } else {
      filename = "GEMA_4_ORQUESTADOR_AISTUDIO_INSTRUCTIONS.md";
      text = `# ROL
Eres un Arquitecto Fullstack Senior especializado en Google AI Studio Apps (aistudio.google.com/apps).

# MISIÓN
Leer '03_ESQUEMA_SUPABASE_RLS.sql' y '04_PROMPTS_GOOGLE_STITCH.md' y ensamblar '05_PROMPT_MAESTRO_AISTUDIO.md'.

# ESTRUCTURA DEL PROMPT MAESTRO
1. **Stack:** React 18/19 SPA + Tailwind CSS + Lucide Icons + '@supabase/supabase-js' v2.x.
2. **Variables de Entorno:** SUPABASE_URL y SUPABASE_ANON_KEY en un cliente singleton modular.
3. **Autenticación:** AuthProvider con 'supabase.auth.onAuthStateChange', login, registro y protección de rutas.
4. **CRUD Reactivo:** Operaciones completas sobre las tablas existentes en Supabase respetando RLS.
5. **UI & UX:** Componentes basados en el prototipo de Stitch, 4 KPIs dinámicos, Skeleton Loaders, Toasts y Empty States.
6. **Arquitectura:** Estructura modular /src/features/ con patrón de 3 capas (UI ➔ Hook ➔ Service).`;
    }

    if (filenameEl) filenameEl.textContent = filename;
    output.textContent = text;
  },

  // 2. Generador de Artefactos Individuales en Pestañas (.md y .sql)
  updateAllArtifacts: function() {
    const appName = document.getElementById('art-app-name')?.value || 'EduPulse SaaS';
    const purpose = document.getElementById('art-purpose')?.value || 'Plataforma educativa interactiva';
    const actor = document.getElementById('art-actor')?.value || 'Profesor / Estudiante';
    const outputEl = document.getElementById('artifact-current-output');
    const filenameEl = document.getElementById('artifact-current-filename');

    if (!outputEl) return;

    const tab = this.activeArtifactTab;

    if (tab === 'srs') {
      if (filenameEl) filenameEl.textContent = '01_SRS_REQUISITOS.md';
      outputEl.textContent = `# 📋 Especificación de Requisitos de Software (SRS)
## Proyecto: ${appName}
**Propósito:** ${purpose}

---

### 1. Ficha Técnica y Alcance del MVP
- **Nombre:** ${appName}
- **Actor Principal:** ${actor}
- **Público Objetivo:** Usuarios y administradores que requieren una solución ágil y segura.
- **Alcance MVP:** Autenticación de usuarios, gestión de registros principales, dashboard con KPIs y seguridad RLS.

---

### 2. Matriz de Roles y Permisos (CRUD)
| Rol | Crear | Leer | Editar | Eliminar |
| :--- | :--- | :--- | :--- | :--- |
| **${actor}** | Propios | Propios y Públicos | Propios | Propios |
| **Administrador** | Todos | Todos | Todos | Todos |

---

### 3. Requerimientos Funcionales (RF)
| ID | Nombre | Prioridad | Descripción |
| :--- | :--- | :--- | :--- |
| **RF-01** | Autenticación Segura | **Must Have** | Registro e inicio de sesión con Supabase Auth y creación automática de perfil. |
| **RF-02** | Gestión de Entidad Principal | **Must Have** | Creación, lectura con filtros, edición y eliminación de registros del usuario. |
| **RF-03** | Panel de Métricas (Dashboard) | **Should Have** | Visualización de 4 tarjetas KPIs calculadas dinámicamente desde Supabase. |
| **RF-04** | Notificaciones y Feedback | **Could Have** | Sistema de notificaciones Toast accesibles ante cada operación exitosa o error. |

---

### 4. Requerimientos No Funcionales (RNF)
- **RNF-01 (Seguridad):** Todas las tablas deben tener **Row Level Security (RLS)** activado en PostgreSQL.
- **RNF-02 (Rendimiento):** Tiempos de respuesta de UI < 200 ms y llamadas a API < 1s.
- **RNF-03 (Responsividad):** Adaptable a dispositivos móviles, tablets y desktop con Tailwind CSS.
- **RNF-04 (Accesibilidad):** Cumplimiento WCAG 2.1 AA con contraste mínimo y aria-labels.

---

### 5. Diagrama Entidad-Relación (Mermaid ERD)
\`\`\`mermaid
erDiagram
    PROFILES ||--o{ ITEMS : creates
    PROFILES {
        uuid id PK "auth.users.id"
        string email
        string full_name
        string role
        timestamp created_at
    }
    ITEMS {
        uuid id PK
        uuid user_id FK
        string title
        text description
        string status
        timestamp created_at
        timestamp updated_at
    }
\`\`\``;
    } else if (tab === 'gherkin') {
      if (filenameEl) filenameEl.textContent = '02_CASOS_USO_GHERKIN.md';
      outputEl.textContent = `# 🥒 Criterios de Aceptación y Casos de Uso (Gherkin BDD)
## Proyecto: ${appName}

---

### Característica: Autenticación de Usuarios (RF-01)
  Escenario: Registro e inicio de sesión exitoso
    DADO que un usuario no autenticado se encuentra en la pantalla de registro
    CUANDO ingresa un correo electrónico válido, una contraseña segura y su nombre
    Y hace clic en "Crear Cuenta"
    ENTONCES el sistema registra al usuario en Supabase Auth
    Y crea automáticamente su fila en la tabla 'profiles'
    Y redirige al Dashboard principal mostrando un mensaje de bienvenida.

  Escenario: Intento de acceso con credenciales incorrectas
    DADO que el usuario está en la pantalla de Login
    CUANDO ingresa una contraseña incorrecta
    ENTONCES el sistema muestra una alerta accesible "Credenciales inválidas"
    Y mantiene los datos del formulario sin recargar la página.

---

### Característica: Gestión de Registros Principales (RF-02)
  Escenario: Creación exitosa de un registro con persistencia en Supabase
    DADO que el ${actor} tiene sesión activa y se encuentra en el Dashboard
    CUANDO hace clic en "+ Nuevo Registro", completa título y descripción requeridos
    Y confirma el formulario modal
    ENTONCES el registro se inserta en Supabase vinculado a 'auth.uid()'
    Y la tabla se actualiza reactivamente mostrando una notificación toast "✓ Registro creado".

  Escenario: Intento de creación con campos requeridos vacíos
    DADO que el usuario abre el modal de creación
    CUANDO intenta guardar dejando el título en blanco
    ENTONCES el sistema resalta el campo con borde rojo y mensaje "Este campo es obligatorio"
    Y no realiza ninguna petición a la base de datos.`;
    } else if (tab === 'sql') {
      if (filenameEl) filenameEl.textContent = '03_ESQUEMA_SUPABASE_RLS.sql';
      outputEl.textContent = `-- =============================================================================
-- ESQUEMA DDL Y POLÍTICAS RLS PARA SUPABASE: ${appName.toUpperCase()}
-- =============================================================================

-- 1. Extensiones
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- 2. Función para actualización automática de updated_at
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = timezone('utc'::text, now());
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 3. Función para creación automática de perfil al registrarse en Auth
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.profiles (id, email, full_name, avatar_url)
    VALUES (
        NEW.id,
        NEW.email,
        COALESCE(NEW.raw_user_meta_data->>'full_name', split_part(NEW.email, '@', 1)),
        NEW.raw_user_meta_data->>'avatar_url'
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- 4. Tabla de Perfiles
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT UNIQUE NOT NULL,
    full_name TEXT,
    avatar_url TEXT,
    role TEXT DEFAULT 'user' CHECK (role IN ('admin', 'manager', 'user')),
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);
CREATE TRIGGER on_profiles_updated BEFORE UPDATE ON public.profiles
    FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

-- 5. Tabla Principal de Items
CREATE TABLE IF NOT EXISTS public.items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    description TEXT,
    status TEXT DEFAULT 'active' CHECK (status IN ('active', 'completed', 'archived')),
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);
CREATE TRIGGER on_items_updated BEFORE UPDATE ON public.items
    FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();
CREATE INDEX IF NOT EXISTS idx_items_user_id ON public.items(user_id);

-- 6. Habilitación de Row Level Security (RLS)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.items ENABLE ROW LEVEL SECURITY;

-- 7. Políticas de Seguridad RLS
CREATE POLICY "Lectura de perfiles para autenticados" ON public.profiles
    FOR SELECT TO authenticated USING (true);

CREATE POLICY "Edición de propio perfil" ON public.profiles
    FOR UPDATE TO authenticated USING (auth.uid() = id);

CREATE POLICY "Lectura de items propios" ON public.items
    FOR SELECT TO authenticated USING (auth.uid() = user_id);

CREATE POLICY "Creación de items propios" ON public.items
    FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Actualización de items propios" ON public.items
    FOR UPDATE TO authenticated USING (auth.uid() = user_id);

CREATE POLICY "Eliminación de items propios" ON public.items
    FOR DELETE TO authenticated USING (auth.uid() = user_id);`;
    } else if (tab === 'stitch') {
      if (filenameEl) filenameEl.textContent = '04_PROMPTS_GOOGLE_STITCH.md';
      outputEl.textContent = `# 🎨 Prompt de Diseño Visual para Google Stitch (stitch.withgoogle.com)
## Proyecto: ${appName}

Diseña una interfaz web SaaS moderna, limpia y altamente profesional para "${appName}", enfocada en ${purpose}.

ESTRUCTURA DE PANTALLA (DASHBOARD PRINCIPAL):
1. Sidebar Izquierdo:
   - Logo estilizado de '${appName}' con icono moderno y badge 'PRO'.
   - Navegación vertical: Dashboard (activo), Mis Registros, Analíticas, Configuración.
   - Indicador de estado del sistema (punto verde "En línea").
   - Perfil de usuario en el pie con avatar, nombre, rol y botón de cerrar sesión.

2. Header Superior:
   - Barra de búsqueda global con atajo de teclado 'Ctrl+K'.
   - Notificaciones con badge numérico rojo.
   - Botón de acción principal destacado '+ Nuevo Registro' con gradiente índigo a púrpura.

3. Sección de Métricas (4 Tarjetas KPIs en Grid):
   - Tarjeta 1: "Total Activos" -> Valor 48 (+12% este mes).
   - Tarjeta 2: "Tasa de Cumplimiento" -> Valor 94.2% (indicador verde).
   - Tarjeta 3: "Tiempo Medio" -> Valor 2.3 días (-15% más rápido).
   - Tarjeta 4: "Usuarios Activos" -> Valor 16 miembros.

4. Sección Central Dinámica:
   - Selector de pestañas: "Vista Lista" / "Vista Tablero".
   - Filtros inline por estado (Activo, Completado, Archivado) y buscador reactivo.
   - Tabla interactiva con etiquetas de colores, fecha de entrega y acciones rápidas (Editar, Eliminar).
   - Modal flotante con formulario validado para crear un nuevo registro.

SISTEMA DE DISEÑO:
- Paleta: Dark Mode Slate (#0f172a, #1e293b), bordes (#334155), acentos en Índigo (#6366f1).
- Acabados: Glassmorphism suave (backdrop-blur-md), esquinas rounded-xl, sombras suaves.
- Tipografía: Inter / Plus Jakarta Sans con jerarquía estricta.`;
    } else {
      if (filenameEl) filenameEl.textContent = '05_PROMPT_MAESTRO_AISTUDIO.md';
      outputEl.textContent = `# ⚡ Prompt Maestro para Google AI Studio (aistudio.google.com/apps)
## Proyecto: ${appName}

# OBJETIVO DE LA APLICACIÓN
Construye la aplicación web SPA profesional "${appName}" utilizando React 18/19, Tailwind CSS y Lucide Icons, conectada a una base de datos PostgreSQL en Supabase. Propósito: ${purpose}.

# STACK TECNOLÓGICO Y LIBRERÍAS
- Framework: React 18/19 (o Vanilla JS modular con ES Modules).
- Estilos: Tailwind CSS (Dark Mode Slate 900/800, acentos en Índigo 500 y Glassmorphism sutil).
- Iconos: Lucide Icons ('lucide-react' o CDN).
- Cliente Backend: '@supabase/supabase-js' versión 2.x.
- Notificaciones: Toasts accesibles para confirmación de acciones y reportes de error.

# CONFIGURACIÓN DEL CLIENTE SUPABASE
\`\`\`javascript
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://desxxxxxxxxxswwwwc.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_BG-ADvvcccccccxxxxxxxxxxxxxxxxxxxxxxxxxx";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
});
\`\`\`

# GESTIÓN DE AUTENTICACIÓN
1. Implementa un AuthProvider que escuche 'supabase.auth.onAuthStateChange'.
2. Vistas de Login y Registro con validación en tiempo real.
3. Si el usuario no está autenticado, muestra la pantalla de bienvenida con Login/Registro. Si está autenticado, muestra el Dashboard con sus datos.

# CRUD Y FUNCIONALIDADES
1. Listar registros de la tabla 'items' filtrando por 'user_id = auth.uid()'.
2. Crear registros mediante formulario modal validado con persistencia en Supabase.
3. Actualizar estado y eliminar registros con diálogo de confirmación.
4. 4 Tarjetas KPIs dinámicas calculadas desde las consultas de datos.
5. Skeleton Loaders durante la carga, Empty States ilustrados y Toasts para feedback.`;
    }
  },

  // 3. Cargar presets de Google Stitch
  loadStitchPreset: function() {
    const preset = document.getElementById('stitch-preset-select')?.value;
    const outputEl = document.getElementById('stitch-preset-output');
    if (!outputEl) return;

    if (preset === 'dashboard-saas') {
      outputEl.textContent = `Diseña una interfaz web SaaS moderna y altamente profesional para una plataforma de gestión ágil de proyectos de software.

Layout:
- Sidebar Izquierdo: Logo con icono de cohete, navegación con iconos (Dashboard activo, Sprints, Tareas, Métricas, Ajustes) y perfil de usuario en el pie.
- Header Superior: Buscador global con placeholder "Buscar... (Ctrl+K)", notificaciones con badge e indicador de tema claro/oscuro.
- 4 Tarjetas KPIs: Sprints Activos (3), Tareas Completadas (142), Velocidad del Equipo (94%), Miembros (18).
- Tablero Kanban interactivo: Columnas (Por Hacer, En Progreso, En Revisión, Hecho) con tarjetas drag-and-drop, avatares y etiquetas de prioridad.
- Modal Flotante: Formulario de creación de tarea con campos de título, descripción, prioridad, responsable y fecha límite.

Estilo: Dark Slate (#0f172a, #1e293b), acentos en Índigo (#6366f1), Glassmorphism sutil, bordes rounded-xl y tipografía Inter.`;
    } else if (preset === 'marketplace') {
      outputEl.textContent = `Diseña un Marketplace moderno y elegante para venta de productos digitales, plantillas y cursos.

Layout:
- Header Superior: Logo con badge, barra de búsqueda con autocompletado, selector de categorías desplegable y botón de carrito con badge de contador.
- Hero Section: Banner promocional con gradiente y llamada a la acción "Explorar Catálogo".
- Grid de Productos (4 columnas): Tarjetas con imagen destacada, título, autor con avatar, valoración en estrellas (4.9), precio con descuento y botón "+ Añadir al Carrito".
- Barra Lateral de Filtros: Filtro por rango de precio (slider), categoría, calificación mínima y software compatible.
- Modal de Checkout: Resumen de compra con desglose de impuestos y pasarela de pago segura simplificada.

Estilo: Fondo oscuro Slate 900, acentos en Esmeralda (#10b981) y Violeta (#8b5cf6), sombras suaves y tipografía Plus Jakarta Sans.`;
    } else if (preset === 'medico') {
      outputEl.textContent = `Diseña una plataforma médica y de telemedicina profesional para doctores y clínicas privadas ("HealthPulse").

Layout:
- Sidebar: Logo con cruz médica estilizada, navegación (Panel Principal, Agenda de Citas, Expedientes de Pacientes, Videoconsultas, Facturación).
- Header: Buscador de pacientes por nombre o documento, botón "+ Agendar Cita" y selector de médico activo.
- Métricas Clínicas (4 KPIs): Citas de Hoy (8), Pacientes Activos (154), Ingresos del Mes ($4,250 USD), Calificación (4.9 / 5).
- Calendario Semanal Interactivo: Bloques de citas con código de colores según estado (Confirmada: Verde, Pendiente: Ámbar, Teleconsulta: Azul).
- Panel Lateral Derecho: "Próximos Pacientes en Espera" con foto, motivo de consulta, hora y botón destacado "Iniciar Videoconsulta".

Estilo: Profesional clínico con paleta Slate 900, Cian (#06b6d4), Esmeralda (#10b981) y blanco puro. Bordes redondeados y excelente legibilidad.`;
    } else {
      outputEl.textContent = `Diseña una plataforma de reservas de canchas deportivas (pádel, fútbol 5, tenis).

Layout:
- Header: Logo deportivo con icono, selector de sede/ciudad y botón "Mis Reservas".
- Selector de Fecha y Disciplina: Barra horizontal con botones de días de la semana y filtros por deporte (Pádel, Fútbol, Tenis).
- Grid de Canchas Disponibles: Tarjetas con foto de la cancha, tipo de superficie (Césped sintético, Cristal), precio por hora y bloque de horarios interactivo (franjas de 1 hora en verde si están libres y gris si están ocupadas).
- Modal de Confirmación: Resumen de la reserva con fecha, hora, cancha seleccionada, desglose del valor y generación de código QR de acceso.

Estilo: Enérgico y moderno con fondo oscuro (#0b0f19), acentos en Verde Neón (#22c55e) y Azul Eléctrico (#3b82f6), tipografía deportiva moderna.`;
    }
  },

  // 4. Actualizar cliente Supabase interactivo
  updateSupabaseClientPreview: function() {
    const url = document.getElementById('env-supabase-url')?.value || 'https://desxxxxxxxxxswwwwc.supabase.co';
    const key = document.getElementById('env-supabase-key')?.value || 'sb_publishable_BG-ADvvcccccccxxxxxxxxxxxxxxxxxxxxxxxxxx';
    const clientOut = document.getElementById('supabase-client-output');
    const crudOut = document.getElementById('supabase-crud-output');

    if (clientOut) {
      clientOut.textContent = `// src/lib/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

// Variables de entorno de Supabase
const SUPABASE_URL = "${url}";
const SUPABASE_ANON_KEY = "${key}";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true
  }
});`;
    }

    if (crudOut) {
      crudOut.textContent = `// src/hooks/useSupabaseCrud.js
import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';

export function useSupabaseCrud(tableName = 'items') {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 1. Obtener registros del usuario autenticado
  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const { data: records, error: fetchErr } = await supabase
        .from(tableName)
        .select('*')
        .order('created_at', { ascending: false });

      if (fetchErr) throw fetchErr;
      setData(records || []);
    } catch (err) {
      console.error('[useSupabaseCrud.fetchData]', err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // 2. Crear nuevo registro asignando user_id
  const createItem = async (itemData) => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('Usuario no autenticado');

      const { data: newItem, error: insertErr } = await supabase
        .from(tableName)
        .insert([{ ...itemData, user_id: user.id }])
        .select()
        .single();

      if (insertErr) throw insertErr;
      setData(prev => [newItem, ...prev]);
      return newItem;
    } catch (err) {
      console.error('[useSupabaseCrud.createItem]', err.message);
      throw err;
    }
  };

  // 3. Eliminar registro
  const deleteItem = async (id) => {
    try {
      const { error: deleteErr } = await supabase
        .from(tableName)
        .delete()
        .eq('id', id);

      if (deleteErr) throw deleteErr;
      setData(prev => prev.filter(item => item.id !== id));
    } catch (err) {
      console.error('[useSupabaseCrud.deleteItem]', err.message);
      throw err;
    }
  };

  useEffect(() => {
    fetchData();
  }, [tableName]);

  return { data, loading, error, createItem, deleteItem, refresh: fetchData };
}`;
    }
  }
};
