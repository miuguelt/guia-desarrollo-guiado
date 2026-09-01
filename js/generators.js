/**
 * generators.js
 * Lógica para la generación dinámica de Prompts, Artefactos Canónicos (.md y .sql) y Conexión Supabase
 */

window.Generators = {
  activeArtifactTab: 'plan',

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
        title: "Fase 1: Requisitos, Planificación & Tetralogía Documental",
        icon: "📋",
        before: "Semanas de reuniones y documentos Word de 100 páginas que nadie leía y quedaban desactualizados a los 3 días.",
        today: "Gemas socráticas en Gemini que extraen requerimientos en minutos, generando la Tetralogía Canónica: Plan, PRD, User Flow y TRD.",
        tools: "Gemini Custom Gems · Mermaid.js · Gherkin BDD · Linear",
        impact: "Claridad total: no se escribe una línea de código sin entender el alcance, el usuario y la arquitectura técnica.",
        color: "#818cf8"
      },
      2: {
        title: "Fase 2: Diseño UI/UX & Prototipado",
        icon: "🎨",
        before: "Diseñadores creando wireframes estáticos en Photoshop o Figma que los programadores debían 're-escribir' desde cero en HTML.",
        today: "Google Stitch y v0 que generan interfaces completas en lenguaje natural con los 4 estados de pantalla (Empty, Loading, Success, Error).",
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
        today: "Playwright y Vitest generados automáticamente a partir de los criterios Gherkin del PRD.",
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
      filename = "GEMA_1_ARQUITECTO_PRODUCTO_INSTRUCTIONS.md";
      text = `# ROL
Eres un Arquitecto de Software y Lead Product Manager Senior con amplia experiencia en metodologías ágiles, BDD (Behavior-Driven Development) y diseño de sistemas SaaS. Tu especialidad es transformar ideas iniciales en la tetralogía documental estándar de la industria (Plan, PRD, User Flow y TRD).

# MISIÓN
Guiar al aprendiz paso a paso mediante diálogo socrático para generar CUATRO artefactos independientes y de máxima precisión técnica. NUNCA inventes requerimientos: pregunta siempre al usuario.

# METODOLOGÍA SOCRÁTICA
1. **Paso 1: Descubrimiento & Plan:**
   - ¿Qué problema crítico resuelve la app y para quién?
   - ¿Cuáles son las 3 funcionalidades que entran en el MVP y qué queda explícitamente fuera de alcance (Out-of-Scope)?
   -> Genera: '01_PLAN_PROYECTO.md'

2. **Paso 2: PRD & Casos de Uso Gherkin:**
   - ¿Cuáles son los roles de usuario (ej. Admin, Miembro, Visitante)?
   - ¿Cuáles son los Requerimientos Funcionales (RF-01 a RF-XX) con sus criterios de aceptación BDD?
   -> Genera: '02_PRD_PRODUCTO.md'

3. **Paso 3: User Flow & Estados de UI:**
   - ¿Cuál es la ruta de navegación desde que el usuario ingresa hasta que completa su tarea principal?
   - Define los 4 estados para cada pantalla: Empty, Loading, Success, Error.
   -> Genera: '03_USER_FLOWS_UX.md' (con diagrama Mermaid Flowchart)

4. **Paso 4: TRD & Arquitectura:**
   - Modelo de datos Entidad-Relación (Mermaid ERD), llaves UUID, reglas de aislamiento Row Level Security (RLS) y requerimientos no funcionales (RNF).
   -> Genera: '04_TRD_ARQUITECTURA_TECNICA.md'

# FORMATO DE ENTREGA
- Entrega cada documento como un bloque de código Markdown independiente listo para descargar.
- Pide confirmación al aprendiz antes de avanzar entre documentos.`;
    } else if (val === 'g2') {
      filename = "GEMA_2_ARQUITECTO_SUPABASE_INSTRUCTIONS.md";
      text = `# ROL
Eres un Administrador de Bases de Datos PostgreSQL Senior y Arquitecto Backend especializado en Supabase.

# MISIÓN
Leer el archivo '04_TRD_ARQUITECTURA_TECNICA.md' cargado en tus Conocimientos y generar el script DDL completo '05_ESQUEMA_SUPABASE_COMPLETO.sql'.

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
Eres un Diseñador UI/UX Lead especializado en Design Systems modernos (Dark Mode, Glassmorphism, Tailwind CSS, Radix UI) y prompt engineering visual para Google Stitch (stitch.withgoogle.com).

# MISIÓN
Leer el PRD ('02_PRD_PRODUCTO.md') y el User Flow ('03_USER_FLOWS_UX.md') cargados en tus Conocimientos y generar '06_PROMPTS_GOOGLE_STITCH.md'.

# PROTOCOLO PARA CADA PANTALLA
1. **Layout Estructural:** Sidebar (logo, navegación, perfil), Header (búsqueda Ctrl+K, notificaciones, botón '+ Nuevo'), Área central (grid 12 columnas).
2. **Componentes Clave:** 4 Tarjetas KPIs con métricas y badges de tendencia, tablas interactivas con filtros, modales con validación.
3. **Los 4 Estados de Pantalla:** Empty State, Loading Skeleton, Success Toast y Error State.
4. **Sistema de Diseño:** Paleta Dark Slate (#0f172a / #1e293b), acentos en Índigo (#6366f1), tipografía Inter y bordes rounded-xl.`;
    } else {
      filename = "GEMA_4_ORQUESTADOR_AISTUDIO_INSTRUCTIONS.md";
      text = `# ROL
Eres un Arquitecto Fullstack Senior y Orquestador de Aplicaciones especializado en Google AI Studio Apps (aistudio.google.com/apps).

# MISIÓN
Leer '04_TRD_ARQUITECTURA_TECNICA.md', '05_ESQUEMA_SUPABASE_COMPLETO.sql' y '06_PROMPTS_GOOGLE_STITCH.md' para generar '07_PROMPT_MAESTRO_AISTUDIO.md'.

# ESTRUCTURA DEL PROMPT MAESTRO
1. **Stack:** React 18/19 SPA + Tailwind CSS + Lucide Icons + '@supabase/supabase-js' v2.x.
2. **Cliente Supabase:** Singleton modular con SUPABASE_URL y SUPABASE_ANON_KEY.
3. **Autenticación:** AuthProvider con 'supabase.auth.onAuthStateChange', login, registro y protección de rutas.
4. **CRUD Reactivo:** Operaciones completas sobre las tablas existentes en Supabase respetando RLS.
5. **UI & UX:** Componentes basados en Stitch con los 4 estados (Empty, Loading, Toast, Error).
6. **Arquitectura:** Estructura modular /src/features/ con separación de componentes, hooks y servicios.`;
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

    if (tab === 'plan') {
      if (filenameEl) filenameEl.textContent = '01_PLAN_PROYECTO.md';
      outputEl.textContent = `# 🗓️ Plan de Ejecución del Proyecto: ${appName}
**Propósito:** ${purpose}

---

### 1. Visión y Criterio de Éxito del MVP
- **Nombre de la Aplicación:** ${appName}
- **Actor Principal:** ${actor}
- **Métrica de Éxito del MVP:** El usuario puede registrarse, configurar su perfil y completar el flujo principal en menos de 90 segundos sin errores.

---

### 2. Delimitación Estricta del Alcance (Scope Boundaries)
#### ✅ IN-SCOPE (Dentro del MVP):
1. Autenticación con Supabase Auth (Email + Contraseña) y perfil automático en 'profiles'.
2. CRUD reactivo completo de la entidad principal de ${appName}.
3. Dashboard interactivo con 4 métricas KPIs calculadas dinámicamente desde la base de datos.
4. Sistema de notificaciones Toast accesibles para confirmación de acciones y reportes de error.
5. Diseño responsive (Mobile-First y Desktop) en Dark Mode con Tailwind CSS.

#### ❌ OUT-OF-SCOPE (Fuera del MVP - Postergado a Versión 2.0):
1. Pasarela de pagos internacionales (Stripe / Mercado Pago).
2. Exportación avanzada de reportes en PDF y hojas de cálculo Excel.
3. Notificaciones push móviles y modo offline nativo.

---

### 3. Matriz de Dependencias Técnicas
- **Paso 1:** Desplegar DDL de Supabase con RLS habilitado (TRD).
- **Paso 2:** Prototipar vistas y los 4 estados de pantalla en Google Stitch (User Flow).
- **Paso 3:** Ensamblar cliente Supabase y vistas en Google AI Studio.
- **Paso 4:** Validación con suite de pruebas E2E en Playwright.

---

### 4. Cronograma de Sprints
- **Sprint 1:** Definición y aprobación de Plan, PRD, User Flow y TRD.
- **Sprint 2:** Creación de base de datos en Supabase y prototipado visual en Google Stitch.
- **Sprint 3:** Compilación Fullstack en Google AI Studio y pruebas de aceptación.`;

    } else if (tab === 'prd') {
      if (filenameEl) filenameEl.textContent = '02_PRD_PRODUCTO.md';
      outputEl.textContent = `# 📋 Documento de Requisitos de Producto (PRD)
## Proyecto: ${appName}
**Problema & Propósito:** ${purpose}

---

### 1. Perfiles de Usuario (User Personas)
- **${actor} (Usuario Principal):** Requiere una interfaz ágil, visual y accesible para gestionar sus tareas y consultar métricas sin fricción.
- **Administrador:** Requiere supervisar registros globales, auditar la seguridad y controlar el acceso de los miembros.

---

### 2. Requerimientos Funcionales (RF) con Escenarios Gherkin (BDD)

#### RF-01: Autenticación Segura y Gestión de Sesión
- **Prioridad MoSCoW:** Must Have (Crítico)
- **Actor:** Visitante / Usuario Registrado
- **Descripción:** Registro e inicio de sesión con Supabase Auth y creación automática de perfil en PostgreSQL.

\`\`\`gherkin
Escenario: Registro exitoso de nuevo usuario
  DADO que un visitante se encuentra en la pantalla de registro
  CUANDO ingresa un correo válido, una contraseña segura (> 8 caracteres) y su nombre
  Y hace clic en "Crear Cuenta"
  ENTONCES Supabase registra el usuario en 'auth.users'
  Y el trigger inserta automáticamente la fila correspondiente en 'public.profiles'
  Y redirige al Dashboard principal mostrando un mensaje toast "¡Bienvenido a ${appName}!".

Escenario: Intento de acceso con credenciales incorrectas
  DADO que el usuario está en el formulario de Login
  CUANDO ingresa una contraseña equivocada
  ENTONCES la interfaz muestra una alerta accesible "Credenciales inválidas"
  Y mantiene los datos del formulario editables sin recargar la página.
\`\`\`

#### RF-02: Gestión de Entidad Principal (CRUD)
- **Prioridad MoSCoW:** Must Have
- **Actor:** ${actor}
- **Descripción:** Creación, listado con búsqueda y filtros, actualización y borrado de registros propios.

\`\`\`gherkin
Escenario: Creación exitosa de registro
  DADO que el usuario tiene sesión activa en el Dashboard
  CUANDO hace clic en "+ Nuevo Registro", completa título y descripción
  Y confirma el formulario modal
  ENTONCES el registro se guarda en Supabase asociado a su 'owner_id'
  Y la tabla se actualiza reactivamente con una notificación "✓ Registro guardado con éxito".
\`\`\`

---

### 3. Reglas de Negocio (RN)
- **RN-01 (Unicidad):** No pueden existir dos cuentas con la misma dirección de correo electrónico.
- **RN-02 (Aislamiento Total):** Un usuario estándar bajo ninguna circunstancia puede ver o modificar los registros de otro usuario.
- **RN-03 (Integridad Referencial):** Si se elimina un perfil, sus registros dependientes se borran en cascada controlada.`;

    } else if (tab === 'userflow') {
      if (filenameEl) filenameEl.textContent = '03_USER_FLOWS_UX.md';
      outputEl.textContent = `# 🔀 Flujos de Usuario e Interacción (User Flows)
## Proyecto: ${appName}

---

### 1. Diagrama de Navegación y Ramificación Lógica
\`\`\`mermaid
flowchart TD
    START(["🟢 Visitante"]) --> AUTH_CHECK{"¿Sesión Activa?"}
    AUTH_CHECK -- No --> LOGIN_VIEW["Pantalla de Login / Registro"]
    AUTH_CHECK -- Sí --> DASHBOARD["📊 Dashboard Principal"]
    
    LOGIN_VIEW --> SUBMIT_AUTH["Enviar Credenciales"]
    SUBMIT_AUTH --> AUTH_RESULT{"¿Válidas?"}
    AUTH_RESULT -- Error --> TOAST_ERR["Mostrar Toast Error & Resaltar Campos"]
    AUTH_RESULT -- Éxito --> DASHBOARD

    DASHBOARD --> LIST_VIEW["Vista Lista / Filtros"]
    DASHBOARD --> OPEN_MODAL["Clic en '+ Nuevo Registro'"]
    OPEN_MODAL --> MODAL_FORM["Modal de Creación"]
    MODAL_FORM --> SAVE_DB["Persistencia en Supabase"]
    SAVE_DB --> FEEDBACK["Cerrar Modal + Toast '✓ Éxito' + Refresh Reactivo"]
\`\`\`

---

### 2. Matriz Obligatoria de los 4 Estados por Pantalla

| Pantalla / Vista | 📭 Empty State | ⏳ Loading State | ✅ Success State | ❌ Error State |
| :--- | :--- | :--- | :--- | :--- |
| **Dashboard** | Ilustración amigable + CTA "+ Crear primer elemento" | 4 Skeleton Cards pulsantes con gradiente | KPIs con métricas reales y gráficos en vivo | Banner con botón "Reintentar conexión" |
| **Tabla de Registros** | "No hay registros que coincidan con los filtros" | Esqueleto de filas de tabla con brillo animado | Filas renderizadas con badges de estado | Alerta Toast: "Error al sincronizar datos" |
| **Formulario Modal** | Campos limpios con placeholders descriptivos | Botón con spinner giratorio (disabled) | Modal se cierra + Toast "✓ Guardado" | Bordes rojos en campos con mensaje inline |`;

    } else if (tab === 'trd') {
      if (filenameEl) filenameEl.textContent = '04_TRD_ARQUITECTURA_TECNICA.md';
      outputEl.textContent = `# 🏗️ Documento de Requisitos Técnicos (TRD)
## Proyecto: ${appName}

---

### 1. Stack Tecnológico Estandarizado
- **Frontend:** React 18/19 + Vite + TypeScript (o Vanilla JS modular con ES Modules).
- **Estilos & UI:** Tailwind CSS (Dark Mode por defecto) + Lucide Icons + Radix UI.
- **Backend & Database:** Supabase PostgreSQL 15+ con Row Level Security (RLS) habilitado.
- **SDK:** \`@supabase/supabase-js\` versión 2.x.
- **Testing:** Playwright (E2E) y Vitest (Unitario).

---

### 2. Modelo Entidad-Relación (Mermaid ERD)
\`\`\`mermaid
erDiagram
    PROFILES ||--o{ ITEMS : owns
    PROFILES {
        uuid id PK "auth.users.id"
        string email
        string full_name
        string avatar_url
        string role
        timestamp created_at
        timestamp updated_at
    }
    ITEMS {
        uuid id PK
        uuid owner_id FK
        string title
        text description
        string status
        timestamp created_at
        timestamp updated_at
    }
\`\`\`

---

### 3. Requerimientos No Funcionales (RNF)
- **RNF-01 (Seguridad RLS):** 100% de tablas protegidas con Row Level Security. Cero uso de claves 'service_role' en frontend.
- **RNF-02 (Rendimiento):** Tiempo de respuesta de UI < 200ms y carga inicial de SPA < 1s.
- **RNF-03 (Accesibilidad):** Cumplimiento estricto de WCAG 2.1 AA (contraste >= 4.5:1, etiquetas aria-label).`;

    } else if (tab === 'sql') {
      if (filenameEl) filenameEl.textContent = '05_ESQUEMA_SUPABASE_COMPLETO.sql';
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

-- 5. Tabla Principal del Dominio
CREATE TABLE IF NOT EXISTS public.items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    owner_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    description TEXT,
    status TEXT DEFAULT 'active' CHECK (status IN ('active', 'completed', 'archived')),
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);
CREATE TRIGGER on_items_updated BEFORE UPDATE ON public.items
    FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();
CREATE INDEX IF NOT EXISTS idx_items_owner_id ON public.items(owner_id);

-- 6. Habilitación de Row Level Security (RLS)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.items ENABLE ROW LEVEL SECURITY;

-- 7. Políticas de Seguridad RLS
CREATE POLICY "Lectura de perfiles para autenticados" ON public.profiles
    FOR SELECT TO authenticated USING (true);

CREATE POLICY "Edición de propio perfil" ON public.profiles
    FOR UPDATE TO authenticated USING (auth.uid() = id);

CREATE POLICY "Lectura de items propios" ON public.items
    FOR SELECT TO authenticated USING (auth.uid() = owner_id);

CREATE POLICY "Creación de items propios" ON public.items
    FOR INSERT TO authenticated WITH CHECK (auth.uid() = owner_id);

CREATE POLICY "Actualización de items propios" ON public.items
    FOR UPDATE TO authenticated USING (auth.uid() = owner_id);

CREATE POLICY "Eliminación de items propios" ON public.items
    FOR DELETE TO authenticated USING (auth.uid() = owner_id);`;

    } else if (tab === 'stitch') {
      if (filenameEl) filenameEl.textContent = '06_PROMPTS_GOOGLE_STITCH.md';
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
   - Filtros inline por estado y buscador reactivo.
   - Tabla interactiva con etiquetas de colores, fecha y menú de acciones (Editar, Eliminar).
   - Modal flotante con formulario validado para crear un nuevo registro.

LOS 4 ESTADOS DE INTERFAZ OBLIGATORIOS:
- Empty State ilustrado para cuando no existan registros.
- Skeleton Loaders animados durante la carga de datos.
- Notificaciones Toast flotantes en la esquina inferior derecha.
- Banner de error con botón de reintento.

SISTEMA DE DISEÑO:
- Paleta: Dark Mode Slate (#0f172a, #1e293b), bordes (#334155), acentos en Índigo (#6366f1).
- Acabados: Glassmorphism suave (backdrop-blur-md), esquinas rounded-xl, sombras suaves.
- Tipografía: Inter / Plus Jakarta Sans con jerarquía estricta.`;

    } else {
      if (filenameEl) filenameEl.textContent = '07_PROMPT_MAESTRO_AISTUDIO.md';
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
1. Listar registros de la tabla 'items' filtrando por 'owner_id = auth.uid()'.
2. Crear registros mediante formulario modal validado con persistencia en Supabase.
3. Actualizar estado y eliminar registros con diálogo de confirmación.
4. 4 Tarjetas KPIs dinámicas calculadas desde las consultas de datos.
5. Skeleton Loaders durante la carga, Empty States ilustrados y Toasts para feedback.`;
    }
  },

  // 3. Catálogo Maestro de 40 Estilos Frontend para Google Stitch
  currentStyleCategory: 'all',
  currentStyleSearch: '',

  FRONTEND_STYLES: [
    // --- BLOQUE 1: 20 ESTILOS PRINCIPALES ---
    {
      id: "minimalismo",
      num: 1,
      block: 1,
      name: "Minimalismo (Minimalism)",
      category: "modernos",
      categoryLabel: "Moderno & Limpio",
      icon: "⚪",
      desc: "Diseño limpio y simple, con mucho espacio en blanco y pocos elementos esenciales.",
      visualTraits: "Mucho espacio negativo, paleta neutra (#f8fafc / #0f172a), líneas finas de 1px, tipografía Inter ligera, sin sombras pesadas.",
      bestFor: "Portafolios, apps de notas, herramientas de lectura y plataformas de lujo.",
      promptSnippet: "ESTILO: Minimalista extremo, máximo espacio negativo, paleta monocromática blanco/gris pizarra (#f8fafc, #0f172a), líneas sutiles de 1px (#e2e8f0), tipografía Inter muy ligera, cero sombras pesadas."
    },
    {
      id: "glasmorfismo",
      num: 2,
      block: 1,
      name: "Glasmorfismo (Glassmorphism)",
      category: "modernos",
      categoryLabel: "Translúcido & Glass",
      icon: "🪟",
      desc: "Efectos de vidrio esmerilado, transparencias y desenfoques sobre fondos coloridos.",
      visualTraits: "Fondos translúcidos con backdrop-blur-xl, bordes luminosos 1px border-white/15, reflejos de luz y sombras difusas.",
      bestFor: "Dashboards analíticos, apps fintech premium, reproductores y paneles Web3.",
      promptSnippet: "ESTILO: Glassmorphism refinado, tarjetas con fondo translúcido semi-esmerilado (backdrop-blur-xl con rgba(30,41,59,0.7)), bordes sutiles iluminados (border-white/10), acentos de luz degradados en esquinas."
    },
    {
      id: "brutalismo",
      num: 3,
      block: 1,
      name: "Brutalismo (Brutalism)",
      category: "expresivo",
      categoryLabel: "Audaz & Experimental",
      icon: "⬛",
      desc: "Estilo crudo y directo, con tipografías grandes, colores fuertes y sin adornos.",
      visualTraits: "Colores primarios puros saturados (amarillo, negro, blanco), tipografía gigante en mayúsculas, cero curvas (rounded-none).",
      bestFor: "Moda urbana, festivales culturales, revistas de arte y marcas disruptivas.",
      promptSnippet: "ESTILO: Brutalismo digital puro, tipografías gigantescas y pesadas (Black/Bold), colores de alto contraste (amarillo ácido, negro profundo, blanco), bordes angulares sin redondeo, micro-bordes negros gruesos."
    },
    {
      id: "neomorfismo",
      num: 4,
      block: 1,
      name: "Neomorfismo (Neumorphism)",
      category: "modernos",
      categoryLabel: "Relieve Suave",
      icon: "🔘",
      desc: "Elementos con sombras y relieves suaves que parecen salir del fondo moldeado.",
      visualTraits: "Mismo color de fondo y tarjetas, sombras duales (luz superior y sombra inferior), esquinas muy redondeadas rounded-2xl.",
      bestFor: "Domótica / IoT, controles de audio, mandos virtuales y calculadoras.",
      promptSnippet: "ESTILO: Neumorphism suave, elementos extruidos del fondo mediante doble sombra suave (box-shadow dual con luz superior y sombra profunda), botones táctiles con estados presionados (inset shadow), bordes ultra redondeados (rounded-2xl)."
    },
    {
      id: "skeuomorfismo",
      num: 5,
      block: 1,
      name: "Skeuomorfismo (Skeuomorphism)",
      category: "interactivo",
      categoryLabel: "Físico & Táctil",
      icon: "📷",
      desc: "Imita objetos y texturas del mundo real para que los elementos se vean familiares.",
      visualTraits: "Texturas realistas (metal cepillado, cuero, cristal), biseles pronunciados, reflejos de luz natural y profundidad 3D.",
      bestFor: "Apps de audio/música (sintetizadores, mezcladores), herramientas fotográficas y simuladores.",
      promptSnippet: "ESTILO: Skeuomorfismo moderno, detalles táctiles realistas inspirados en hardware físico (perillas giratorias, texturas metálicas cepilladas, reflejos de luz direccional, bordes biselados con profundidad 3D)."
    },
    {
      id: "material-design",
      num: 6,
      block: 1,
      name: "Material Design (Material You)",
      category: "saas",
      categoryLabel: "Capas & Elevación",
      icon: "📐",
      desc: "Diseño basado en capas, elevación, sombras y componentes consistentes de Google.",
      visualTraits: "Elevaciones estandarizadas en eje Z (dp), Floating Action Button (FAB), paleta tonal armónica y transiciones fluidas.",
      bestFor: "Suites de productividad, apps empresariales Android/Web y herramientas corporativas.",
      promptSnippet: "ESTILO: Material Design 3 (Material You), superficies en capas con elevación de sombras estandarizada (elevation-1 a 4), Floating Action Button (FAB) destacado, chips de selección, paleta tonal armónica."
    },
    {
      id: "flat-design",
      num: 7,
      block: 1,
      name: "Flat Design",
      category: "saas",
      categoryLabel: "Plano 2D",
      icon: "☀️",
      desc: "Diseño plano, sin sombras ni efectos 3D. Usa colores sólidos e iconos simples.",
      visualTraits: "Colores sólidos vibrantes, iconografía geométrica simplificada, cero gradientes ni sombras complejas.",
      bestFor: "Apps educativas, herramientas para niños, utilidades ligeras y paneles rápidos.",
      promptSnippet: "ESTILO: Flat Design 2D limpio, cero gradientes ni sombras complejas, colores sólidos vivos y contrastados, iconografía geométrica simplificada, botones rectangulares sólidos con tipografía sans-serif nítida."
    },
    {
      id: "fluent-design",
      num: 8,
      block: 1,
      name: "Fluent Design",
      category: "modernos",
      categoryLabel: "Acrílico & Luz",
      icon: "🔮",
      desc: "Transparencias, profundidad y movimiento sutil para crear experiencias más naturales.",
      visualTraits: "Material acrílico multicapa, efecto Reveal Highlight de luz direccional en hover, paleta neutra con acentos azules/cian.",
      bestFor: "Suites ofimáticas, gestores de archivos y software de desarrollo profesional.",
      promptSnippet: "ESTILO: Fluent Design System, transparencias acrílicas multicapa, efecto de luz direccional en hover (Reveal Highlight), profundidad sutil en capas, paleta neutra moderna con acentos azul Windows/Cian."
    },
    {
      id: "cyberpunk",
      num: 9,
      block: 1,
      name: "Cyberpunk",
      category: "geek",
      categoryLabel: "Futurista Neón",
      icon: "🌆",
      desc: "Estética futurista con neón, colores vibrantes y ambientes oscuros y tecnológicos.",
      visualTraits: "Fondo negro carbón (#0a0a0f), resplandor neón cian (#00f0ff) y magenta (#ff003c), esquinas biseladas y líneas de escaneo.",
      bestFor: "Gaming, esports, comunidades Web3, hardware y herramientas nocturnas.",
      promptSnippet: "ESTILO: Cyberpunk Sci-Fi de alto contraste, fondo ultra oscuro (#0a0a0f), resplandor neón (cyan #00f0ff y magenta #ff0055), esquinas cortadas en bisel poligonal, detalles de rejilla luminosa y badges tipo HUD cibernético."
    },
    {
      id: "retro-vintage",
      num: 10,
      block: 1,
      name: "Retro / Vintage",
      category: "geek",
      categoryLabel: "Nostálgico & Cálido",
      icon: "📻",
      desc: "Inspirado en décadas pasadas, con colores apagados y elementos clásicos.",
      visualTraits: "Tonos crema (#fefae0), mostaza (#dda15e), terracota (#bc6c25) y verde oliva, marcos finos dobles y tipografía clásica con serifa.",
      bestFor: "Cafeterías, vinilos, productos artesanales, moda vintage y marcas tradicionales.",
      promptSnippet: "ESTILO: Retro Vintage cálido, paleta clásica en tonos crema (#fefae0), mostaza (#dda15e), terracota (#bc6c25) y verde oliva (#283618), marcos finos dobles, tipografía con serifa editorial clásica y etiquetas decorativas."
    },
    {
      id: "y2k",
      num: 11,
      block: 1,
      name: "Y2K Aesthetic",
      category: "geek",
      categoryLabel: "Años 2000 & Brillos",
      icon: "💖",
      desc: "Estética de los años 90 y 2000, con brillos, formas curvas y colores llamativos.",
      visualTraits: "Gradientes rosa chicle (#ff70a6) y azul pastel, destellos de estrellas (✦), formas curvas infladas tipo burbuja y fuentes lúdicas.",
      bestFor: "Redes sociales juveniles, tiendas de moda Gen-Z, música pop y creadores.",
      promptSnippet: "ESTILO: Y2K Aesthetic nostálgico, gradientes rosa chicle (#ff70a6) y azul pastel brillante, destellos de estrellas (✦), formas curvas infladas con reflejos brillantes tipo burbuja, tipografía redondeada y lúdica."
    },
    {
      id: "memphis-design",
      num: 12,
      block: 1,
      name: "Memphis Design",
      category: "expresivo",
      categoryLabel: "Geométrico & Pop",
      icon: "🎉",
      desc: "Formas geométricas, colores vivos y composiciones juguetonas y asimétricas.",
      visualTraits: "Composiciones geométricas asimétricas, patrones de confeti/zigzag, paleta multicolor viva (coral, menta, amarillo, violeta).",
      bestFor: "Eventos, herramientas creativas, diseño infantil y festivales de arte.",
      promptSnippet: "ESTILO: Memphis Design ochentero, composiciones geométricas asimétricas con triángulos, zigzags y puntos dispersos, paleta multicolor viva (coral, menta, amarillo canario, violeta), patrones gráficos alegres."
    },
    {
      id: "bento-grid",
      num: 13,
      block: 1,
      name: "Bento Grid (Apple Style)",
      category: "modernos",
      categoryLabel: "Modular & Armónico",
      icon: "🍱",
      desc: "Contenido organizado en tarjetas y bloques modulares que facilitan la lectura.",
      visualTraits: "Rejilla asimétrica modular con tarjetas rectangulares redondeadas (rounded-2xl), bordes finos sutiles y micro-gráficos integrados.",
      bestFor: "Landing pages de tecnología, dashboards ejecutivos, páginas de features y portafolios.",
      promptSnippet: "ESTILO: Bento Grid modular contemporáneo (estilo Apple/Vercel), rejilla asimétrica de tarjetas rectangulares redondeadas (rounded-2xl), bordes finos sutiles (border-slate-800), micro-gráficos y KPIs contextuales integrados en cada bloque."
    },
    {
      id: "editorial-magazine",
      num: 14,
      block: 1,
      name: "Editorial / Magazine",
      category: "expresivo",
      categoryLabel: "Tipografía & Columnas",
      icon: "📰",
      desc: "Tipografía protagonista y composición por columnas al estilo de revistas.",
      visualTraits: "Tipografía serifada de gran escala (Playfair / Bodoni), maquetación en 3 columnas asimétricas, paleta marfil/negro con acentos sobrios.",
      bestFor: "Publicaciones digitales, blogs de diseño/arquitectura, revistas de moda y noticias.",
      promptSnippet: "ESTILO: Editorial Magazine refinado, tipografía serifada de gran escala para titulares (Playfair/Bodoni), maquetación en 3 columnas asimétricas tipo revista impresa, paleta sobria marfil/negro con acento borgoña, líneas divisorias finas."
    },
    {
      id: "organic-natural",
      num: 15,
      block: 1,
      name: "Organic / Natural",
      category: "expresivo",
      categoryLabel: "Biofílico & Tierra",
      icon: "🌿",
      desc: "Formas curvas, colores tierra y elementos que transmiten calidez y calma.",
      visualTraits: "Formas curvas fluidas tipo pétalo, colores tierra y botánicos (verde salvia #84a98c, arcilla #cb997e, lino crema), atmósfera zen.",
      bestFor: "Meditación, bienestar, cosmética natural, yoga y tiendas ecológicas.",
      promptSnippet: "ESTILO: Orgánico y Natural (Biofílico), formas curvas y fluidas tipo pétalo, paleta de colores tierra y naturaleza (verde salvia #84a98c, arcilla terracota #cb997e, fondo lino crema #f8f7f4), atmósfera relajante y cálida."
    },
    {
      id: "futurista",
      num: 16,
      block: 1,
      name: "Futurista (Sci-Fi HUD)",
      category: "geek",
      categoryLabel: "Telemetría & Sci-Fi",
      icon: "🚀",
      desc: "Interfaces avanzadas con efectos tecnológicos, geometría y luces.",
      visualTraits: "Telemetría militar, anillos circulares de radar/porcentaje, tipografía monospace (JetBrains Mono), fondo negro con cian (#00d2ff) y ámbar.",
      bestFor: "Monitoreo satelital, IoT industrial, centros SOC de ciberseguridad y simuladores.",
      promptSnippet: "ESTILO: Futurista Sci-Fi HUD, telemetría técnica con coordenadas, anillos circulares de porcentaje tipo radar, rejillas de datos con tipografía monoespaciada (JetBrains Mono), fondo negro puro con acentos en cian (#00d2ff) y ámbar de alerta."
    },
    {
      id: "dashboard-saas",
      num: 17,
      block: 1,
      name: "Dashboard / SaaS",
      category: "saas",
      categoryLabel: "Métricas & B2B",
      icon: "📊",
      desc: "Paneles funcionales con datos, métricas y componentes organizados.",
      visualTraits: "4 tarjetas KPIs con deltas porcentuales, tabla de datos con filtros rápidos y paginación, sidebar colapsable, paleta Slate/Indigo.",
      bestFor: "CRMs, ERPs, analíticas financieras, gestión de proyectos y administración de datos.",
      promptSnippet: "ESTILO: Dashboard SaaS profesional de alta productividad, 4 tarjetas métricas con deltas de crecimiento, tabla de datos con filtros en tiempo real y paginación, barra lateral estructurada, paleta Slate/Indigo con badges de estado codificados por color."
    },
    {
      id: "dark-ui",
      num: 18,
      block: 1,
      name: "Dark UI (Modo Oscuro)",
      category: "saas",
      categoryLabel: "Alto Contraste",
      icon: "🌙",
      desc: "Fondos oscuros con alto contraste y acentos de color luminosos.",
      visualTraits: "Fondo Slate 950 (#0b0f19), tarjetas Slate 900 con bordes finos (#1e293b), tipografía de alto contraste, acentos violeta/esmeralda luminoso.",
      bestFor: "Herramientas de programación, trading, edición de video/audio y plataformas nocturnas.",
      promptSnippet: "ESTILO: Dark Mode premium calibrado, fondo ultra oscuro Slate 950 (#0b0f19), tarjetas en Slate 900 con bordes finos (#1e293b), alto contraste visual en tipografías, acentos en violeta/esmeralda luminoso, cero reflejos molestos."
    },
    {
      id: "aurora-gradient",
      num: 19,
      block: 1,
      name: "Aurora / Gradient UI",
      category: "modernos",
      categoryLabel: "Atmosférico & Glow",
      icon: "🌌",
      desc: "Gradientes suaves y colores atmosféricos que crean profundidad y elegancia.",
      visualTraits: "Halos luminosos difusos multicapa (tonos violeta, azul cobalto, magenta), tarjetas translúcidas que capturan la luz, profundidad cósmica.",
      bestFor: "Apps de IA generativa, suites creativas, música en streaming y lanzamientos premium.",
      promptSnippet: "ESTILO: Aurora Gradient UI, fondos con halos luminosos difusos multicapa (degradados suaves en tonos violeta, azul cobalto y magenta), tarjetas translúcidas que capturan la luz de fondo, sensación de profundidad espacial y elegancia cósmica."
    },
    {
      id: "motion-interactive",
      num: 20,
      block: 1,
      name: "Motion / Interactive UI",
      category: "interactivo",
      categoryLabel: "Microanimaciones",
      icon: "✨",
      desc: "Animaciones, microinteracciones y transiciones que mejoran la experiencia del usuario.",
      visualTraits: "Microinteracciones evidentes (hover reactivo con brillo, transiciones suaves, badges pulsantes, barras de progreso elásticas).",
      bestFor: "Apps móviles nativas/PWA, apps de hábitos, onboarding interactivo y gamificación.",
      promptSnippet: "ESTILO: Motion-Driven Interactive UI, componentes con microinteracciones visuales evidentes (estados hover reactivos con brillo suave, transiciones fluidas de pestaña, badges pulsantes, barras de progreso dinámicas con resorte elástico)."
    },

    // --- BLOQUE 2: OTROS 20 ESTILOS ADICIONALES ---
    {
      id: "liquid-ui",
      num: 21,
      block: 2,
      name: "Liquid UI",
      category: "interactivo",
      categoryLabel: "Fluido & Orgánico",
      icon: "🌊",
      desc: "Elementos fluidos y formas orgánicas que transmiten movimiento y dinamismo.",
      visualTraits: "Curvas asimétricas líquidas, separadores con olas dinámicas en gradientes oceánicos, botones con formas orgánicas.",
      bestFor: "Bebidas, hidratación, bienestar mental, festivales y experiencias sensoriales.",
      promptSnippet: "ESTILO: Liquid UI fluido y ondulante, curvas asimétricas de aspecto líquido, separadores de sección con olas dinámicas en gradientes azul océano y violeta suave, botones con formas orgánicas no rígidas."
    },
    {
      id: "claymorphism",
      num: 22,
      block: 2,
      name: "Claymorphism",
      category: "interactivo",
      categoryLabel: "Arcilla 3D Inflada",
      icon: "🧸",
      desc: "Elementos con apariencia 3D suave y redondeada, que parecen de arcilla digital.",
      visualTraits: "Tarjetas y botones con volumen inflado (sombras interiores y exteriores dobles), tonos pastel cálidos (lila, menta, durazno), bordes rounded-3xl.",
      bestFor: "Apps infantiles, educación interactiva, juegos casuales y bienestar amigable.",
      promptSnippet: "ESTILO: Claymorphism 3D inflado, tarjetas y botones con volumen de arcilla/plastilina digital (sombras interiores y exteriores dobles que crean relieve redondeado), paleta en tonos pastel suaves (lila, menta, durazno), bordes rounded-3xl."
    },
    {
      id: "pixel-art",
      num: 23,
      block: 2,
      name: "Pixel Art UI",
      category: "geek",
      categoryLabel: "Retro 8/16 Bits",
      icon: "👾",
      desc: "Estética retro inspirada en videojuegos clásicos de 8 y 16 bits.",
      visualTraits: "Tipografía bitmap pixelada, bordes de botones con contornos negros pixelados sólidos, barras de estado en bloques arcade.",
      bestFor: "Videojuegos indie, gamificación de desarrolladores, coleccionables y eventos retro.",
      promptSnippet: "ESTILO: Pixel Art UI retro de 16 bits, tipografía tipográfica bitmap pixelada, bordes de botones con contornos negros pixelados sólidos, barras de estado en bloques segmentados tipo videojuego arcade, paleta de colores indexada vibrante."
    },
    {
      id: "terminal-hacker",
      num: 24,
      block: 2,
      name: "Terminal / Hacker UI",
      category: "geek",
      categoryLabel: "CLI & Consola",
      icon: "💻",
      desc: "Inspirado en terminales de código y CLI, ideal para proyectos tech y dashboards avanzados.",
      visualTraits: "Fondo negro consola (#0d1117), texto verde fósforo (#22c55e), tipografía monospace (JetBrains Mono), prompt root@sys:~# y cajas de logs.",
      bestFor: "DevOps, plataformas de seguridad, APIs de desarrolladores y bots algorítmicos.",
      promptSnippet: "ESTILO: Terminal CLI Hacker UI, fondo negro consola (#0d1117), texto en verde fósforo brillante (#22c55e) y cian, tipografía monospace estricta (JetBrains Mono / Fira Code), prompt de comandos \"root@sys:~#\", cajas de logs con scroll."
    },
    {
      id: "kinetic-typography",
      num: 25,
      block: 2,
      name: "Kinetic Typography",
      category: "expresivo",
      categoryLabel: "Tipografía en Movimiento",
      icon: "🔤",
      desc: "La tipografía es la protagonista, con animaciones que transmiten mensajes.",
      visualTraits: "Titulares masivos con fuentes grotescas extra-pesadas, textos en marquesinas horizontales contrastadas, diseño donde las letras crean la estructura.",
      bestFor: "Agencias creativas, estudios de tipografía, portafolios y branding impactante.",
      promptSnippet: "ESTILO: Kinetic Typography protagonista, titulares a escala masiva con fuentes grotescas extra-pesadas, textos en franjas horizontales contrastadas, diseño tipográfico de alto voltaje visual donde las letras construyen la estructura."
    },
    {
      id: "maximalismo",
      num: 26,
      block: 2,
      name: "Maximalismo (Maximalism)",
      category: "expresivo",
      categoryLabel: "Color & Texturas",
      icon: "💥",
      desc: "Muchos colores, patrones y elementos visuales que buscan impactar y llamar la atención.",
      visualTraits: "Saturación de color sin restricciones, elementos y stickers gráficos superpuestos, patrones de fondo audaces, energía festiva.",
      bestFor: "Festivales de música, moda urbana experimental, apps de streaming y juventud.",
      promptSnippet: "ESTILO: Maximalismo visual audaz, saturación de color sin restricciones, elementos gráficos y stickers superpuestos, patrones contrastantes de fondo, energía vibrante y estética visual de alto voltaje festivo."
    },
    {
      id: "hand-drawn",
      num: 27,
      block: 2,
      name: "Hand-Drawn UI",
      category: "expresivo",
      categoryLabel: "Boceto a Mano",
      icon: "✏️",
      desc: "Apariencia dibujada a mano que transmite cercanía, creatividad y autenticidad.",
      visualTraits: "Trazos de boceto imperfectos a mano alzada, flechas y subrayados garabateados, tarjetas tipo notas adhesivas, caligrafía humana.",
      bestFor: "Lluvia de ideas, whiteboards (Excalidraw style), notas personales y recetas.",
      promptSnippet: "ESTILO: Hand-Drawn UI artesanal (estilo Excalidraw), trazos de boceto imperfectos a mano alzada, flechas y subrayados garabateados, tarjetas con aspecto de notas adhesivas, caligrafía limpia pero humana y cercana."
    },
    {
      id: "monochromatic",
      num: 28,
      block: 2,
      name: "Monochromatic UI",
      category: "saas",
      categoryLabel: "Gama Única",
      icon: "🔹",
      desc: "Diseño basado en una sola gama de color con diferentes tonalidades y contrastes.",
      visualTraits: "Estricto en gama única (ej. azul cobalto de #0f172a a #38bdf8), jerarquía lograda mediante contraste y peso tipográfico.",
      bestFor: "Herramientas de concentración, software contable, suites médicas y marcas estrictas.",
      promptSnippet: "ESTILO: Monochromatic UI estricto en gama de azul cobalto/índigo (desde #0f172a oscuro hasta #38bdf8 claro), jerarquía lograda exclusivamente mediante matices, pesos de contraste y opacidades de un solo color maestro."
    },
    {
      id: "3d-ui",
      num: 29,
      block: 2,
      name: "3D UI (Isométrico)",
      category: "interactivo",
      categoryLabel: "Volumen 3D Real",
      icon: "🧊",
      desc: "Elementos tridimensionales integrados que aportan profundidad y realismo a la interfaz.",
      visualTraits: "Widgets e iconos con volumen 3D isométrico renderizado, tarjetas con sombras de profundidad de campo, estética inmersiva.",
      bestFor: "Metaversos, plataformas Web3, tiendas de hardware y videojuegos.",
      promptSnippet: "ESTILO: 3D UI tridimensional con volumen isométrico, iconos de widgets con aspecto de objetos 3D renderizados con reflejos suaves, tarjetas flotantes con sombras de profundidad de campo, estética envolvente e inmersiva."
    },
    {
      id: "ai-generative",
      num: 30,
      block: 2,
      name: "AI / Generative UI",
      category: "interactivo",
      categoryLabel: "Adaptativo & Chat",
      icon: "🤖",
      desc: "Interfaces dinámicas que se adaptan y generan contenido con ayuda de la inteligencia artificial.",
      visualTraits: "Área conversacional multimodal, burbujas de respuesta con widgets interactivos on-demand, chips neuronales pulsantes.",
      bestFor: "Copilotos con IA, asistentes médicos, atención al cliente inteligente y búsqueda semántica.",
      promptSnippet: "ESTILO: AI Generative UI dinámica, área central tipo conversación multimodal con burbujas de respuesta que contienen tarjetas interactivas de acción rápida, indicadores de procesamiento neuronal (chips brillantes) y widgets contextuales."
    },
    {
      id: "liquid-glass",
      num: 31,
      block: 2,
      name: "Liquid Glass UI",
      category: "modernos",
      categoryLabel: "Cristal & Refracción",
      icon: "💎",
      desc: "Evolución del glassmorfismo con más brillo, reflejos y transparencias ultrafluidas.",
      visualTraits: "Transparencias ultra-claras con refracción realista, destellos cromados especulares finos, backdrop-blur-2xl de ultra-lujo.",
      bestFor: "Apps de lujo, reproductores multimedia futuristas, DeFi y alta tecnología.",
      promptSnippet: "ESTILO: Liquid Glass UI hipermoderno, transparencias ultra-claras con refracción de luz realista, bordes con destellos cromados especulares finos, desenfoque profundo de fondo (backdrop-blur-2xl), estética cristalina de ultra-lujo."
    },
    {
      id: "paper-ui",
      num: 32,
      block: 2,
      name: "Paper UI",
      category: "expresivo",
      categoryLabel: "Textura de Papel",
      icon: "📜",
      desc: "Inspirado en el papel físico, con texturas, arrugas y sombras naturales.",
      visualTraits: "Tarjetas con estética de hojas de archivo, sombras de pliegue natural, pestañas de carpetas superiores, paleta marfil cálido y carbón.",
      bestFor: "Diarios personales, recetarios, editores literarios y archivo documental.",
      promptSnippet: "ESTILO: Paper UI táctil, tarjetas con estética de hojas de papel de archivo con sombras de pliegue natural, pestañas de carpetas superiores, textura suave de fibra de papel, paleta marfil cálido, carbón y marrón cuero suave."
    },
    {
      id: "gradient-mesh",
      num: 33,
      block: 2,
      name: "Gradient Mesh UI",
      category: "expresivo",
      categoryLabel: "Malla Multicolor",
      icon: "🌈",
      desc: "Gradientes complejos que crean transiciones suaves y vibrantes entre colores.",
      visualTraits: "Mallas complejas de degradados multidireccionales (fucsia, violeta, cian y naranja), tarjetas oscuras con acentos extraídos de la malla.",
      bestFor: "Música, streaming audiovisual, diseño creativo y conferencias.",
      promptSnippet: "ESTILO: Gradient Mesh UI vibrante, fondos con mallas complejas de degradados fluidos y multidireccionales (fucsia, violeta profundo, cian y naranja eléctrico), tarjetas oscuras con acentos de color extraídos de la malla."
    },
    {
      id: "frosted-ui",
      num: 34,
      block: 2,
      name: "Frosted UI (Vidrio Hielo)",
      category: "modernos",
      categoryLabel: "Hielo & Escarchado",
      icon: "❄️",
      desc: "Efecto escarchado con desenfoque intenso que da sensación de frío y profundidad.",
      visualTraits: "Vidrio escarchado con desenfoque blanquecino denso, bordes en blanco hielo cristalino (#e0f2fe), paleta azul glacial (#0284c7).",
      bestFor: "Clima, salud/crioterapia, bebidas frías y experiencias invernales.",
      promptSnippet: "ESTILO: Frosted Ice UI gélido, tarjetas de vidrio escarchado con desenfoque denso blanquecino, bordes en blanco hielo cristalino (#e0f2fe), paleta azul glacial (#0284c7) y fondo con textura de condensación fría."
    },
    {
      id: "neo-brutalism",
      num: 35,
      block: 2,
      name: "Neo-Brutalism",
      category: "expresivo",
      categoryLabel: "Bordes 3px & Sombra 4px",
      icon: "🟨",
      desc: "Combinación entre brutalismo y toques modernos, con bordes grandes y contrastes.",
      visualTraits: "Bordes negros sólidos de 3px, sombras duras desplazadas sin difuminar (shadow-[4px_4px_0px_#000]), colores lima/amarillo/blanco.",
      bestFor: "Gumroad style, herramientas para creadores, marketing SaaS moderno y academias tech.",
      promptSnippet: "ESTILO: Neo-Brutalismo moderno (estilo Gumroad), bordes negros sólidos y gruesos de 3px, sombras duras desplazadas sin difuminar (shadow-[4px_4px_0px_#000]), colores de alto impacto (lima brillante, amarillo, blanco puro), botones con relieve plano."
    },
    {
      id: "scroll-based",
      num: 36,
      block: 2,
      name: "Scroll-Based Design",
      category: "interactivo",
      categoryLabel: "Scrollytelling",
      icon: "📜",
      desc: "Diseño que utiliza el desplazamiento como herramienta principal para contar historias.",
      visualTraits: "Paneles secuenciales de alto impacto, barra de progreso de lectura superior, tarjetas apilables con fijación vertical (sticky).",
      bestFor: "Presentaciones de producto, reportes anuales interactivos e historias de impacto.",
      promptSnippet: "ESTILO: Scroll-Based Design (Scrollytelling), diseño estructurado en paneles secuenciales de alto impacto con indicador visual de progreso de lectura, tarjetas apilables con fijación vertical y llamadas al scroll."
    },
    {
      id: "microinteractions",
      num: 37,
      block: 2,
      name: "Microinteractions UI",
      category: "interactivo",
      categoryLabel: "Feedback Háptico",
      icon: "🎯",
      desc: "Pequeñas interacciones que mejoran la experiencia y hacen la interfaz más humana y natural.",
      visualTraits: "Checkmarks animados con rebote de éxito, toggles elásticos, badges pulsantes en vivo y tooltips enriquecidos.",
      bestFor: "To-Do apps, plataformas de hábitos, e-learning y validaciones críticas.",
      promptSnippet: "ESTILO: Microinteractions UI de alta fidelidad, elementos con feedback visual inmediato, checkmarks animados con rebote de éxito, toggles con físicas elásticas, badges pulsantes en tiempo real y tooltips enriquecidos."
    },
    {
      id: "data-visualization",
      num: 38,
      block: 2,
      name: "Data Visualization UI",
      category: "saas",
      categoryLabel: "Gráficos & BI",
      icon: "📈",
      desc: "Interfaces diseñadas para presentar datos de forma clara, visual e interactiva.",
      visualTraits: "Gráficos de líneas con gradientes bajo la curva, tablas con sparklines en cada fila, filtros temporales facetados y paleta accesible.",
      bestFor: "Business Intelligence, trading, analítica de servidores y salud poblacional.",
      promptSnippet: "ESTILO: Data Visualization UI analítico denso, gráficos de líneas suavizadas con gradientes bajo la curva, tablas interactivas con sparklines integradas en cada fila, filtros temporales facetados y paleta de colores cromática accesible."
    },
    {
      id: "voice-ui",
      num: 39,
      block: 2,
      name: "Voice UI",
      category: "interactivo",
      categoryLabel: "Voz & Audio Waveform",
      icon: "🎙️",
      desc: "Interfaces que se controlan y navegan principalmente con comandos de voz.",
      visualTraits: "Esfera luminosa central reactiva a la voz, ondas sonoras dinámicas (waveform), transcripción en vivo y botón mic con glow.",
      bestFor: "Asistentes de voz con IA, práctica de idiomas, podcasting y accesibilidad.",
      promptSnippet: "ESTILO: Voice UI conversacional, esfera luminosa central pulsante que simula energía vocal reactiva, visualizador de ondas sonoras (waveform audio), contenedor de transcripción en tiempo real y botón de micrófono flotante con efecto glow."
    },
    {
      id: "adaptive-ui",
      num: 40,
      block: 2,
      name: "Adaptive UI",
      category: "saas",
      categoryLabel: "Contextual & Inteligente",
      icon: "📱",
      desc: "Diseño que se adapta inteligentemente al contexto, dispositivo y comportamiento del usuario.",
      visualTraits: "Layout modular con conmutador de densidad visual (Compacto / Normal / Expandido), soporte de alto contraste y tarjetas reconfigurables.",
      bestFor: "Sistemas multidevice, software hospitalario, movilidad y accesibilidad universal.",
      promptSnippet: "ESTILO: Adaptive UI inteligente y contextual, layout modular con conmutador de densidad visual (Modo Compacto / Modo Expandido), soporte de alto contraste accesible y tarjetas reconfigurables según el rol del usuario."
    }
  ],

  // Inicializador integral del módulo Stitch
  initStitchModule: function() {
    this.populateStyleSelector();
    this.renderStylesGrid();
    this.updateCustomStitchPrompt();
    this.loadStitchPreset();
  },

  // Rellenar el <select> con los 40 estilos
  populateStyleSelector: function() {
    const select = document.getElementById('stitch-custom-style');
    if (!select) return;

    select.innerHTML = `
      <optgroup label="🏛️ 20 Estilos Principales">
        ${this.FRONTEND_STYLES.filter(s => s.block === 1).map(s => `
          <option value="${s.id}">${s.num}. ${s.name}</option>
        `).join('')}
      </optgroup>
      <optgroup label="🚀 20 Estilos Adicionales">
        ${this.FRONTEND_STYLES.filter(s => s.block === 2).map(s => `
          <option value="${s.id}">${s.num}. ${s.name}</option>
        `).join('')}
      </optgroup>
    `;
    select.value = "glasmorfismo";
  },

  // Renderizar las tarjetas del catálogo de estilos
  renderStylesGrid: function(filterCat, searchVal) {
    const container = document.getElementById('stitch-styles-grid');
    if (!container) return;

    const cat = filterCat !== undefined ? filterCat : this.currentStyleCategory;
    const search = (searchVal !== undefined ? searchVal : this.currentStyleSearch).toLowerCase().trim();

    let filtered = this.FRONTEND_STYLES;

    // Filtro por categoría
    if (cat === 'principales') {
      filtered = filtered.filter(s => s.block === 1);
    } else if (cat === 'adicionales') {
      filtered = filtered.filter(s => s.block === 2);
    } else if (cat !== 'all') {
      filtered = filtered.filter(s => s.category === cat);
    }

    // Filtro por búsqueda
    if (search) {
      filtered = filtered.filter(s => 
        s.name.toLowerCase().includes(search) ||
        s.desc.toLowerCase().includes(search) ||
        s.visualTraits.toLowerCase().includes(search) ||
        s.bestFor.toLowerCase().includes(search) ||
        s.categoryLabel.toLowerCase().includes(search)
      );
    }

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; padding: 2.5rem; text-align: center; background: rgba(30, 41, 59, 0.5); border-radius: 12px; border: 1px dashed var(--border-color);">
          <span style="font-size: 2.5rem;">🔍</span>
          <h4 style="color: var(--text-primary); margin: 0.5rem 0;">No se encontraron estilos para "${search}"</h4>
          <p style="color: var(--text-muted); font-size: 0.9rem;">Prueba con otra palabra clave o haz clic en "Todos (40)".</p>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(s => `
      <div class="style-card" id="style-card-${s.id}">
        <div class="style-card-header">
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <span class="style-icon">${s.icon}</span>
            <div>
              <span class="style-number">Estilo #${s.num}</span>
              <h4 class="style-name">${s.name}</h4>
            </div>
          </div>
          <span class="style-category-tag">${s.categoryLabel}</span>
        </div>

        <div class="style-preview-wrapper">
          <div class="style-preview-header">
            <span>👁️ Vista Previa</span>
            <span class="preview-mode-tag">UI Snippet</span>
          </div>
          ${this.getStylePreviewHtml(s.id)}
        </div>

        <p class="style-desc">${s.desc}</p>

        <div class="style-details">
          <div class="style-detail-row">
            <strong>🎨 Atributos:</strong> <span>${s.visualTraits}</span>
          </div>
          <div class="style-detail-row" style="margin-top: 0.35rem;">
            <strong>🎯 Ideal para:</strong> <span>${s.bestFor}</span>
          </div>
        </div>

        <div class="style-card-actions">
          <button class="btn-style-copy" onclick="window.Generators.copyStyleSnippet('${s.id}')" title="Copiar snippet de estilo para Stitch">
            📋 Copiar Prompt
          </button>
          <button class="btn-style-apply" onclick="window.Generators.selectStyleInGenerator('${s.id}')" title="Aplicar al generador superior">
            ✨ Usar en Generador
          </button>
        </div>
      </div>
    `).join('');
  },

  // Generador de vistas previas visuales enriquecidas para los 40 estilos
  getStylePreviewHtml: function(styleId) {
    switch (styleId) {
      case "minimalismo":
        return `
          <div class="style-preview-box preview-minimalismo">
            <div class="mini-ui-card min-card">
              <div class="min-header">
                <span class="min-dot"></span>
                <span class="min-title">Workspace</span>
                <span class="min-badge">v1.0</span>
              </div>
              <div class="min-body">
                <span class="min-subtext">Active Projects</span>
                <div class="min-metric">$12,450 <span>/ mo</span></div>
              </div>
              <button class="min-btn">Explore →</button>
            </div>
          </div>
        `;
      case "glasmorfismo":
        return `
          <div class="style-preview-box preview-glasmorfismo">
            <div class="glass-orb glass-orb-1"></div>
            <div class="glass-orb glass-orb-2"></div>
            <div class="mini-ui-card glass-card">
              <div class="glass-header">
                <span class="glass-badge">✨ Glass Panel</span>
                <span class="glass-chip">Active</span>
              </div>
              <div class="glass-metric">$28,940.00</div>
              <div class="glass-footer">
                <div class="glass-progress-track"><div class="glass-progress-bar"></div></div>
                <span class="glass-tag">84%</span>
              </div>
            </div>
          </div>
        `;
      case "brutalismo":
        return `
          <div class="style-preview-box preview-brutalismo">
            <div class="mini-ui-card brutal-card">
              <div class="brutal-header">
                <span class="brutal-badge">WARNING!</span>
                <span class="brutal-cross">✖</span>
              </div>
              <div class="brutal-title">RAW & BOLD</div>
              <button class="brutal-btn">CLICK HERE ➔</button>
            </div>
          </div>
        `;
      case "neomorfismo":
        return `
          <div class="style-preview-box preview-neomorfismo">
            <div class="mini-ui-card neumorph-card">
              <div class="neumorph-row">
                <div class="neumorph-circle-btn active">⚡</div>
                <div class="neumorph-indicator"><div class="neumorph-led"></div></div>
                <div class="neumorph-circle-btn">⚙️</div>
              </div>
              <div class="neumorph-slider-track">
                <div class="neumorph-slider-thumb"></div>
              </div>
              <div class="neumorph-inset-pill">78.5% LEVEL</div>
            </div>
          </div>
        `;
      case "skeuomorfismo":
        return `
          <div class="style-preview-box preview-skeuomorfismo">
            <div class="mini-ui-card skeuo-card">
              <div class="skeuo-metal-plate">
                <div class="skeuo-screw top-l"></div><div class="skeuo-screw top-r"></div>
                <div class="skeuo-dial-container">
                  <div class="skeuo-dial-knob">
                    <div class="skeuo-dial-indicator"></div>
                  </div>
                  <div class="skeuo-switch-box">
                    <div class="skeuo-rocker active"><span class="skeuo-led-red"></span>ON</div>
                  </div>
                </div>
                <div class="skeuo-screw bot-l"></div><div class="skeuo-screw bot-r"></div>
              </div>
            </div>
          </div>
        `;
      case "material-design":
        return `
          <div class="style-preview-box preview-material">
            <div class="mini-ui-card md-surface">
              <div class="md-appbar">
                <span class="md-title">Material You</span>
                <span class="md-chip">Tonal</span>
              </div>
              <div class="md-content">
                <div class="md-chips-row">
                  <span class="md-pill-chip active">Starred</span>
                  <span class="md-pill-chip">Recent</span>
                </div>
              </div>
              <button class="md-fab">+</button>
            </div>
          </div>
        `;
      case "flat-design":
        return `
          <div class="style-preview-box preview-flat">
            <div class="mini-ui-card flat-card">
              <div class="flat-row">
                <div class="flat-badge-red">NEW</div>
                <div class="flat-badge-teal">DOCS</div>
                <div class="flat-badge-yellow">★ 4.9</div>
              </div>
              <div class="flat-bar-grid">
                <div class="flat-bar f-coral" style="width: 70%;"></div>
                <div class="flat-bar f-teal" style="width: 45%;"></div>
                <div class="flat-bar f-amber" style="width: 85%;"></div>
              </div>
              <button class="flat-btn">SUBMIT</button>
            </div>
          </div>
        `;
      case "fluent-design":
        return `
          <div class="style-preview-box preview-fluent">
            <div class="mini-ui-card fluent-acrylic">
              <div class="fluent-header">
                <div class="fluent-icon">🪟</div>
                <span class="fluent-title">Fluent Acrylic</span>
                <span class="fluent-pill">Mica UI</span>
              </div>
              <div class="fluent-body">
                <div class="fluent-tile active">
                  <span class="fluent-tile-bar"></span>
                  <span>Storage Cloud</span>
                </div>
                <div class="fluent-tile">
                  <span>Security Hub</span>
                </div>
              </div>
            </div>
          </div>
        `;
      case "cyberpunk":
        return `
          <div class="style-preview-box preview-cyberpunk">
            <div class="cyber-grid-bg"></div>
            <div class="mini-ui-card cyber-card">
              <div class="cyber-header">
                <span class="cyber-tag">// NIGHT_CITY.SYS</span>
                <span class="cyber-fps">99 FPS</span>
              </div>
              <div class="cyber-hud-metric">
                <span class="cyber-neon-cyan">SYNAPSE</span>
                <span class="cyber-neon-pink">OVERLOAD 94%</span>
              </div>
              <div class="cyber-bar-track"><div class="cyber-bar-fill"></div></div>
            </div>
          </div>
        `;
      case "retro-vintage":
        return `
          <div class="style-preview-box preview-vintage">
            <div class="mini-ui-card vintage-card">
              <div class="vintage-border-inner">
                <div class="vintage-stamp">EST. 1984</div>
                <div class="vintage-title">The Artisan Press</div>
                <div class="vintage-subtitle">★ HERITAGE CRAFT ★</div>
                <div class="vintage-divider">❖ ❖ ❖</div>
              </div>
            </div>
          </div>
        `;
      case "y2k":
        return `
          <div class="style-preview-box preview-y2k">
            <div class="mini-ui-card y2k-card">
              <div class="y2k-stars">✦ ✧ ✦</div>
              <div class="y2k-bubble-badge">CYBER GIRLIE 2000</div>
              <div class="y2k-btn-bubble">
                <span>CLICK ME! ✨</span>
              </div>
              <div class="y2k-sticker">★ WINNER ★</div>
            </div>
          </div>
        `;
      case "memphis-design":
        return `
          <div class="style-preview-box preview-memphis">
            <div class="memphis-shape shape-triangle"></div>
            <div class="memphis-shape shape-zigzag">〰️</div>
            <div class="memphis-shape shape-circle"></div>
            <div class="mini-ui-card memphis-card">
              <div class="memphis-header">
                <span class="memphis-pill">POP 80s</span>
                <span class="memphis-dot-grid">:::</span>
              </div>
              <div class="memphis-title">CREATIVE STUDIO</div>
              <button class="memphis-btn">EXPLORE ⚡</button>
            </div>
          </div>
        `;
      case "bento-grid":
        return `
          <div class="style-preview-box preview-bento">
            <div class="bento-mini-grid">
              <div class="bento-cell bento-main">
                <span class="bento-label">Growth</span>
                <span class="bento-val">+34.8%</span>
                <div class="bento-sparkline"><div class="bento-wave"></div></div>
              </div>
              <div class="bento-cell bento-stat">
                <span class="bento-icon">⚡</span>
                <span class="bento-sub">99.9%</span>
              </div>
              <div class="bento-cell bento-users">
                <span class="bento-icon">👥</span>
                <span class="bento-sub">1.2k</span>
              </div>
            </div>
          </div>
        `;
      case "editorial-magazine":
        return `
          <div class="style-preview-box preview-editorial">
            <div class="mini-ui-card editorial-card">
              <div class="editorial-topline">VOLUME VII · ISSUE 04</div>
              <div class="editorial-headline">L’Élégance Moderne</div>
              <div class="editorial-cols">
                <div class="editorial-col"><span class="dropcap">A</span>rchitecture & form.</div>
                <div class="editorial-col">Minimal spatial typography.</div>
              </div>
            </div>
          </div>
        `;
      case "organic-natural":
        return `
          <div class="style-preview-box preview-organic">
            <div class="organic-leaf-bg"></div>
            <div class="mini-ui-card organic-card">
              <div class="organic-header">
                <span class="organic-badge">🌿 Botánica</span>
                <span class="organic-zen">Zen Mode</span>
              </div>
              <div class="organic-title">Flora & Tierra</div>
              <div class="organic-pill-row">
                <span class="organic-pill">Sage</span>
                <span class="organic-pill">Clay</span>
                <span class="organic-pill">Linen</span>
              </div>
            </div>
          </div>
        `;
      case "futurista":
        return `
          <div class="style-preview-box preview-futurista">
            <div class="mini-ui-card scifi-card">
              <div class="scifi-header">
                <div class="scifi-radar"><div class="scifi-sweep"></div></div>
                <div class="scifi-telemetry">
                  <span class="scifi-label">TELEMETRY_LINK</span>
                  <span class="scifi-coords">45.892° N / 12.041° W</span>
                </div>
              </div>
              <div class="scifi-data-row">
                <span class="scifi-status">[SECURE_LOCK]</span>
                <span class="scifi-val">99.42% OK</span>
              </div>
            </div>
          </div>
        `;
      case "dashboard-saas":
        return `
          <div class="style-preview-box preview-saas">
            <div class="mini-ui-card saas-card">
              <div class="saas-header">
                <span class="saas-metric-title">MRR Revenue</span>
                <span class="saas-growth-badge">+24.5% ↑</span>
              </div>
              <div class="saas-metric-val">$48,250</div>
              <div class="saas-chart-bars">
                <span style="height: 40%"></span>
                <span style="height: 65%"></span>
                <span style="height: 50%"></span>
                <span style="height: 85%"></span>
                <span style="height: 100%"></span>
                <span style="height: 75%"></span>
              </div>
            </div>
          </div>
        `;
      case "dark-ui":
        return `
          <div class="style-preview-box preview-darkui">
            <div class="mini-ui-card darkui-card">
              <div class="darkui-header">
                <span class="darkui-dot"></span>
                <span class="darkui-title">Deep Slate Pro</span>
                <span class="darkui-pill">#0b0f19</span>
              </div>
              <div class="darkui-grid">
                <div class="darkui-item active"><span class="darkui-led green"></span>Server Active</div>
                <div class="darkui-item"><span class="darkui-led purple"></span>AI Pipeline</div>
              </div>
            </div>
          </div>
        `;
      case "aurora-gradient":
        return `
          <div class="style-preview-box preview-aurora">
            <div class="aurora-glow glow-1"></div>
            <div class="aurora-glow glow-2"></div>
            <div class="aurora-glow glow-3"></div>
            <div class="mini-ui-card aurora-card">
              <div class="aurora-badge">🌌 Celestial Glow</div>
              <div class="aurora-title">Aurora Lumina</div>
              <div class="aurora-pill">Cosmic Deep Blur</div>
            </div>
          </div>
        `;
      case "motion-interactive":
        return `
          <div class="style-preview-box preview-motion">
            <div class="mini-ui-card motion-card">
              <div class="motion-row">
                <div class="motion-pulse-dot"></div>
                <span class="motion-text">Live Interactive</span>
                <div class="motion-toggle active"><div class="motion-toggle-handle"></div></div>
              </div>
              <div class="motion-bar-track">
                <div class="motion-bar-elastic"></div>
              </div>
            </div>
          </div>
        `;
      case "liquid-ui":
        return `
          <div class="style-preview-box preview-liquid">
            <div class="liquid-wave-bg"></div>
            <div class="mini-ui-card liquid-card">
              <div class="liquid-blob">💧 Fluid Motion</div>
              <div class="liquid-title">Oceanic Flow</div>
              <div class="liquid-pills">
                <span class="liquid-pill">Wave 01</span>
                <span class="liquid-pill">Wave 02</span>
              </div>
            </div>
          </div>
        `;
      case "claymorphism":
        return `
          <div class="style-preview-box preview-clay">
            <div class="mini-ui-card clay-card">
              <div class="clay-badge">🧸 3D Clay</div>
              <div class="clay-pill-btn">
                <span>Inflated Button</span>
              </div>
              <div class="clay-tag-row">
                <span class="clay-tag c-mint">Mint</span>
                <span class="clay-tag c-lilac">Lilac</span>
                <span class="clay-tag c-peach">Peach</span>
              </div>
            </div>
          </div>
        `;
      case "pixel-art":
        return `
          <div class="style-preview-box preview-pixel">
            <div class="mini-ui-card pixel-card">
              <div class="pixel-header">
                <span class="pixel-title">RETRO QUEST</span>
                <span class="pixel-score">1UP: 4200</span>
              </div>
              <div class="pixel-hp-row">
                <span class="pixel-label">HP:</span>
                <div class="pixel-hp-bar">
                  <span class="pixel-hp-chunk filled"></span>
                  <span class="pixel-hp-chunk filled"></span>
                  <span class="pixel-hp-chunk filled"></span>
                  <span class="pixel-hp-chunk empty"></span>
                </div>
              </div>
              <div class="pixel-btn">▶ START</div>
            </div>
          </div>
        `;
      case "terminal-hacker":
        return `
          <div class="style-preview-box preview-terminal">
            <div class="mini-ui-card term-card">
              <div class="term-header">
                <span class="term-dot r"></span><span class="term-dot y"></span><span class="term-dot g"></span>
                <span class="term-title">bash - root@sys: ~</span>
              </div>
              <div class="term-code">
                <span class="term-prompt">$</span> curl -s api/v1/auth<br/>
                <span class="term-success">[OK 200]</span> token=0x9f8c...<br/>
                <span class="term-prompt">$</span> deploy --prod<span class="term-cursor">_</span>
              </div>
            </div>
          </div>
        `;
      case "kinetic-typography":
        return `
          <div class="style-preview-box preview-kinetic">
            <div class="kinetic-strip strip-1">
              <span>KINETIC TYPE · MAXIMUM IMPACT · DESIGN · </span>
            </div>
            <div class="kinetic-strip strip-2">
              <span>VOLTAGE 100% · BOLD VISION · AGILITY · </span>
            </div>
            <div class="kinetic-badge">KINETIC UI</div>
          </div>
        `;
      case "maximalismo":
        return `
          <div class="style-preview-box preview-maximalism">
            <div class="maxi-bg-pattern"></div>
            <div class="maxi-sticker sticker-1">🔥 HOT!</div>
            <div class="maxi-sticker sticker-2">⚡ 100%</div>
            <div class="mini-ui-card maxi-card">
              <div class="maxi-title">CHAOS & COLOR</div>
              <span class="maxi-badge">EXTRA VISUAL</span>
            </div>
          </div>
        `;
      case "hand-drawn":
        return `
          <div class="style-preview-box preview-handdrawn">
            <div class="mini-ui-card sketch-card">
              <div class="sketch-header">
                <span class="sketch-title">✏️ Idea Canvas</span>
                <span class="sketch-arrow">➔</span>
              </div>
              <div class="sketch-note">
                <div class="sketch-pin">📌</div>
                <span>MVP Roadmap!</span>
              </div>
              <div class="sketch-btn">Hand-Made</div>
            </div>
          </div>
        `;
      case "monochromatic":
        return `
          <div class="style-preview-box preview-monochrome">
            <div class="mini-ui-card mono-card">
              <div class="mono-layer mono-l1">
                <span class="mono-tag">Pure Cobalt Palette</span>
                <div class="mono-layer mono-l2">
                  <span class="mono-text">Tonal Depth</span>
                  <div class="mono-layer mono-l3">
                    <span class="mono-badge">#38bdf8</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
      case "3d-ui":
        return `
          <div class="style-preview-box preview-3d">
            <div class="mini-ui-card isoflex-stage">
              <div class="iso-cube">
                <div class="iso-face top"></div>
                <div class="iso-face left"></div>
                <div class="iso-face right"></div>
              </div>
              <div class="iso-floating-badge">3D Isometric</div>
            </div>
          </div>
        `;
      case "ai-generative":
        return `
          <div class="style-preview-box preview-aigen">
            <div class="mini-ui-card aigen-card">
              <div class="aigen-header">
                <span class="aigen-sparkle">✨</span>
                <span class="aigen-title">Gemini Neural Studio</span>
                <span class="aigen-badge">Live</span>
              </div>
              <div class="aigen-prompt-pill">
                <span>"Crea un dashboard RLS..."</span>
                <span class="aigen-run-dot"></span>
              </div>
              <div class="aigen-chips">
                <span class="aigen-chip">⚡ SQL Gen</span>
                <span class="aigen-chip">🎨 Stitch UI</span>
              </div>
            </div>
          </div>
        `;
      case "liquid-glass":
        return `
          <div class="style-preview-box preview-liquidglass">
            <div class="liqglass-glow"></div>
            <div class="mini-ui-card liqglass-card">
              <div class="liqglass-specular"></div>
              <div class="liqglass-header">
                <span class="liqglass-diamond">💎</span>
                <span class="liqglass-title">Liquid Refraction</span>
              </div>
              <div class="liqglass-balance">$104,820</div>
              <div class="liqglass-badge">Ultra-Luxe Glass</div>
            </div>
          </div>
        `;
      case "paper-ui":
        return `
          <div class="style-preview-box preview-paper">
            <div class="mini-ui-card paper-sheet">
              <div class="paper-folder-tab">ARCHIVE_01</div>
              <div class="paper-lines">
                <div class="paper-line l1"></div>
                <div class="paper-line l2"></div>
                <div class="paper-line l3"></div>
              </div>
              <div class="paper-stamp">CONFIDENTIAL</div>
            </div>
          </div>
        `;
      case "gradient-mesh":
        return `
          <div class="style-preview-box preview-gradmesh">
            <div class="gradmesh-mesh"></div>
            <div class="mini-ui-card gradmesh-card">
              <div class="gradmesh-header">
                <span class="gradmesh-badge">🌈 Mesh 4D</span>
                <span class="gradmesh-pill">Vibrant</span>
              </div>
              <div class="gradmesh-title">Chromatic Fluid</div>
            </div>
          </div>
        `;
      case "frosted-ui":
        return `
          <div class="style-preview-box preview-frosted">
            <div class="frosted-ice-bg"></div>
            <div class="mini-ui-card frosted-glass">
              <div class="frosted-header">
                <span class="frosted-snowflake">❄️</span>
                <span class="frosted-title">Glacial Frost</span>
                <span class="frosted-temp">-6°C</span>
              </div>
              <div class="frosted-body">
                <div class="frosted-bar"></div>
                <span class="frosted-tag">Ice Crystal Glass</span>
              </div>
            </div>
          </div>
        `;
      case "neo-brutalism":
        return `
          <div class="style-preview-box preview-neobrutal">
            <div class="mini-ui-card neobrutal-card">
              <div class="neobrutal-tag">★ GUMROAD STYLE ★</div>
              <div class="neobrutal-title">NEO-BRUTAL</div>
              <button class="neobrutal-btn">BUY $19 ➔</button>
            </div>
          </div>
        `;
      case "scroll-based":
        return `
          <div class="style-preview-box preview-scrolly">
            <div class="mini-ui-card scrolly-card">
              <div class="scrolly-track">
                <div class="scrolly-dot active"></div>
                <div class="scrolly-dot"></div>
                <div class="scrolly-dot"></div>
              </div>
              <div class="scrolly-content">
                <span class="scrolly-badge">Chapter 02</span>
                <div class="scrolly-title">Scrollytelling UI</div>
                <span class="scrolly-hint">↓ Scroll to reveal</span>
              </div>
            </div>
          </div>
        `;
      case "microinteractions":
        return `
          <div class="style-preview-box preview-micro">
            <div class="mini-ui-card micro-card">
              <div class="micro-row">
                <div class="micro-check-badge">✓ Done</div>
                <div class="micro-haptic-pill">Haptic Feedback</div>
              </div>
              <div class="micro-interactive-row">
                <div class="micro-heart active">❤️ <span class="micro-count">842</span></div>
                <div class="micro-tooltip-box">Copied! 🚀</div>
              </div>
            </div>
          </div>
        `;
      case "data-visualization":
        return `
          <div class="style-preview-box preview-dataviz">
            <div class="mini-ui-card dataviz-card">
              <div class="dataviz-header">
                <span class="dataviz-title">BI Analytics</span>
                <span class="dataviz-kpi">▲ +19.4%</span>
              </div>
              <div class="dataviz-svg-wrap">
                <svg class="dataviz-chart" viewBox="0 0 160 40">
                  <path d="M0,35 Q30,10 60,25 T120,8 T160,18" fill="none" stroke="#38bdf8" stroke-width="2.5"/>
                  <path d="M0,35 Q30,10 60,25 T120,8 T160,18 L160,40 L0,40 Z" fill="url(#dataviz-grad)" opacity="0.25"/>
                  <defs>
                    <linearGradient id="dataviz-grad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stop-color="#38bdf8"/>
                      <stop offset="100%" stop-color="transparent"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div class="dataviz-legend">
                <span class="dataviz-dot blue"></span> 2.4M queries
              </div>
            </div>
          </div>
        `;
      case "voice-ui":
        return `
          <div class="style-preview-box preview-voice">
            <div class="mini-ui-card voice-card">
              <div class="voice-center">
                <div class="voice-orb">
                  <div class="voice-orb-glow"></div>
                  <span>🎙️</span>
                </div>
                <div class="voice-wave-bars">
                  <span class="v-bar"></span>
                  <span class="v-bar"></span>
                  <span class="v-bar"></span>
                  <span class="v-bar"></span>
                  <span class="v-bar"></span>
                </div>
              </div>
              <span class="voice-sub">Listening... "Generate RLS"</span>
            </div>
          </div>
        `;
      case "adaptive-ui":
        return `
          <div class="style-preview-box preview-adaptive">
            <div class="mini-ui-card adaptive-card">
              <div class="adaptive-header">
                <span class="adaptive-badge">Density</span>
                <div class="adaptive-toggles">
                  <span class="adaptive-btn active">Compact</span>
                  <span class="adaptive-btn">Normal</span>
                </div>
              </div>
              <div class="adaptive-row">
                <div class="adaptive-box a-box-1">Grid 1</div>
                <div class="adaptive-box a-box-2">Grid 2</div>
                <div class="adaptive-box a-box-3">Grid 3</div>
              </div>
            </div>
          </div>
        `;
      default:
        return `<div class="style-preview-box"><div class="mini-ui-card">Preview UI</div></div>`;
    }
  },

  // Cambiar categoría activa
  setStylesFilter: function(cat, btnEl) {
    this.currentStyleCategory = cat;
    document.querySelectorAll('.category-pill').forEach(btn => btn.classList.remove('active'));
    if (btnEl) btnEl.classList.add('active');
    this.renderStylesGrid();
  },

  // Búsqueda en tiempo real
  searchStyles: function(query) {
    this.currentStyleSearch = query;
    this.renderStylesGrid();
  },

  // Copiar solo el fragmento de prompt del estilo
  copyStyleSnippet: function(styleId) {
    const style = this.FRONTEND_STYLES.find(s => s.id === styleId);
    if (!style) return;

    navigator.clipboard.writeText(style.promptSnippet).then(() => {
      window.App.showToast(`📋 Snippet de estilo #${style.num} "${style.name}" copiado.`, "success");
    }).catch(() => {
      window.App.showToast("❌ No se pudo copiar al portapapeles.", "error");
    });
  },

  // Seleccionar estilo y llevar al generador superior
  selectStyleInGenerator: function(styleId) {
    const style = this.FRONTEND_STYLES.find(s => s.id === styleId);
    if (!style) return;

    const select = document.getElementById('stitch-custom-style');
    if (select) select.value = styleId;

    this.updateCustomStitchPrompt();

    const genCard = document.getElementById('stitch-generator-card');
    if (genCard) {
      genCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    window.App.showToast(`✨ Estilo #${style.num} "${style.name}" cargado en el generador.`, "success");
  },

  // Generador dinámico de prompts para Google Stitch
  updateCustomStitchPrompt: function() {
    const appName = document.getElementById('stitch-custom-appname')?.value || 'EduPulse SaaS';
    const purpose = document.getElementById('stitch-custom-purpose')?.value || 'Plataforma interactiva de cursos';
    const screenType = document.getElementById('stitch-custom-screen')?.value || 'dashboard';
    const styleId = document.getElementById('stitch-custom-style')?.value || 'glasmorfismo';
    const outputEl = document.getElementById('stitch-custom-output');

    if (!outputEl) return;

    const style = this.FRONTEND_STYLES.find(s => s.id === styleId) || this.FRONTEND_STYLES[1];

    let layoutContent = "";
    if (screenType === 'dashboard') {
      layoutContent = `1. Sidebar Izquierdo:
   - Logo estilizado de '${appName}' con icono moderno y badge 'PRO'.
   - Navegación: Dashboard (activo), Mis Módulos, Analíticas de Rendimiento, Ajustes.
   - Perfil de usuario en el pie con avatar circular, nombre de usuario y botón de cerrar sesión.

2. Header Superior:
   - Barra de búsqueda con comando rápido 'Ctrl + K'.
   - Badge de notificaciones con punto indicador rojo.
   - Botón principal de acción '+ Nuevo Registro' con resplandor y acento destacado.

3. Área Central (Dashboard de Alta Densidad):
   - 4 Tarjetas de Métricas (KPIs): Total Activos (48), Tasa de Cumplimiento (94.2%), Tiempo Promedio (2.3 días) y Miembros (16).
   - Selector de pestañas: 'Vista Lista' / 'Vista Resumen'.
   - Tabla interactiva con filtros facetados por estado, ordenación y menú de acciones (Editar, Eliminar).
   - Modal flotante con formulario validado para crear un nuevo registro.`;
    } else if (screenType === 'kanban') {
      layoutContent = `1. Sidebar Izquierdo:
   - Logo de '${appName}' y enlaces a Tableros, Sprints, Backlog y Configuración.
   - Perfil del líder técnico en la base.

2. Header Superior:
   - Buscador de tarjetas por etiqueta o asignado.
   - Filtro por Prioridad (Alta, Media, Baja) y botón '+ Nueva Tarea'.

3. Tablero Kanban Interactivo (4 Columnas):
   - Columnas: 'Por Hacer', 'En Progreso', 'En Revisión', 'Completado'.
   - Tarjetas con títulos claros, avatares de responsables, etiquetas de color de sprint y barra de progreso.
   - Modal de detalle de tarjeta con checklist interactivo y campo de comentarios.`;
    } else if (screenType === 'marketplace') {
      layoutContent = `1. Header Superior:
   - Logo comercial, barra de búsqueda con autocompletado y botón de Carrito con badge contador.

2. Barra Lateral de Filtros:
   - Filtro por rango de precio (slider), categoría de producto y valoración en estrellas.

3. Grid de Productos (4 Columnas):
   - Tarjetas de producto con foto destacada, título, precio con descuento, badge de valoración (4.9 ★) y botón '+ Añadir al Carrito'.
   - Modal flotante de Checkout con resumen de compra y desglose claro.`;
    } else if (screenType === 'clinico') {
      layoutContent = `1. Sidebar:
   - Logo con cruz clínica estilizada y navegación (Agenda, Pacientes, Historial Clínico, Videoconsultas).

2. Header:
   - Buscador de pacientes por documento/nombre y botón '+ Agendar Cita'.

3. Panel Clínico:
   - 4 KPIs médicos: Citas de Hoy (8), Pacientes Activos (154), Videoconsultas (3), Calificación (4.9 / 5).
   - Calendario semanal interactivo con bloques codificados por color según tipo de consulta.
   - Panel lateral 'Pacientes en Espera' con foto, hora y botón destacado 'Iniciar Consulta'.`;
    } else if (screenType === 'devops') {
      layoutContent = `1. Sidebar:
   - Logo con icono de terminal y enlaces a Clusters, Telemetría, Logs en Vivo, Alertas y API Keys.

2. Header:
   - Selector de cluster activo, selector de ventana temporal (15m, 1h, 24h) y estado general (punto verde 'ALL SYSTEMS OPERATIONAL').

3. Consola de Telemetría:
   - Gráficos de latencia p95/p99 y throughput en tiempo real.
   - Consola de logs en vivo con tipografía monospace y selector de nivel (INFO, WARN, ERR).
   - Tabla de microservicios con métricas de CPU, Memoria y estado de salud.`;
    } else {
      layoutContent = `1. Header Móvil / Desktop:
   - Avatar del usuario, saludo personalizado '¡Hola, Juan!' y racha activa de días seguidos (🔥 12 Días).

2. Grid de Hábitos y Metas Diarias:
   - Tarjetas de hábitos interactivos con casillas de checkmark animadas y barra de progreso circular.
   - Gráfico de consistencia semanal tipo mapa de calor.
   - Modal de felicitaciones al completar todos los hábitos del día.`;
    }

    const promptText = `Diseña una interfaz web moderna, altamente profesional y completamente responsive para "${appName}", enfocada en: ${purpose}.

ESTRUCTURA DE PANTALLA:
${layoutContent}

SISTEMA DE DISEÑO (ESTILO SELECCIONADO: #${style.num} ${style.name}):
- ${style.promptSnippet}
- Acabados: ${style.visualTraits}
- Tipografía: Inter / JetBrains Mono con jerarquía visual estricta y excelente legibilidad.

LOS 4 ESTADOS DE INTERFAZ OBLIGATORIOS:
- Empty State: Ilustración y botón de llamado a la acción cuando no existan registros.
- Loading State: Skeleton loaders animados con pulsación de gradiente durante la carga.
- Success Feedback: Notificación Toast flotante en esquina inferior derecha.
- Error State: Banner de advertencia con botón de reintento en caso de fallo.`;

    outputEl.textContent = promptText;

    // Actualizar la vista previa en vivo superior del estilo seleccionado
    const previewContainer = document.getElementById('stitch-custom-style-preview');
    if (previewContainer) {
      previewContainer.innerHTML = `
        <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px; padding: 0.75rem 1rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; flex-wrap: wrap; gap: 0.5rem;">
            <div style="display: flex; align-items: center; gap: 0.4rem;">
              <span style="font-size: 1.1rem;">${style.icon}</span>
              <span style="font-size: 0.85rem; font-weight: 700; color: #a5b4fc;">
                Estilo #${style.num}: ${style.name}
              </span>
            </div>
            <div style="display: flex; align-items: center; gap: 0.4rem;">
              <span class="style-category-tag">${style.categoryLabel}</span>
              <span class="preview-mode-tag">Vista en Tiempo Real</span>
            </div>
          </div>
          <div class="style-preview-wrapper" style="margin: 0;">
            ${this.getStylePreviewHtml(style.id)}
          </div>
        </div>
      `;
    }
  },

  // 4. Presets rápidos de Google Stitch
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

Estilo: Bento Grid + Glassmorphism Dark Slate (#0f172a, #1e293b), acentos en Índigo (#6366f1), bordes rounded-xl y tipografía Inter.`;
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

  // 2. Crear nuevo registro asignando owner_id
  const createItem = async (itemData) => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('Usuario no autenticado');

      const { data: newItem, error: insertErr } = await supabase
        .from(tableName)
        .insert([{ ...itemData, owner_id: user.id }])
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
