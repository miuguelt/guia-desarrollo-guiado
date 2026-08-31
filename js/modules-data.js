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
            <p class="step-desc"><strong>Gemini Gems:</strong> Transforma la idea en requerimientos SRS y criterios de aceptación Gherkin.</p>
          </div>

          <div class="pipeline-card" style="border-top: 3px solid #34d399;">
            <span class="step-number" style="color: #34d399;">Mundo 2</span>
            <h4 class="step-title">🎨 Visual & UX</h4>
            <p class="step-desc"><strong>Google Stitch:</strong> Traduce la especificación en wireframes, paletas y tokens Tailwind funcionales.</p>
          </div>

          <div class="pipeline-card" style="border-top: 3px solid #38bdf8;">
            <span class="step-number" style="color: #38bdf8;">Mundo 3</span>
            <h4 class="step-title">⚡ Lógica & SPA</h4>
            <p class="step-desc"><strong>Google AI Studio:</strong> Ensambla la aplicación web reactiva con componentes TypeScript limpios.</p>
          </div>

          <div class="pipeline-card" style="border-top: 3px solid #c084fc;">
            <span class="step-number" style="color: #c084fc;">Mundo 4</span>
            <h4 class="step-title">🐘 Datos & RLS</h4>
            <p class="step-desc"><strong>Supabase:</strong> Persistencia relacional segura en PostgreSQL con Row Level Security y Auth.</p>
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
          <button class="btn-secondary active" id="btn-sdlc-1" onclick="window.Generators.showSdlcPhase(1)">1. Requisitos</button>
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
          <em>"Cada botón en pantalla debe responder a un <strong>Requerimiento Funcional (Gherkin)</strong>, persistir datos en una tabla con <strong>Políticas RLS en Supabase</strong> y estar cubierto por una <strong>Prueba Automatizada en Playwright</strong>."</em>
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
            <p class="step-desc">Tutor socrático que extrae los requerimientos de tu idea y genera artefactos Markdown separados usando la sección 'Conocimientos'.</p>
          </div>

          <div class="pipeline-card" onclick="window.App.switchModule('stitch-ui')">
            <span class="step-number">Etapa 2</span>
            <h4 class="step-title">🎨 Google Stitch</h4>
            <p class="step-desc">Convierte la especificación de vistas y componentes en prototipos visuales modernos, wireframes y tokens de diseño.</p>
          </div>

          <div class="pipeline-card" onclick="window.App.switchModule('supabase-db')">
            <span class="step-number">Etapa 3</span>
            <h4 class="step-title">🐘 Supabase Database</h4>
            <p class="step-desc">Crea el esquema relacional en PostgreSQL con llaves primarias UUID, triggers automáticos y políticas de seguridad RLS.</p>
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
                <td style="padding: 0.75rem;">Mentor socrático (Gema) que extrae SRS, RF-01 a RF-XX y criterios Gherkin formales en archivos separados.</td>
              </tr>
              <tr style="border-bottom: 1px solid var(--border-color);">
                <td style="padding: 0.75rem; font-weight: 600; color: var(--text-primary);">Diseño de Interfaz (UI/UX)</td>
                <td style="padding: 0.75rem;">Interfaces genéricas, botones desalineados o estilos planos sin jerarquía.</td>
                <td style="padding: 0.75rem;">Google Stitch genera sistemas de diseño limpios, responsive y con tokens Tailwind listos.</td>
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
    title: "2. Cadena de Gemas y Sección 'Conocimientos'",
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
          <h4 style="color: #a5b4fc; margin-bottom: 0.5rem;">📁 El Flujo de Archivos entre Gemas:</h4>
          <ol style="margin-left: 1.25rem; line-height: 1.8; color: var(--text-secondary);">
            <li><strong>Gema 1 (Analista SDLC):</strong> Genera <code>01_SRS_REQUISITOS.md</code> y <code>02_CASOS_USO_GHERKIN.md</code> mediante preguntas socráticas.</li>
            <li><strong>Gema 2 (Arquitecto Supabase):</strong> Recibe <code>01_SRS_REQUISITOS.md</code> en 'Conocimientos' y produce <code>03_ESQUEMA_SUPABASE_RLS.sql</code>.</li>
            <li><strong>Gema 3 (Diseñador Stitch):</strong> Recibe los Requerimientos y genera <code>04_PROMPTS_GOOGLE_STITCH.md</code> con la estructura de UI.</li>
            <li><strong>Gema 4 (Orquestador AI Studio):</strong> Recibe el SQL y el diseño de Stitch para generar el Prompt Maestro final de la aplicación web.</li>
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
              <option value="g1">Gema 1: Analista de Requisitos & SRS (Preguntas progresivas)</option>
              <option value="g2">Gema 2: Arquitecto de Base de Datos Supabase & RLS</option>
              <option value="g3">Gema 3: Diseñador UI/UX & Google Stitch Prompt Studio</option>
              <option value="g4">Gema 4: Orquestador Fullstack Google AI Studio & Supabase</option>
            </select>
          </div>
        </div>

        <div class="code-container">
          <div class="code-header">
            <span id="multi-gem-filename">GEMA_1_ANALISTA_REQUISITOS_INSTRUCTIONS.md</span>
            <button class="btn-copy" onclick="window.App.copyCode('multi-gem-output')">📋 Copiar Instrucciones de Gema</button>
          </div>
          <pre class="code-content" id="multi-gem-output"></pre>
        </div>
      </div>
    `
  },
  {
    id: "artefactos-individuales",
    title: "3. Generador de Documentación en Archivos Separados (.md / .sql)",
    tag: "Fase 2: Artefactos",
    icon: "📑",
    desc: "Genera y descarga por separado cada archivo de especificación técnica necesario para tu proyecto.",
    content: `
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
          <h3 class="card-title">📂 Archivos Markdown y SQL Generados</h3>
          <div style="display: flex; gap: 0.5rem;">
            <button class="btn-secondary" onclick="window.App.downloadCurrentArtifact()">💾 Descargar Archivo Activo</button>
          </div>
        </div>

        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1rem;">
          <button class="btn-secondary active" id="tab-btn-srs" onclick="window.App.switchArtifactTab('srs')">01_SRS_REQUISITOS.md</button>
          <button class="btn-secondary" id="tab-btn-gherkin" onclick="window.App.switchArtifactTab('gherkin')">02_CASOS_USO_GHERKIN.md</button>
          <button class="btn-secondary" id="tab-btn-sql" onclick="window.App.switchArtifactTab('sql')">03_ESQUEMA_SUPABASE_RLS.sql</button>
          <button class="btn-secondary" id="tab-btn-stitch" onclick="window.App.switchArtifactTab('stitch')">04_PROMPTS_GOOGLE_STITCH.md</button>
          <button class="btn-secondary" id="tab-btn-aistudio" onclick="window.App.switchArtifactTab('aistudio')">05_PROMPT_MAESTRO_AISTUDIO.md</button>
        </div>

        <div class="code-container">
          <div class="code-header">
            <span id="artifact-current-filename">01_SRS_REQUISITOS.md</span>
            <button class="btn-copy" onclick="window.App.copyCode('artifact-current-output')">📋 Copiar Contenido</button>
          </div>
          <pre class="code-content" id="artifact-current-output" style="max-height: 400px;"></pre>
        </div>
      </div>
    `
  },
  {
    id: "stitch-ui",
    title: "4. Prototipado Visual en Google Stitch con Ideas de Prompts",
    tag: "Fase 3: Diseño UI",
    icon: "🎨",
    desc: "Cómo transformar la documentación generada en prompts visuales para stitch.withgoogle.com con catálogo de ideas.",
    content: `
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">💡 Banco de Ideas de Prompts de UI para Aprendices</h3>
        </div>
        <p>Selecciona una plantilla de pantalla común para ver cómo formular el prompt visual optimizado para Google Stitch:</p>

        <div class="form-grid" style="margin-top: 1rem;">
          <div class="form-group">
            <label class="form-label">Plantilla de UI / Caso de Uso:</label>
            <select id="stitch-preset-select" class="form-control" onchange="window.Generators.loadStitchPreset()">
              <option value="dashboard-saas">Dashboard SaaS con KPIs, Gráficos y Tablero Kanban</option>
              <option value="marketplace">Marketplace / E-commerce con Filtro de Productos y Carrito</option>
              <option value="medico">Plataforma Médica con Agenda de Citas y Expedientes</option>
              <option value="canchas">Sistema de Reserva de Canchas Deportivas con Selector Horario</option>
            </select>
          </div>
        </div>

        <div class="code-container">
          <div class="code-header">
            <span>PROMPT_STITCH_LISTO_PARA_USAR.md</span>
            <button class="btn-copy" onclick="window.App.copyCode('stitch-preset-output')">📋 Copiar Prompt para Stitch</button>
          </div>
          <pre class="code-content" id="stitch-preset-output"></pre>
        </div>
      </div>
    `
  },
  {
    id: "importacion-stitch-aistudio",
    title: "5. Guía de Importación: De Google Stitch a Google AI Studio",
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
    title: "6. Conexión de AI Studio a Supabase con Variables de Entorno",
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
    title: "7. Ecosistema SDLC: Testing, CI/CD, Observabilidad y Despliegue",
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
                <td style="padding: 0.75rem;">Extracción socrática del SRS, diagramas C4 y backlog en Linear / GitHub Projects.</td>
              </tr>
              <tr style="border-bottom: 1px solid var(--border-color);">
                <td style="padding: 0.75rem; font-weight: 600; color: #10b981;">2. UI/UX & Prototipo</td>
                <td style="padding: 0.75rem;"><strong>Google Stitch + shadcn/ui</strong></td>
                <td style="padding: 0.75rem;">Wireframes con IA, componentes accesibles Radix UI y tokens de diseño Tailwind.</td>
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

      <div class="card">
        <div class="card-header">
          <h3 class="card-title">🧪 Ejemplo de Pipeline Automatizado en GitHub Actions</h3>
        </div>
        <div class="code-container">
          <div class="code-header">
            <span>.github/workflows/ci.yml</span>
            <button class="btn-copy" onclick="window.App.copyCode('github-ci-output')">📋 Copiar Workflow</button>
          </div>
          <pre class="code-content" id="github-ci-output">name: CI/CD Pipeline
on: [push, pull_request]

jobs:
  validate-and-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Instalar dependencias
        run: npm ci

      - name: Análisis estático (Linter)
        run: npm run lint

      - name: Pruebas Unitarias (Vitest)
        run: npm test -- --run

      - name: Pruebas E2E (Playwright)
        env:
          VITE_SUPABASE_URL: \${{ secrets.VITE_SUPABASE_URL }}
          VITE_SUPABASE_ANON_KEY: \${{ secrets.VITE_SUPABASE_ANON_KEY }}
        run: |
          npx playwright install --with-deps
          npm run test:e2e

      - name: Compilación de Producción
        run: npm run build</pre>
        </div>
      </div>
    `
  },
  {
    id: "escalabilidad-modular",
    title: "8. Arquitectura Modular, Patrones de Diseño y Escalabilidad",
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

      <div class="card">
        <div class="card-header">
          <h3 class="card-title">🐞 Protocolo Quirúrgico de Corrección de Bugs con IA</h3>
        </div>
        <ol style="margin-left: 1.25rem; line-height: 1.8; color: var(--text-secondary); font-size: 0.9rem;">
          <li><strong>Aislar la capa:</strong> Determina si el fallo es de renderizado (UI), de estado (Hook) o de consulta SQL / RLS (Service/Supabase).</li>
          <li><strong>Test que falla (Rojo):</strong> Escribe un test unitario en Vitest o E2E en Playwright que reproduzca exactamente el error.</li>
          <li><strong>Prompt Quirúrgico:</strong> Pasa a la IA solo la función del servicio o hook afectada, sin pedirle reescribir todo el archivo.</li>
          <li><strong>Test en Verde:</strong> Aplica el parche y corre <code>npm test</code> para verificar que el bug se resolvió sin generar regresiones en otros módulos.</li>
        </ol>
      </div>

      <div class="card">
        <div class="card-header">
          <h3 class="card-title">🐘 Escalabilidad de Base de Datos en Supabase</h3>
        </div>
        <ul style="margin-left: 1.25rem; line-height: 1.8; color: var(--text-secondary); font-size: 0.9rem;">
          <li><strong>Índices B-Tree:</strong> Crea índices en llaves foráneas (<code>CREATE INDEX idx_tasks_project_id ON tasks(project_id);</code>).</li>
          <li><strong>Migraciones Versionadas:</strong> Usa <code>npx supabase migration new nombre</code> en lugar de editar tablas manualmente en producción.</li>
          <li><strong>Funciones RPC:</strong> Si una consulta requiere múltiples JOINs o cálculos pesados, crea una función PL/pgSQL en Supabase para no saturar la CPU del cliente.</li>
        </ul>
      </div>
    `
  },
  {
    id: "evaluacion",
    title: "9. Laboratorio de Ejercicios y Evaluación",
    tag: "Evaluación & XP",
    icon: "🎯",
    desc: "Demuestra tus conocimientos en encadenamiento de Gemas, prototipado en Stitch, seguridad RLS y conexión a Supabase.",
    content: `
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">🧪 Desafíos y Quizzes Interactivos</h3>
          <span class="xp-badge" id="quiz-score-badge">0 / 50 XP</span>
        </div>
        <p>Responde a las siguientes preguntas técnicas para poner a prueba tu dominio del desarrollo guiado por IA:</p>

        <div class="quiz-container" id="quiz-list" style="margin-top: 1.25rem;"></div>
      </div>
    `
  }
];
