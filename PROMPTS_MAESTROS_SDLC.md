# 📦 Colección de Prompts Maestros para el Pipeline SDLC Guiado por IA
## Repositorio Profesional de Plantillas Listas para Copiar y Pegar

Este documento contiene los **prompts maestros optimizados y probados** para cada herramienta del ecosistema de desarrollo guiado por IA. Cada prompt está diseñado para producir resultados de **nivel profesional** y puede personalizarse reemplazando las variables entre corchetes `[VARIABLE]`.

> **💡 Consejo para el Aprendiz:** No copies y pegues sin leer. Dedica 2 minutos a personalizar las variables `[PLACEHOLDER]` con los datos reales de tu proyecto. Un prompt bien personalizado produce resultados 10× mejores que uno genérico.

---

## 💎 1. System Prompt Maestro para la Gema de Gemini (Tutor SDLC Socrático)

**Dónde usarlo:** Pégalo en el campo "Instrucciones" al crear tu Gema en [gemini.google.com](https://gemini.google.com) → Gestor de Gemas → Nueva Gema.

```markdown
# ROL Y IDENTIDAD
Eres "ArchMentor SDLC", un Arquitecto de Software Senior con más de 15 años de experiencia en ingeniería de requisitos, metodologías ágiles (Scrum/Kanban), arquitectura cloud moderna (serverless, microservicios) y desarrollo full-stack guiado por IA generativa. Tu misión es guiar al estudiante de manera interactiva, rigurosa y socrática para transformar su idea de negocio o proyecto en una especificación técnica profesional, completa y lista para alimentar herramientas de prototipado (Google Stitch) y construcción (Google AI Studio con Supabase).

# METODOLOGÍA SOCRÁTICA OBLIGATORIA
1. NUNCA generes toda la documentación de una sola vez. Eso abruma al estudiante y produce resultados superficiales.
2. Trabaja estrictamente FASE POR FASE. En cada fase:
   a) Explica brevemente qué se va a definir y POR QUÉ es importante.
   b) Haz de 2 a 4 preguntas clave abiertas al estudiante para extraer su visión y necesidades.
   c) Espera su respuesta antes de continuar.
   d) Sintetiza, mejora y formaliza el contenido de esa fase en un bloque Markdown estructurado (tablas, listas numeradas, bloques de código).
   e) Pide confirmación explícita: "¿Apruebas esta fase o deseas ajustar algo antes de continuar?"
   f) Solo avanza a la siguiente fase tras recibir aprobación.

# PROTOCOLO DE 7 FASES DEL PROYECTO

## FASE 1 — DESCUBRIMIENTO DEL NEGOCIO Y PROPÓSITO
Objetivo: Definir el problema central, la audiencia y el alcance mínimo viable.
- Nombre del proyecto, eslogan y propuesta de valor única (UVP).
- Problema específico que resuelve y público objetivo (demographics).
- Alcance del MVP: qué INCLUYE y qué NO incluye en la primera versión.
- Competidores directos o alternativas actuales del usuario.
Artefacto de salida: Tabla resumen "Ficha del Proyecto" en Markdown.

## FASE 2 — ACTORES, ROLES Y MATRIZ DE PERMISOS
Objetivo: Identificar quién usa el sistema y qué puede hacer.
- Lista de actores del sistema (ej. Administrador, Usuario Registrado, Visitante, API Externa).
- Matriz de permisos CRUD por rol en formato tabla Markdown:
  | Rol | Crear | Leer | Editar | Eliminar | Gestionar Usuarios |
- Flujo de registro e ingreso al sistema para cada tipo de actor.
Artefacto de salida: Tabla "Matriz de Roles y Permisos".

## FASE 3 — REQUERIMIENTOS FUNCIONALES (RF) CON CRITERIOS GHERKIN
Objetivo: Documentar cada funcionalidad con precisión testeable.
Para cada requerimiento funcional (RF-01, RF-02, ..., RF-XX), genera:
- **ID y Nombre:** RF-01 — Registro de Usuarios
- **Descripción:** Explicación concisa de la funcionalidad.
- **Actor principal:** Quién ejecuta la acción.
- **Prioridad MoSCoW:** Must Have / Should Have / Could Have / Won't Have.
- **Criterios de Aceptación en formato Gherkin (BDD):**
  ```gherkin
  Escenario: [Nombre descriptivo del escenario]
    DADO [contexto previo / estado del sistema]
    CUANDO [acción del usuario]
    ENTONCES [resultado esperado del sistema]
  ```
- **Dependencias:** Otros RF que deben existir previamente.
Artefacto de salida: Archivo `01_SRS_REQUISITOS.md` y `02_CASOS_USO_GHERKIN.md`.

## FASE 4 — REQUERIMIENTOS NO FUNCIONALES (RNF) Y REGLAS DE NEGOCIO
Objetivo: Establecer estándares de calidad, seguridad y restricciones del dominio.
- **RNF-Seguridad:** Autenticación JWT/OAuth, cifrado en tránsito (HTTPS), Row Level Security obligatorio en Supabase.
- **RNF-Rendimiento:** Tiempos de respuesta de UI < 200ms, llamadas a API < 1s, uso de caché y paginación.
- **RNF-Usabilidad:** Diseño responsive Mobile-First, soporte Dark/Light mode, WCAG 2.1 AA (contraste, aria-labels, navegación por teclado).
- **RNF-Resiliencia:** Skeleton loaders en carga, manejo global de errores con toast accesibles, reintentos automáticos en fallos de red.
- **Reglas de Negocio (RN):** Restricciones lógicas del dominio (ej. "un usuario no puede reservar dos citas en el mismo horario", "solo el propietario puede eliminar un proyecto").
Artefacto de salida: Sección integrada en `01_SRS_REQUISITOS.md`.

## FASE 5 — MODELO DE DATOS POSTGRESQL PARA SUPABASE
Objetivo: Generar el script SQL DDL completo, optimizado y seguro.
- Extensión `pgcrypto` para llaves primarias: `id UUID DEFAULT gen_random_uuid() PRIMARY KEY`.
- Timestamps automáticos: `created_at TIMESTAMPTZ DEFAULT now()`, `updated_at` con trigger PL/pgSQL.
- Llaves foráneas con integridad referencial: `ON DELETE CASCADE` para dependientes, `ON DELETE SET NULL` para opcionales.
- Tabla `profiles` vinculada a `auth.users(id)` con trigger `handle_new_user()` para creación automática.
- Habilitación de Row Level Security: `ALTER TABLE x ENABLE ROW LEVEL SECURITY;` en TODAS las tablas.
- Políticas RLS individuales para SELECT, INSERT, UPDATE y DELETE vinculadas a `auth.uid()`.
- Índices B-Tree en llaves foráneas frecuentemente consultadas.
Artefacto de salida: Archivo `03_ESQUEMA_SUPABASE_RLS.sql` listo para ejecutar en el SQL Editor de Supabase.

## FASE 6 — GENERADOR DE PROMPT PARA GOOGLE STITCH
Objetivo: Crear un prompt altamente descriptivo para generar la UI en stitch.withgoogle.com.
El prompt debe especificar:
- Tipo de aplicación y contexto (SaaS, E-commerce, Plataforma Médica, etc.).
- Layout completo: Sidebar con navegación y perfil, Header con búsqueda y acciones, Área central con Grid responsive.
- Componentes específicos: KPI Cards con datos de ejemplo, Tablas con filtros y paginación, Tablero Kanban, Formularios Modales con validación, Empty States ilustrados.
- Sistema de diseño: Paleta de colores exacta (códigos hex), tipografía (Inter/Plus Jakarta Sans), Glassmorphism, esquinas redondeadas (rounded-xl), microinteracciones hover.
- Estados de interacción: Loading skeletons, toast notifications, hover effects, focus rings.
Artefacto de salida: Archivo `04_PROMPTS_GOOGLE_STITCH.md`.

## FASE 7 — PROMPT MAESTRO PARA GOOGLE AI STUDIO
Objetivo: Generar el prompt de compilación completo para aistudio.google.com/apps.
El prompt debe exigir:
- Stack: React 18/19 + Tailwind CSS + Lucide Icons + `@supabase/supabase-js` v2.x.
- Arquitectura modular: `/src/features/[módulo]/components|hooks|services`.
- Cliente Supabase singleton en `/src/lib/supabaseClient.js` con las variables de entorno.
- AuthProvider con `supabase.auth.onAuthStateChange` y protección de rutas.
- CRUD completo reactivo sobre todas las tablas del esquema de la Fase 5.
- KPIs calculados dinámicamente desde las consultas a Supabase.
- Skeleton loaders, toast notifications accesibles, Empty States, diálogos de confirmación.
Artefacto de salida: Archivo `05_PROMPT_MAESTRO_AISTUDIO.md`.

# FORMATO DE ENTREGA
- Usa Markdown impecable: títulos jerárquicos (##, ###), tablas alineadas, bloques de código con sintaxis resaltada (```sql, ```gherkin, ```javascript, ```markdown).
- Siempre que generes código o prompts, añade notas explicativas breves de POR QUÉ se diseñó así.
- Genera diagramas Mermaid cuando ayuden a visualizar relaciones (ERD, flujos, arquitectura).

# TONO Y CONDUCTA
- Sé claro, motivador, didáctico y técnicamente riguroso.
- Celebra los avances del estudiante ("¡Excelente definición de roles!").
- Si el estudiante da respuestas vagas, pide ejemplos concretos antes de continuar.
- Nunca inventes datos de negocio: siempre pregunta al estudiante.
```

---

## 🎨 2. Prompt Maestro para Google Stitch (Prototipado de UI)

**Dónde usarlo:** Pégalo directamente en [stitch.withgoogle.com](https://stitch.withgoogle.com/?pli=1) para generar la interfaz visual.

```markdown
Diseña una interfaz web SaaS moderna, altamente profesional y completamente responsive para "[NOMBRE DE LA APP]", una plataforma enfocada en [PROPÓSITO Y CONTEXTO DEL NEGOCIO].

## LAYOUT Y ESTRUCTURA GLOBAL
1. **Sidebar Izquierdo (Navegación Principal):**
   - Logo de la aplicación con icono estilizado y nombre "[NOMBRE]".
   - Navegación vertical con iconos Lucide: [Dashboard (activo), Módulo 1, Módulo 2, Módulo 3, Configuración].
   - Indicador de estado del sistema (punto verde "En línea") y versión de la app.
   - Perfil del usuario activo en la base: avatar circular, nombre "[NOMBRE EJEMPLO]", rol "[ROL EJEMPLO]" y botón de cerrar sesión.

2. **Header Superior (Barra de Acciones):**
   - Barra de búsqueda global con placeholder "Buscar [elementos]... (Ctrl + K)" e icono de lupa.
   - Botón de acción principal: "+ [Nuevo Elemento]" con gradiente índigo a púrpura y sombra glow.
   - Icono de notificaciones con badge numérico rojo.
   - Selector de tema claro/oscuro (toggle).

3. **Área Central (Dashboard Principal):**
   a) **Fila de KPIs (Grid 4 columnas):**
      - Tarjeta 1: "[Métrica 1]" → Valor numérico grande, badge de tendencia (+12% en verde), icono circular.
      - Tarjeta 2: "[Métrica 2]" → Valor numérico, indicador porcentual, icono circular.
      - Tarjeta 3: "[Métrica 3]" → Valor con comparativa vs período anterior.
      - Tarjeta 4: "[Métrica 4]" → Valor con barra de progreso o rating.
   
   b) **Vista Principal de Datos (Conmutable):**
      - Selector de pestañas: "Vista Lista", "Vista Kanban", "Vista Calendario".
      - Filtros inline: por Estado, por Prioridad, por Fecha, por Asignado.
      - Tabla de datos enriquecida con: avatares, etiquetas de colores por estado, fechas con alertas de proximidad, barra de progreso, columna de acciones rápidas (Editar, Eliminar, Ver detalle).
      - Paginación inferior con contador de registros.
   
   c) **Modal de Creación/Edición:**
      - Formulario flotante con overlay oscuro, campos validados con labels claras y mensajes de error inline.
      - Selectores de categoría, campos de fecha, textarea para descripción y botones de acción (Guardar / Cancelar).

## SISTEMA DE DISEÑO Y ESTILO VISUAL
- **Paleta de Colores:** Fondo principal `#0f172a` (Slate 900), tarjetas `#1e293b` (Slate 800), bordes `#334155` (Slate 700), acentos `#6366f1` (Indigo 500), texto principal `#f8fafc` (Slate 50), texto secundario `#94a3b8` (Slate 400). Éxito: `#10b981`. Alerta: `#f59e0b`. Error: `#ef4444`.
- **Acabados Premium:** Glassmorphism sutil (`backdrop-blur-md`, bordes semi-translúcidos `border-slate-700/50`), sombras difusas en tarjetas.
- **Tipografía:** Inter (400, 500, 600, 700, 800) para UI, JetBrains Mono para código.
- **Esquinas y Espaciado:** Esquinas redondeadas grandes (`rounded-xl` / `rounded-2xl`), espaciado generoso entre secciones.
- **Microinteracciones:** Hover con transición suave en tarjetas (`hover:border-indigo-500/50 transition-all duration-200`), efecto de elevación en botones (`hover:translate-y-[-2px]`), glow sutil en el botón principal.
- **Estados de Interfaz:** Incluir al menos un Skeleton Loader visible, un Empty State con ilustración y un Toast de confirmación.
```

---

## ⚡ 3. Prompt Maestro para Google AI Studio (Construcción de la App)

**Dónde usarlo:** Pégalo en [aistudio.google.com/apps](https://aistudio.google.com/apps) al crear una nueva aplicación web.

```markdown
# OBJETIVO DE LA APLICACIÓN
Construye una aplicación web Single Page Application (SPA) profesional, completa, modular y lista para producción llamada "[NOMBRE DE LA APP]". La aplicación es [DESCRIPCIÓN DEL PROPÓSITO: ej. una plataforma SaaS de gestión ágil de proyectos para equipos de ingeniería], conectada a una base de datos PostgreSQL real en Supabase.

# STACK TECNOLÓGICO OBLIGATORIO
- **Framework:** React 18/19 (o Vanilla JS modular con ES Modules si React no está disponible).
- **Estilos:** Tailwind CSS con diseño Dark Mode por defecto. Paleta: Slate 900/800 para fondos, Indigo 500 para acentos, Glassmorphism sutil.
- **Iconografía:** Lucide Icons (`lucide-react` o vía CDN `https://unpkg.com/lucide@latest`).
- **Backend:** `@supabase/supabase-js` versión 2.x (importar vía CDN: `https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2`).
- **Tipografía:** Google Fonts Inter (400-800) y JetBrains Mono para bloques de código.
- **Notificaciones:** Sistema de Toast notifications accesible (posición: bottom-right, con auto-dismiss de 4 segundos).

# CONFIGURACIÓN DEL CLIENTE SUPABASE
Crea un módulo `supabaseClient.js` con la siguiente inicialización:
```javascript
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "[TU_SUPABASE_URL]";
const SUPABASE_ANON_KEY = "[TU_SUPABASE_ANON_KEY]";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true
  }
});
```

# GESTIÓN DE AUTENTICACIÓN
1. Implementa un `AuthProvider` que escuche `supabase.auth.onAuthStateChange` y proporcione `{ user, loading, signIn, signUp, signOut }` a toda la aplicación.
2. **Vista de Login/Registro:** Pantalla moderna con formulario centrado, campos de email y contraseña con validación visual, botones con loading state y enlace para alternar entre Login y Registro.
3. **Protección de rutas:** Si el usuario no está autenticado, mostrar SOLO la pantalla de bienvenida con Login/Registro. Si está autenticado, mostrar el Dashboard con los datos del usuario.
4. **Cierre de sesión:** Botón visible en el Sidebar que llama a `supabase.auth.signOut()` y redirige a la pantalla de Login.

# ESQUEMA DE DATOS EN SUPABASE
La aplicación interactúa con estas tablas existentes (ya creadas con RLS activo):

1. `profiles`: `id (UUID PK → auth.users)`, `email`, `full_name`, `avatar_url`, `role`, `created_at`
2. [LISTA TUS TABLAS ADICIONALES CON COLUMNAS Y TIPOS]

# REQUERIMIENTOS FUNCIONALES
[PEGA AQUÍ LOS RF GENERADOS POR LA GEMA, EJEMPLO:]
1. **Dashboard Principal:** Mostrar 4 tarjetas KPI con métricas calculadas dinámicamente desde Supabase (totales, porcentajes, tendencias). Usar consultas `.select('*', { count: 'exact' })` y funciones de agregación.
2. **Listado con Filtros:** Vista de datos en tabla con filtros por estado, búsqueda en tiempo real con debounce de 300ms, ordenamiento por columnas y paginación.
3. **CRUD Completo:** Crear, leer, actualizar y eliminar registros mediante formularios modales con validación de campos requeridos.
4. **Vistas Alternativas:** Conmutar entre Vista Lista (tabla) y Vista Kanban (tablero de columnas drag-and-drop si es posible, o menú desplegable para cambiar estado).

# EXPERIENCIA DE USUARIO (UX) OBLIGATORIA
- **Skeleton Loaders:** Mostrar placeholders animados con gradiente durante la carga de datos.
- **Empty States:** Cuando no haya registros, mostrar un mensaje amigable con icono ilustrativo y botón de acción para crear el primer elemento.
- **Toast Notifications:** Confirmar cada acción exitosa ("✓ Registro creado") y reportar errores ("✗ Error al guardar: [mensaje]").
- **Diálogos de Confirmación:** Antes de eliminar cualquier registro, mostrar un diálogo modal con "¿Estás seguro? Esta acción no se puede deshacer." y botones "Cancelar" / "Eliminar".
- **Responsive:** La interfaz debe adaptarse perfectamente a móvil (sidebar colapsable), tablet y desktop.
- **Accesibilidad:** Etiquetas `aria-label` en botones de icono, `role="alert"` en toasts, navegación por teclado funcional.

# ARQUITECTURA Y CALIDAD DEL CÓDIGO
- Código modular: separar componentes, hooks y servicios en archivos independientes.
- Funciones de servicio puras para Supabase (no escribir `supabase.from(...)` dentro de componentes JSX).
- Manejo de errores con try/catch y mensajes descriptivos.
- Sin variables globales sueltas, sin `console.log` en producción.
```

---

## 🐘 4. Plantilla SQL DDL con RLS para Supabase

**Dónde usarlo:** Ejecuta este script en el SQL Editor de [supabase.com/dashboard](https://supabase.com/dashboard) → SQL Editor → New query.

```sql
-- =============================================================================
-- SCRIPT DDL MAESTRO PARA SUPABASE — [NOMBRE DEL PROYECTO]
-- Autor: Generado por la Gema SDLC ArchMentor
-- Descripción: Esquema relacional completo con RLS, triggers y políticas seguras.
-- =============================================================================

-- 1. EXTENSIONES NECESARIAS
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- 2. FUNCIÓN REUTILIZABLE: Actualización automática de updated_at
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = timezone('utc'::text, now());
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 3. FUNCIÓN: Creación automática de perfil al registrarse en Auth
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

-- 4. TRIGGER: Ejecutar handle_new_user al registrarse
CREATE OR REPLACE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- 5. TABLA: Perfiles de Usuario
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT UNIQUE NOT NULL,
    full_name TEXT,
    avatar_url TEXT,
    role TEXT DEFAULT 'user' CHECK (role IN ('admin', 'manager', 'user', 'viewer')),
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);
CREATE TRIGGER on_profiles_updated BEFORE UPDATE ON public.profiles
    FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

-- 6. TABLA: [TU TABLA PRINCIPAL]
CREATE TABLE IF NOT EXISTS public.[tabla_principal] (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    owner_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    description TEXT,
    status TEXT DEFAULT 'active' CHECK (status IN ('draft', 'active', 'completed', 'archived')),
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);
CREATE TRIGGER on_[tabla]_updated BEFORE UPDATE ON public.[tabla_principal]
    FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();
CREATE INDEX IF NOT EXISTS idx_[tabla]_owner ON public.[tabla_principal](owner_id);

-- 7. HABILITAR ROW LEVEL SECURITY EN TODAS LAS TABLAS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.[tabla_principal] ENABLE ROW LEVEL SECURITY;

-- 8. POLÍTICAS RLS PARA PROFILES
CREATE POLICY "Perfiles visibles para usuarios autenticados"
    ON public.profiles FOR SELECT TO authenticated
    USING (true);  -- Los perfiles son públicos para la comunidad interna

CREATE POLICY "Cada usuario edita solo su propio perfil"
    ON public.profiles FOR UPDATE TO authenticated
    USING (auth.uid() = id);

-- 9. POLÍTICAS RLS PARA [TABLA PRINCIPAL]
CREATE POLICY "Lectura de registros propios"
    ON public.[tabla_principal] FOR SELECT TO authenticated
    USING (auth.uid() = owner_id);

CREATE POLICY "Creación vinculada al usuario autenticado"
    ON public.[tabla_principal] FOR INSERT TO authenticated
    WITH CHECK (auth.uid() = owner_id);

CREATE POLICY "Edición de registros propios"
    ON public.[tabla_principal] FOR UPDATE TO authenticated
    USING (auth.uid() = owner_id);

CREATE POLICY "Eliminación de registros propios"
    ON public.[tabla_principal] FOR DELETE TO authenticated
    USING (auth.uid() = owner_id);
```

---

## 🔗 5. Prompt para Iterar y Refinar en AI Studio

**Dónde usarlo:** Después de que AI Studio genere la primera versión de la app, usa estos prompts de refinamiento en el chat de la misma sesión.

### 5.1 Corrección de Estilo Visual
```markdown
Ajusta la interfaz para que coincida exactamente con el sistema de diseño profesional:
- Fondo principal: #0f172a, tarjetas: #1e293b con bordes #334155 y backdrop-blur-md.
- Acentos en Indigo #6366f1, texto principal #f8fafc, texto secundario #94a3b8.
- Esquinas rounded-xl en todas las tarjetas, sombras difusas, hover con borde indigo translúcido.
- Tipografía Inter para la interfaz y JetBrains Mono para bloques de código.
- Botón principal con gradiente linear-gradient(135deg, #6366f1, #a855f7) y box-shadow glow.
```

### 5.2 Corrección de Errores RLS
```markdown
La aplicación muestra un array vacío al consultar la tabla '[NOMBRE_TABLA]'. Verifica que:
1. El usuario ha iniciado sesión correctamente con supabase.auth.getSession().
2. La consulta incluye el token JWT automáticamente (el cliente Supabase lo gestiona).
3. La política RLS de SELECT usa USING (auth.uid() = owner_id) o, si los registros deben ser públicos internamente, USING (true).
4. Muestra en consola el error exacto con: const { data, error } = await supabase.from('tabla').select('*'); if (error) console.error(error);
```

### 5.3 Agregar un Nuevo Módulo sin Romper lo Existente
```markdown
Agrega un nuevo módulo "[NOMBRE DEL MÓDULO]" a la aplicación siguiendo la arquitectura existente:
1. Crea los componentes en /src/features/[modulo]/components/.
2. Crea el servicio en /src/features/[modulo]/services/[modulo]Service.js con las consultas CRUD a Supabase.
3. Crea el hook en /src/features/[modulo]/hooks/use[Modulo].js que gestione el estado.
4. Registra la nueva ruta en el enrutador principal.
5. Añade el enlace de navegación en el Sidebar.
6. NO modifiques los archivos de otros módulos existentes.
```

### 5.4 Optimización de Rendimiento
```markdown
Optimiza el rendimiento de la aplicación:
1. Implementa debounce de 300ms en la barra de búsqueda para evitar consultas excesivas.
2. Usa paginación con .range(offset, offset + pageSize - 1) en lugar de cargar todos los registros.
3. Agrega Skeleton Loaders animados con CSS gradient mientras las consultas están en progreso.
4. Implementa caché local con useState para evitar re-consultas innecesarias al navegar entre pestañas.
```

---

## 🧪 6. Prompt para Generar Tests Automatizados desde Criterios Gherkin

**Dónde usarlo:** En tu IDE (Cursor, VS Code) o en AI Studio para generar la suite de pruebas.

```markdown
A partir de los siguientes criterios de aceptación Gherkin, genera las pruebas automatizadas correspondientes:

## Criterio Gherkin de Entrada:
```gherkin
[PEGA AQUÍ TUS CRITERIOS GHERKIN GENERADOS EN LA FASE 3]
```

Genera:
1. **Prueba E2E con Playwright** (TypeScript) que simule la interacción completa del usuario en el navegador.
2. **Prueba Unitaria con Vitest** (TypeScript) que valide la lógica del servicio de Supabase de forma aislada.

Formato de salida: Dos archivos independientes con las pruebas completas y listas para ejecutar.
```
