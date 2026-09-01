/**
 * modules-data.js
 * Base de conocimientos y contenido detallado de los módulos formativos
 */

window.MODULES_DATA = [
  {
    id: "vision-holistica",
    title: "1. Visión Holística del Software y las 7 Fases del SDLC",
    tag: "Pensamiento Sistémico",
    icon: "🌌",
    desc: "Comprende el software como un organismo vivo e interconectado. Descubre la comparativa macro de cómo se hacía antes vs cómo la IA transformó las 7 fases del desarrollo.",
    content: `
      <div class="card" style="background: linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 27, 75, 0.85)); border-color: #818cf8;">
        <div class="card-header">
          <h3 class="card-title">🌌 El Macro-Cosmos del Software: 5 Mundos Interconectados</h3>
        </div>
        <p>Un desarrollador profesional no programa a ciegas. Entiende que cada línea de código viaja a través de 5 mundos interconectados en un ciclo de retroalimentación continua:</p>

        <div class="pipeline-grid" style="grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); margin-top: 1.25rem;">
          <div class="pipeline-card" style="border-top: 3px solid #818cf8;">
            <span class="step-number" style="color: #818cf8;">Mundo 1</span>
            <h4 class="step-title">💡 Humano & Negocio</h4>
            <p class="step-desc"><strong>Gemini Gems:</strong> Transforma la idea en la Tetralogía Canónica: Plan, PRD, User Flow y TRD con criterios Gherkin.</p>
          </div>

          <div class="pipeline-card" style="border-top: 3px solid #34d399;">
            <span class="step-number" style="color: #34d399;">Mundo 2</span>
            <h4 class="step-title">🎨 Visual & UX</h4>
            <p class="step-desc"><strong>Google Stitch:</strong> Traduce el User Flow en wireframes interactivos y componentes con los 4 estados de pantalla.</p>
          </div>

          <div class="pipeline-card" style="border-top: 3px solid #38bdf8;">
            <span class="step-number" style="color: #38bdf8;">Mundo 3</span>
            <h4 class="step-title">⚡ Lógica & SPA</h4>
            <p class="step-desc"><strong>Google AI Studio:</strong> Ensambla la aplicación web reactiva con componentes TypeScript y clientes de base de datos.</p>
          </div>

          <div class="pipeline-card" style="border-top: 3px solid #c084fc;">
            <span class="step-number" style="color: #c084fc;">Mundo 4</span>
            <h4 class="step-title">🐘 Datos & RLS</h4>
            <p class="step-desc"><strong>Supabase:</strong> Persistencia relacional segura en PostgreSQL con Row Level Security y autenticación JWT.</p>
          </div>

          <div class="pipeline-card" style="border-top: 3px solid #fb923c;">
            <span class="step-number" style="color: #fb923c;">Mundo 5</span>
            <h4 class="step-title">🧪 Calidad & Ops</h4>
            <p class="step-desc"><strong>Playwright + Sentry:</strong> Validación E2E, CI/CD en Vercel y observabilidad de errores en vivo.</p>
          </div>
        </div>
      </div>

      <!-- Comparador Interactivo Antes vs Hoy -->
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">⚡ Explorador Interactivo: Las 7 Fases del SDLC (Antes vs Hoy con IA)</h3>
        </div>
        <p>Haz clic en cualquier fase para descubrir la transformación radical del paradigma de desarrollo:</p>

        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin: 1.25rem 0;">
          <button class="btn-secondary active" id="btn-sdlc-1" onclick="window.Generators.showSdlcPhase(1)">1. Requisitos & Plan</button>
          <button class="btn-secondary" id="btn-sdlc-2" onclick="window.Generators.showSdlcPhase(2)">2. Diseño UI/UX</button>
          <button class="btn-secondary" id="btn-sdlc-3" onclick="window.Generators.showSdlcPhase(3)">3. Base de Datos</button>
          <button class="btn-secondary" id="btn-sdlc-4" onclick="window.Generators.showSdlcPhase(4)">4. Desarrollo</button>
          <button class="btn-secondary" id="btn-sdlc-5" onclick="window.Generators.showSdlcPhase(5)">5. Testing QA</button>
          <button class="btn-secondary" id="btn-sdlc-6" onclick="window.Generators.showSdlcPhase(6)">6. CI/CD Cloud</button>
          <button class="btn-secondary" id="btn-sdlc-7" onclick="window.Generators.showSdlcPhase(7)">7. Observabilidad</button>
        </div>

        <div id="sdlc-phase-detail" style="padding: 1.5rem; background: rgba(15, 23, 42, 0.85); border-radius: 12px; border: 1px solid var(--border-color);">
          <!-- Inyectado dinámicamente por showSdlcPhase -->
        </div>
      </div>

      <div class="card" style="background: rgba(30, 41, 59, 0.7); border-left: 4px solid #38bdf8;">
        <h4 style="color: #38bdf8; margin-bottom: 0.5rem;">🧠 La Regla de Oro de la Trazabilidad Holística</h4>
        <p style="color: var(--text-secondary); line-height: 1.6;">
          <em>"Cada botón en pantalla debe responder a un <strong>User Flow</strong>, satisfacer un requerimiento del <strong>PRD (Gherkin)</strong>, persistir datos respetando el <strong>TRD con RLS en Supabase</strong> y estar cubierto por una <strong>Prueba Automatizada en Playwright</strong>."</em>
        </p>
      </div>
    `
  },
  {
    id: "fundamentos",
    title: "2. Fundamentos del Pipeline SDLC con IA",
    tag: "Metodología",
    icon: "🗺️",
    desc: "Aprende el ciclo de vida completo para construir software asistido por IA: desde el análisis con Gemas hasta el frontend en AI Studio y el backend en Supabase.",
    content: `
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">🔄 El Pipeline de Desarrollo Guiado en 4 Etapas</h3>
        </div>
        <p>Tradicionalmente, la especificación de requerimientos, el diseño de interfaces y la creación de la base de datos se hacían en silos aislados. Con este pipeline moderno con herramientas de Google y Supabase, orquestamos un flujo coherente y sin fisuras:</p>
        
        <div class="pipeline-grid">
          <div class="pipeline-card" onclick="window.App.switchModule('cadena-gemas')">
            <span class="step-number">Etapa 1</span>
            <h4 class="step-title">💎 Gemini Custom Gems</h4>
            <p class="step-desc">Mentor socrático que extrae los requerimientos de tu idea y genera la Tetralogía Canónica: Plan, PRD, User Flow y TRD.</p>
          </div>

          <div class="pipeline-card" onclick="window.App.switchModule('stitch-ui')">
            <span class="step-number">Etapa 2</span>
            <h4 class="step-title">🎨 Google Stitch</h4>
            <p class="step-desc">Convierte el User Flow en prototipos visuales modernos, wireframes, tokens de diseño y los 4 estados de pantalla.</p>
          </div>

          <div class="pipeline-card" onclick="window.App.switchModule('supabase-db')">
            <span class="step-number">Etapa 3</span>
            <h4 class="step-title">🐘 Supabase Database</h4>
            <p class="step-desc">Crea el esquema relacional en PostgreSQL derivado del TRD con llaves primarias UUID, triggers y políticas de seguridad RLS.</p>
          </div>

          <div class="pipeline-card" onclick="window.App.switchModule('aistudio-apps')">
            <span class="step-number">Etapa 4</span>
            <h4 class="step-title">⚡ Google AI Studio</h4>
            <p class="step-desc">Compila la aplicación web SPA profesional conectando la UI de Stitch con el backend de Supabase mediante variables de entorno.</p>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <h3 class="card-title">⚖️ Comparativa: Desarrollo Tradicional vs Desarrollo Guiado</h3>
        </div>
        <div style="overflow-x:auto;">
          <table style="width:100%; border-collapse: collapse; font-size: 0.9rem; text-align: left;">
            <thead>
              <tr style="border-bottom: 2px solid var(--border-color); color: var(--text-primary);">
                <th style="padding: 0.75rem;">Dimensión</th>
                <th style="padding: 0.75rem; color: #f87171;">Flujo Tradicional / Caótico</th>
                <th style="padding: 0.75rem; color: #4ade80;">Flujo Guiado (Gems + Stitch + AI Studio)</th>
              </tr>
            </thead>
            <tbody style="color: var(--text-secondary);">
              <tr style="border-bottom: 1px solid var(--border-color);">
                <td style="padding: 0.75rem; font-weight: 600; color: var(--text-primary);">Definición de Requisitos</td>
                <td style="padding: 0.75rem;">Prompts vagos en el chat ("hazme una app de tiendas") que producen código incompleto.</td>
                <td style="padding: 0.75rem;">Mentor socrático que extrae los 4 documentos canónicos: Plan, PRD, User Flow y TRD con criterios Gherkin formales.</td>
              </tr>
              <tr style="border-bottom: 1px solid var(--border-color);">
                <td style="padding: 0.75rem; font-weight: 600; color: var(--text-primary);">Diseño de Interfaz (UI/UX)</td>
                <td style="padding: 0.75rem;">Interfaces genéricas sin estados vacíos, de carga o de error.</td>
                <td style="padding: 0.75rem;">Google Stitch genera sistemas de diseño limpios, responsive y con los 4 estados de pantalla listos.</td>
              </tr>
              <tr style="border-bottom: 1px solid var(--border-color);">
                <td style="padding: 0.75rem; font-weight: 600; color: var(--text-primary);">Seguridad en Base de Datos</td>
                <td style="padding: 0.75rem;">Mocks en memoria (useState falso) o tablas públicas expuestas sin RLS.</td>
                <td style="padding: 0.75rem;">PostgreSQL en Supabase con Row Level Security (RLS) basado en JWT y auth.uid().</td>
              </tr>
              <tr>
                <td style="padding: 0.75rem; font-weight: 600; color: var(--text-primary);">Generación de Código</td>
                <td style="padding: 0.75rem;">Fragmentos rotos que no encajan entre sí.</td>
                <td style="padding: 0.75rem;">Google AI Studio ensambla una SPA modular con cliente de Supabase y CRUD reactivo.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `
  },
  {
    id: "cadena-gemas",
    title: "3. Cadena de Gemas y Sección 'Conocimientos'",
    tag: "Fase 1: Multi-Gemas",
    icon: "🔗",
    desc: "Aprende a conectar múltiples Gemas de Gemini para que los archivos generados por una alimenten la memoria de la siguiente.",
    content: `
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">🧩 ¿Cómo Funciona la Sección 'Conocimientos' (Knowledge)?</h3>
        </div>
        <p>Al crear o editar una Gema en Google Gemini, encuentras la opción <strong>'Conocimientos' (Añade archivos para que tu Gem los use como referencia)</strong>. Esta función permite que una Gema especializada lea documentos de especificación previos sin necesidad de volver a explicárselos en cada mensaje.</p>
        
        <div style="margin: 1.25rem 0; padding: 1.25rem; background: rgba(30, 41, 59, 0.85); border-left: 4px solid #818cf8; border-radius: 8px;">
          <h4 style="color: #a5b4fc; margin-bottom: 0.5rem;">📁 El Flujo Canónico de Archivos entre Gemas:</h4>
          <ol style="margin-left: 1.25rem; line-height: 1.8; color: var(--text-secondary);">
            <li><strong>💎 Gema 1 (Arquitecto de Producto):</strong> Genera la Tetralogía Documental: <code>01_PLAN_PROYECTO.md</code>, <code>02_PRD_PRODUCTO.md</code>, <code>03_USER_FLOWS_UX.md</code> y <code>04_TRD_ARQUITECTURA_TECNICA.md</code>.</li>
            <li><strong>💎 Gema 2 (Arquitecto Supabase):</strong> Recibe el <code>04_TRD</code> en 'Conocimientos' y produce <code>05_ESQUEMA_SUPABASE_COMPLETO.sql</code> con RLS y triggers.</li>
            <li><strong>💎 Gema 3 (Diseñador Stitch):</strong> Recibe el <code>02_PRD</code> y el <code>03_USER_FLOWS</code> para generar <code>06_PROMPTS_GOOGLE_STITCH.md</code> con los 4 estados de pantalla.</li>
            <li><strong>💎 Gema 4 (Orquestador AI Studio):</strong> Recibe el TRD, el SQL y los prompts de Stitch para compilar la SPA completa en <code>07_PROMPT_MAESTRO_AISTUDIO.md</code>.</li>
          </ol>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <h3 class="card-title">🛠️ Configurador de Gemas Especializadas</h3>
        </div>
        <p>Selecciona una de las 4 Gemas especializadas para ver su rol y copiar sus instrucciones de sistema listas para usar:</p>

        <div class="form-grid" style="margin-top: 1rem;">
          <div class="form-group">
            <label class="form-label">Seleccionar Gema de la Cadena:</label>
            <select id="multi-gem-select" class="form-control" onchange="window.Generators.updateMultiGemPrompt()">
              <option value="g1">Gema 1: Arquitecto de Producto & Documentación SDLC (Plan, PRD, User Flow, TRD)</option>
              <option value="g2">Gema 2: Administrador de Base de Datos Supabase & RLS (DDL PostgreSQL)</option>
              <option value="g3">Gema 3: Diseñador UI/UX & Google Stitch Prompt Studio (4 Estados de Pantalla)</option>
              <option value="g4">Gema 4: Orquestador Fullstack Google AI Studio & Supabase (Compilador SPA)</option>
            </select>
          </div>
        </div>

        <div class="code-container">
          <div class="code-header">
            <span id="multi-gem-filename">GEMA_1_ARQUITECTO_PRODUCTO_INSTRUCTIONS.md</span>
            <button class="btn-copy" onclick="window.App.copyCode('multi-gem-output')">📋 Copiar Instrucciones de Gema</button>
          </div>
          <pre class="code-content" id="multi-gem-output"></pre>
        </div>
      </div>
    `
  },
  {
    id: "artefactos-individuales",
    title: "4. Tetralogía Documental Canónica (.md / .sql)",
    tag: "Fase 2: Artefactos",
    icon: "📑",
    desc: "Aprende la importancia de Plan, PRD, User Flow y TRD, y genera la documentación técnica de tu proyecto.",
    content: `
      <!-- Explicador Pedagógico de los 4 Documentos -->
      <div class="card" style="background: linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 27, 75, 0.85)); border-color: #818cf8;">
        <div class="card-header">
          <h3 class="card-title">🏛️ ¿Por qué son indispensables estos 4 documentos?</h3>
        </div>
        <p>En el desarrollo con IA, estos cuatro documentos representan la <strong>Única Fuente de Verdad (SSoT)</strong>. Omitir cualquiera de ellos causa fallos críticos:</p>

        <div class="pipeline-grid" style="grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); margin-top: 1.25rem;">
          <div class="pipeline-card" style="border-top: 3px solid #818cf8;">
            <span class="step-number" style="color: #818cf8;">Doc 1</span>
            <h4 class="step-title">🗓️ Plan de Proyecto</h4>
            <p class="step-desc"><strong>El Cuándo y los Límites:</strong> Delimita qué está dentro del MVP (In-Scope) y qué queda fuera (Out-of-Scope). Evita que la IA intente programar todo a la vez.</p>
          </div>

          <div class="pipeline-card" style="border-top: 3px solid #38bdf8;">
            <span class="step-number" style="color: #38bdf8;">Doc 2</span>
            <h4 class="step-title">📋 PRD (Producto)</h4>
            <p class="step-desc"><strong>El Qué y el Para Quién:</strong> Define las User Personas, los Requerimientos Funcionales (RF) y los Criterios de Aceptación Gherkin BDD (Happy Path y Errores).</p>
          </div>

          <div class="pipeline-card" style="border-top: 3px solid #c084fc;">
            <span class="step-number" style="color: #c084fc;">Doc 3</span>
            <h4 class="step-title">🔀 User Flow & UX</h4>
            <p class="step-desc"><strong>La Navegación y Estados:</strong> Mapea el recorrido pantalla a pantalla y especifica los 4 estados: Empty State, Loading Skeleton, Success Toast y Error.</p>
          </div>

          <div class="pipeline-card" style="border-top: 3px solid #4ade80;">
            <span class="step-number" style="color: #4ade80;">Doc 4</span>
            <h4 class="step-title">🏗️ TRD (Arquitectura)</h4>
            <p class="step-desc"><strong>El Cómo Técnico:</strong> Stack exacto, Diagrama ERD, Script DDL para Supabase con RLS estricto y Requerimientos No Funcionales (RNF).</p>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <h3 class="card-title">📦 Configura los Datos Base de tu Proyecto</h3>
        </div>
        <div class="form-grid">
          <div class="form-group">
            <label class="form-label">Nombre del Software</label>
            <input type="text" id="art-app-name" class="form-control" value="EduPulse SaaS" oninput="window.Generators.updateAllArtifacts()" />
          </div>
          <div class="form-group">
            <label class="form-label">Propósito / Problema que Resuelve</label>
            <input type="text" id="art-purpose" class="form-control" value="Plataforma de gestión de cursos, lecciones interactivas y seguimiento de tareas para estudiantes." oninput="window.Generators.updateAllArtifacts()" />
          </div>
          <div class="form-group">
            <label class="form-label">Actor / Rol Principal</label>
            <input type="text" id="art-actor" class="form-control" value="Profesor / Estudiante" oninput="window.Generators.updateAllArtifacts()" />
          </div>
        </div>
      </div>

      <!-- Pestañas de Archivos Individuales -->
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">📂 Archivos Canónicos Generados para tu Proyecto</h3>
          <div style="display: flex; gap: 0.5rem;">
            <button class="btn-secondary" onclick="window.App.downloadCurrentArtifact()">💾 Descargar Archivo Activo</button>
          </div>
        </div>

        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1rem;">
          <button class="btn-secondary active" id="tab-btn-plan" onclick="window.App.switchArtifactTab('plan')">01_PLAN_PROYECTO.md</button>
          <button class="btn-secondary" id="tab-btn-prd" onclick="window.App.switchArtifactTab('prd')">02_PRD_PRODUCTO.md</button>
          <button class="btn-secondary" id="tab-btn-userflow" onclick="window.App.switchArtifactTab('userflow')">03_USER_FLOWS_UX.md</button>
          <button class="btn-secondary" id="tab-btn-trd" onclick="window.App.switchArtifactTab('trd')">04_TRD_ARQUITECTURA.md</button>
          <button class="btn-secondary" id="tab-btn-sql" onclick="window.App.switchArtifactTab('sql')">05_ESQUEMA_SUPABASE.sql</button>
          <button class="btn-secondary" id="tab-btn-stitch" onclick="window.App.switchArtifactTab('stitch')">06_PROMPTS_STITCH.md</button>
          <button class="btn-secondary" id="tab-btn-aistudio" onclick="window.App.switchArtifactTab('aistudio')">07_PROMPT_AISTUDIO.md</button>
        </div>

        <div class="code-container">
          <div class="code-header">
            <span id="artifact-current-filename">01_PLAN_PROYECTO.md</span>
            <button class="btn-copy" onclick="window.App.copyCode('artifact-current-output')">📋 Copiar Contenido</button>
          </div>
          <pre class="code-content" id="artifact-current-output" style="max-height: 420px;"></pre>
        </div>
      </div>
    `
  },
  {
    id: "stitch-ui",
    title: "5. Prototipado Visual en Google Stitch con Catálogo de 40 Estilos",
    tag: "Fase 3: Diseño UI",
    icon: "🎨",
    desc: "Transforma tus requerimientos en prompts visuales para stitch.withgoogle.com explorando el catálogo completo de 40 estilos frontend.",
    content: `
      <!-- Banner Pedagógico de Google Stitch -->
      <div class="card" style="background: linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(6, 78, 59, 0.6)); border-color: #34d399;">
        <div class="card-header">
          <h3 class="card-title">🎨 Google Stitch: De la Idea al Prototipo Visual con IA</h3>
        </div>
        <p>
          <strong>Google Stitch</strong> (<a href="https://stitch.withgoogle.com/?pli=1" target="_blank" style="color: #34d399; text-decoration: underline;">stitch.withgoogle.com</a>) es el entorno de diseño generativo de Google que convierte especificaciones en lenguaje natural en pantallas frontend modernas. Para evitar que la IA genere interfaces genéricas o repetitivas, el aprendiz debe inyectar dos elementos clave: <strong>un estilo visual definido del catálogo</strong> y <strong>la matriz de los 4 estados de pantalla</strong>.
        </p>
      </div>

      <!-- Generador Dinámico de Prompts para Stitch -->
      <div class="card" id="stitch-generator-card">
        <div class="card-header">
          <h3 class="card-title">⚡ Generador Personalizado de Prompts para Google Stitch</h3>
        </div>
        <p>Configura tu pantalla y selecciona tu estilo favorito entre los 40 disponibles para generar tu prompt a la medida:</p>

        <div class="form-grid" style="margin-top: 1rem;">
          <div class="form-group">
            <label class="form-label">Nombre de la Aplicación:</label>
            <input type="text" id="stitch-custom-appname" class="form-control" value="EduPulse SaaS" oninput="window.Generators.updateCustomStitchPrompt()" />
          </div>
          <div class="form-group">
            <label class="form-label">Propósito / Objetivo:</label>
            <input type="text" id="stitch-custom-purpose" class="form-control" value="Plataforma de cursos interactivos y métricas de progreso de estudiantes" oninput="window.Generators.updateCustomStitchPrompt()" />
          </div>
        </div>

        <div class="form-grid" style="margin-top: 0.5rem;">
          <div class="form-group">
            <label class="form-label">Tipo de Pantalla / Módulo:</label>
            <select id="stitch-custom-screen" class="form-control" onchange="window.Generators.updateCustomStitchPrompt()">
              <option value="dashboard">Dashboard Principal con 4 KPIs, Gráficos y Tabla Interactiva</option>
              <option value="kanban">Tablero Kanban de Tareas con Columnas y Filtros por Prioridad</option>
              <option value="marketplace">Catálogo de Productos / Marketplace con Grid, Filtros y Carrito</option>
              <option value="clinico">Panel Médico / Citas con Agenda Semanal y Pacientes en Espera</option>
              <option value="devops">Consola DevOps / Telemetría con Logs en Vivo y Gráficos de Red</option>
              <option value="habits">App Móvil / PWA de Hábitos con Rachas, Metas y Gamificación</option>
            </select>
          </div>

          <div class="form-group">
            <label class="form-label">Estilo Visual Frontend (De los 40 Estilos):</label>
            <select id="stitch-custom-style" class="form-control" onchange="window.Generators.updateCustomStitchPrompt()">
              <!-- Opciones inyectadas dinámicamente -->
            </select>
          </div>
        </div>

        <div class="code-container" style="margin-top: 1.25rem;">
          <div class="code-header">
            <span>PROMPT_STITCH_PERSONALIZADO.md</span>
            <button class="btn-copy" onclick="window.App.copyCode('stitch-custom-output')">📋 Copiar Prompt para Google Stitch</button>
          </div>
          <pre class="code-content" id="stitch-custom-output" style="max-height: 380px;"></pre>
        </div>
      </div>

      <!-- Catálogo Maestro de 40 Estilos Frontend -->
      <div class="card">
        <div class="card-header" style="flex-direction: column; align-items: flex-start; gap: 0.5rem;">
          <div style="display: flex; justify-content: space-between; width: 100%; align-items: center; flex-wrap: wrap; gap: 0.75rem;">
            <h3 class="card-title">📚 Catálogo Maestro Interactivo: 40 Estilos de Diseño Frontend</h3>
            <span class="brand-badge" style="background: rgba(52, 211, 153, 0.15); color: #34d399; border: 1px solid #34d399;">40 Estilos Disponibles</span>
          </div>
          <p style="font-size: 0.9rem; color: var(--text-secondary); margin: 0;">
            Explora los 40 estilos visuales de las dos colecciones. Haz clic en <strong>"Copiar Prompt"</strong> para llevarte el snippet de estilo o en <strong>"Usar en Generador"</strong> para aplicarlo automáticamente al generador superior.
          </p>
        </div>

        <!-- Buscador y Filtros por Categoría -->
        <div style="margin-top: 1rem; display: flex; flex-direction: column; gap: 0.75rem;">
          <div class="form-group">
            <input type="text" id="stitch-style-search" class="form-control" placeholder="🔍 Buscar estilo por nombre, palabras clave (ej. Bento, Cyberpunk, Glass, Terminal, Minimalismo, Clay...)" oninput="window.Generators.searchStyles(this.value)" style="font-size: 0.95rem; padding: 0.75rem 1rem;" />
          </div>

          <div class="style-category-pills" id="style-category-pills">
            <button class="category-pill active" onclick="window.Generators.setStylesFilter('all', this)">🌐 Todos (40)</button>
            <button class="category-pill" onclick="window.Generators.setStylesFilter('principales', this)">🏛️ 20 Principales</button>
            <button class="category-pill" onclick="window.Generators.setStylesFilter('adicionales', this)">🚀 20 Adicionales</button>
            <button class="category-pill" onclick="window.Generators.setStylesFilter('modernos', this)">✨ Modernos & Glass</button>
            <button class="category-pill" onclick="window.Generators.setStylesFilter('saas', this)">📊 SaaS & Productividad</button>
            <button class="category-pill" onclick="window.Generators.setStylesFilter('geek', this)">👾 Geek, Retro & Gaming</button>
            <button class="category-pill" onclick="window.Generators.setStylesFilter('expresivo', this)">🎨 Expresivos & Artísticos</button>
            <button class="category-pill" onclick="window.Generators.setStylesFilter('interactivo', this)">⚡ Interactivos, 3D & Tech</button>
          </div>
        </div>

        <!-- Grid de Tarjetas de Estilos -->
        <div id="stitch-styles-grid" class="styles-cards-grid" style="margin-top: 1.5rem;">
          <!-- Inyectado dinámicamente por renderStylesGrid -->
        </div>
      </div>

      <!-- Presets Rápidos -->
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">💡 Plantillas de Caso de Uso Rápidas (Presets Preconfigurados)</h3>
        </div>
        <p>Si prefieres una configuración integral ya probada, selecciona uno de estos presets listos para usar:</p>

        <div class="form-grid" style="margin-top: 1rem;">
          <div class="form-group">
            <label class="form-label">Plantilla Preconfigurada:</label>
            <select id="stitch-preset-select" class="form-control" onchange="window.Generators.loadStitchPreset()">
              <option value="dashboard-saas">Dashboard SaaS con KPIs, Gráficos y Tablero Kanban (Dark Slate + Indigo)</option>
              <option value="marketplace">Marketplace / E-commerce con Filtro de Productos y Carrito (Emerald + Purple)</option>
              <option value="medico">Plataforma Médica con Agenda de Citas y Expedientes (Clinical Cyan + Slate)</option>
              <option value="canchas">Sistema de Reserva de Canchas Deportivas (Neon Green + Electric Blue)</option>
            </select>
          </div>
        </div>

        <div class="code-container">
          <div class="code-header">
            <span>PROMPT_PRESET_STITCH.md</span>
            <button class="btn-copy" onclick="window.App.copyCode('stitch-preset-output')">📋 Copiar Preset para Stitch</button>
          </div>
          <pre class="code-content" id="stitch-preset-output"></pre>
        </div>
      </div>
    `
  },
  {
    id: "importacion-stitch-aistudio",
    title: "6. Guía de Importación: De Google Stitch a Google AI Studio",
    tag: "Fase 4: Trasvase UI",
    icon: "🔄",
    desc: "Aprende el método exacto para extraer el diseño y los componentes de Stitch y llevarlos a aistudio.google.com/apps.",
    content: `
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">📥 Paso a Paso: Exportación de Stitch a AI Studio</h3>
        </div>
        
        <div style="display: flex; flex-direction: column; gap: 1rem; margin-top: 1rem;">
          <div style="padding: 1rem; background: rgba(30, 41, 59, 0.7); border-radius: 8px; border: 1px solid var(--border-color);">
            <h4 style="color: #38bdf8;">Paso 1: Genera y Ajusta la UI en Google Stitch</h4>
            <p style="color: var(--text-secondary); font-size: 0.9rem; margin-top: 0.25rem;">
              Pega tu prompt en <a href="https://stitch.withgoogle.com/?pli=1" target="_blank" style="color:#38bdf8;">stitch.withgoogle.com</a>. Ajusta los estilos, temas y componentes visuales hasta que la pantalla se vea profesional.
            </p>
          </div>

          <div style="padding: 1rem; background: rgba(30, 41, 59, 0.7); border-radius: 8px; border: 1px solid var(--border-color);">
            <h4 style="color: #38bdf8;">Paso 2: Copia la Especificación de Componentes</h4>
            <p style="color: var(--text-secondary); font-size: 0.9rem; margin-top: 0.25rem;">
              Copia el código JSX/HTML o la descripción jerárquica de componentes (Sidebar, Header, KPI Cards, DataTable, Modales).
            </p>
          </div>

          <div style="padding: 1rem; background: rgba(30, 41, 59, 0.7); border-radius: 8px; border: 1px solid var(--border-color);">
            <h4 style="color: #38bdf8;">Paso 3: Abre Google AI Studio Apps e Inyecta el Prompt Maestro</h4>
            <p style="color: var(--text-secondary); font-size: 0.9rem; margin-top: 0.25rem;">
              Ve a <a href="https://aistudio.google.com/apps" target="_blank" style="color:#38bdf8;">aistudio.google.com/apps</a>, crea una nueva aplicación y proporciona el prompt con el diseño de Stitch + el cliente de Supabase.
            </p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: "conexion-supabase",
    title: "7. Conexión de AI Studio a Supabase con Variables de Entorno",
    tag: "Fase 5: Backend Real",
    icon: "🔑",
    desc: "Configura SUPABASE_URL y SUPABASE_ANON_KEY para que la app en AI Studio consuma la base de datos en tiempo real.",
    content: `
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">⚡ Configurador Interactivo de Variables de Entorno Supabase</h3>
        </div>
        <p>Ingresa tus credenciales de Supabase para generar el código de conexión exacto y listo para usar en tu proyecto:</p>

        <div class="form-grid" style="margin-top: 1rem;">
          <div class="form-group">
            <label class="form-label">SUPABASE_URL</label>
            <input type="text" id="env-supabase-url" class="form-control" value="https://desxxxxxxxxxswwwwc.supabase.co" oninput="window.Generators.updateSupabaseClientPreview()" />
          </div>
          <div class="form-group">
            <label class="form-label">SUPABASE_ANON_KEY</label>
            <input type="text" id="env-supabase-key" class="form-control" value="sb_publishable_BG-ADvvcccccccxxxxxxxxxxxxxxxxxxxxxxxxxx" oninput="window.Generators.updateSupabaseClientPreview()" />
          </div>
        </div>

        <div class="code-container">
          <div class="code-header">
            <span>src/lib/supabaseClient.js</span>
            <button class="btn-copy" onclick="window.App.copyCode('supabase-client-output')">📋 Copiar Código del Cliente</button>
          </div>
          <pre class="code-content" id="supabase-client-output"></pre>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <h3 class="card-title">🛡️ Patrón de Consulta y Autenticación en AI Studio</h3>
        </div>
        <div class="code-container">
          <div class="code-header">
            <span>src/hooks/useSupabaseCrud.js</span>
            <button class="btn-copy" onclick="window.App.copyCode('supabase-crud-output')">📋 Copiar Hook React</button>
          </div>
          <pre class="code-content" id="supabase-crud-output"></pre>
        </div>
      </div>
    `
  },
  {
    id: "sdlc-herramientas",
    title: "8. Ecosistema SDLC: Testing, CI/CD, Observabilidad y Despliegue",
    tag: "Calidad & DevOps",
    icon: "🛠️",
    desc: "Herramientas profesionales para llevar la aplicación web de prototipo a producción: Playwright, Vitest, GitHub Actions, Vercel, Sentry y PostHog.",
    content: `
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">🌐 Las 7 Fases del SDLC Profesional</h3>
        </div>
        <p>Un flujo de desarrollo profesional no termina cuando la IA genera el código. Requiere validación automatizada, control de versiones, integración continua y monitoreo en tiempo real:</p>

        <div style="overflow-x:auto; margin-top: 1rem;">
          <table style="width:100%; border-collapse: collapse; font-size: 0.9rem; text-align: left;">
            <thead>
              <tr style="border-bottom: 2px solid var(--border-color); color: var(--text-primary);">
                <th style="padding: 0.75rem;">Fase SDLC</th>
                <th style="padding: 0.75rem;">Herramientas Recomendadas</th>
                <th style="padding: 0.75rem;">Rol e Integración en el Proyecto</th>
              </tr>
            </thead>
            <tbody style="color: var(--text-secondary);">
              <tr style="border-bottom: 1px solid var(--border-color);">
                <td style="padding: 0.75rem; font-weight: 600; color: #818cf8;">1. Requisitos & Plan</td>
                <td style="padding: 0.75rem;"><strong>Gemini Gems + Mermaid.js</strong></td>
                <td style="padding: 0.75rem;">Tetralogía Canónica (Plan, PRD, User Flow, TRD) y backlog en Linear / GitHub Projects.</td>
              </tr>
              <tr style="border-bottom: 1px solid var(--border-color);">
                <td style="padding: 0.75rem; font-weight: 600; color: #10b981;">2. UI/UX & Prototipo</td>
                <td style="padding: 0.75rem;"><strong>Google Stitch + shadcn/ui</strong></td>
                <td style="padding: 0.75rem;">Wireframes con IA, componentes accesibles Radix UI y los 4 estados de pantalla.</td>
              </tr>
              <tr style="border-bottom: 1px solid var(--border-color);">
                <td style="padding: 0.75rem; font-weight: 600; color: #a855f7;">3. Base de Datos</td>
                <td style="padding: 0.75rem;"><strong>Supabase (PostgreSQL + RLS)</strong></td>
                <td style="padding: 0.75rem;">Persistencia relacional, seguridad por fila, Auth, Realtime y migraciones con Supabase CLI.</td>
              </tr>
              <tr style="border-bottom: 1px solid var(--border-color);">
                <td style="padding: 0.75rem; font-weight: 600; color: #38bdf8;">4. Desarrollo & IDE</td>
                <td style="padding: 0.75rem;"><strong>Google AI Studio + Cursor / TS</strong></td>
                <td style="padding: 0.75rem;">Compilación de la SPA y tipado estricto con TypeScript generado automáticamente.</td>
              </tr>
              <tr style="border-bottom: 1px solid var(--border-color);">
                <td style="padding: 0.75rem; font-weight: 600; color: #f472b6;">5. Testing & QA</td>
                <td style="padding: 0.75rem;"><strong>Playwright + Vitest + Biome</strong></td>
                <td style="padding: 0.75rem;">Pruebas End-to-End en navegador real, unit testing de hooks y análisis estático de código.</td>
              </tr>
              <tr style="border-bottom: 1px solid var(--border-color);">
                <td style="padding: 0.75rem; font-weight: 600; color: #60a5fa;">6. CI/CD & Cloud</td>
                <td style="padding: 0.75rem;"><strong>GitHub Actions + Vercel</strong></td>
                <td style="padding: 0.75rem;">Pipeline automatizado de testing y despliegue global continuo en cada 'git push'.</td>
              </tr>
              <tr>
                <td style="padding: 0.75rem; font-weight: 600; color: #f87171;">7. Observabilidad</td>
                <td style="padding: 0.75rem;"><strong>Sentry + PostHog</strong></td>
                <td style="padding: 0.75rem;">Captura de excepciones en vivo, mapas de calor, grabaciones de sesión y seguridad OWASP.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `
  },
  {
    id: "escalabilidad-modular",
    title: "9. Arquitectura Modular, Patrones de Diseño y Escalabilidad",
    tag: "Clean Architecture & SOLID",
    icon: "🏗️",
    desc: "Cómo estructurar el código por Features para evitar archivos gigantes ('God Files'), aplicar patrones Service/Hook y crecer sin romper lo construido.",
    content: `
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">🏛️ Estructura Basada en Features (Feature-Driven Architecture)</h3>
        </div>
        <p>Para evitar que un proyecto se vuelva inmanejable, organizamos el código por <strong>dominios de negocio independientes</strong> en lugar de tipos de archivo:</p>

        <div class="code-container">
          <div class="code-header">
            <span>Árbol de Directorios Modular (/src/features/)</span>
          </div>
          <pre class="code-content">src/
├── app/                      # Enrutador global (routes.jsx) y Providers
├── components/ui/            # Componentes atómicos (Button, Modal, Input, Badge)
├── lib/                      # Clientes singleton (supabaseClient.js)
└── features/                 # MÓDULOS DE NEGOCIO AUTÓNOMOS
    ├── auth/                 # Dominio de Autenticación
    │   ├── components/       # LoginForm.jsx, RegisterModal.jsx
    │   ├── hooks/            # useAuth.js
    │   └── services/         # authService.js
    ├── projects/             # Dominio de Proyectos
    │   ├── components/       # ProjectCard.jsx, ProjectList.jsx
    │   ├── hooks/            # useProjects.js
    │   └── services/         # projectService.js
    └── tasks/                # Dominio de Tareas (Kanban)
        ├── components/       # KanbanBoard.jsx, TaskItem.jsx
        ├── hooks/            # useTasks.js
        └── services/         # taskService.js</pre>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <h3 class="card-title">📐 El Patrón de 3 Capas: UI ➔ Hook ➔ Service ➔ Supabase</h3>
        </div>
        <p>Aísla las consultas de base de datos de la interfaz visual para que un cambio en Supabase nunca rompa la UI:</p>

        <div class="form-grid" style="margin-top: 1rem;">
          <div style="background: rgba(30, 41, 59, 0.7); border: 1px solid var(--border-color); padding: 1rem; border-radius: 8px;">
            <h5 style="color: #818cf8; font-weight: 700; margin-bottom: 0.25rem;">1. Capa Visual (JSX)</h5>
            <p style="color: var(--text-secondary); font-size: 0.85rem;">Componente "tonto" que solo recibe props y renderiza botones, tarjetas y formularios.</p>
          </div>

          <div style="background: rgba(30, 41, 59, 0.7); border: 1px solid var(--border-color); padding: 1rem; border-radius: 8px;">
            <h5 style="color: #38bdf8; font-weight: 700; margin-bottom: 0.25rem;">2. Capa de Hook (State)</h5>
            <p style="color: var(--text-secondary); font-size: 0.85rem;">Custom Hook que gestiona <code>useState</code>, <code>useEffect</code>, estados de carga y errores.</p>
          </div>

          <div style="background: rgba(30, 41, 59, 0.7); border: 1px solid var(--border-color); padding: 1rem; border-radius: 8px;">
            <h5 style="color: #34d399; font-weight: 700; margin-bottom: 0.25rem;">3. Capa de Servicio</h5>
            <p style="color: var(--text-secondary); font-size: 0.85rem;">Funciones asíncronas puras que llaman a <code>supabase.from(...)</code> y retornan datos limpios.</p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: "evaluacion",
    title: "10. Laboratorio de Ejercicios y Evaluación",
    tag: "Evaluación & XP",
    icon: "🎯",
    desc: "Demuestra tus conocimientos en encadenamiento de Gemas, prototipado en Stitch, seguridad RLS y conexión a Supabase.",
    content: `
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">🧪 Desafíos y Quizzes Interactivos</h3>
          <span class="xp-badge" id="quiz-score-badge">0 / 60 XP</span>
        </div>
        <p>Responde a las siguientes preguntas técnicas para poner a prueba tu dominio del desarrollo guiado por IA y la tetralogía documental:</p>

        <div class="quiz-container" id="quiz-list" style="margin-top: 1.25rem;"></div>
      </div>
    `
  }
];
