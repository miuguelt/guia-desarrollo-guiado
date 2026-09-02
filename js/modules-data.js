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
            <li><strong>💎 Gema 2 (Arquitecto Supabase):</strong> Recibe <code>02_PRD</code> (reglas de negocio) y <code>04_TRD</code> (ERD) en 'Conocimientos' y produce <code>05_ESQUEMA_SUPABASE_COMPLETO.sql</code> con RLS 100%, triggers y 9 bloques estructurados.</li>
            <li><strong>💎 Gema 3 (Diseñador Stitch):</strong> Recibe <code>01_PLAN</code>, <code>02_PRD</code> y <code>03_USER_FLOWS</code> en 'Conocimientos' y se combina con el estilo que elijas en el <strong>Módulo 5 (Catálogo de 40 Estilos)</strong> para generar <code>06_PROMPTS_GOOGLE_STITCH.md</code> con suite multivista completa, token visual y los 4 estados de pantalla. <button onclick="window.App.switchModule('stitch-ui')" class="btn-secondary" style="padding: 2px 8px; font-size: 0.75rem; border-color: #c084fc; color: #e9d5ff; vertical-align: middle; margin-left: 6px; cursor: pointer;">🎨 Elegir Estilo en Módulo 5 ➔</button></li>
            <li><strong>💎 Gema 4 (Orquestador AI Studio):</strong> Recibe los 6 artefactos previos (Plan, PRD, User Flow, TRD, SQL y Stitch) para compilar la SPA completa en <code>07_PROMPT_MAESTRO_AISTUDIO.md</code> con trazabilidad total.</li>
          </ol>
        </div>
      </div>

      <div class="card" style="border: 1px solid rgba(56, 189, 248, 0.4); background: linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(12, 74, 110, 0.25));">
        <div class="card-header">
          <h3 class="card-title" style="color: #38bdf8;">🎯 Destino Final: ¿Qué Documento va a Cada Herramienta?</h3>
        </div>
        <p style="color: var(--text-secondary); margin-bottom: 1.25rem;">
          Una duda habitual del aprendiz es: <em>"¿Dónde subo exactamente cada archivo una vez generados por las Gemas?"</em> Recuerda: los documentos <code>01</code> a <code>04</code> son la especificación (SSoT), mientras que los documentos <code>05</code>, <code>06</code> y <code>07</code> son los que se ejecutan en las herramientas reales:
        </p>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem;">
          <!-- Card Stitch -->
          <div style="background: rgba(59, 7, 100, 0.35); border: 1px solid #c084fc; border-radius: 8px; padding: 1.25rem;">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem;">
              <span style="font-size: 1.5rem;">🎨</span>
              <h4 style="color: #e9d5ff; margin: 0; font-size: 1.1rem;">Google Stitch</h4>
            </div>
            <p style="font-size: 0.82rem; color: #a855f7; font-weight: 600; margin-bottom: 0.5rem;">stitch.withgoogle.com</p>
            <div style="background: rgba(0,0,0,0.3); border-radius: 6px; padding: 0.6rem; margin-bottom: 0.75rem;">
              <span style="font-size: 0.75rem; color: var(--text-muted); display: block;">📄 DOCUMENTO EXACTO:</span>
              <strong style="color: #c084fc; font-size: 0.9rem;">06_PROMPTS_GOOGLE_STITCH.md</strong>
            </div>
            <p style="font-size: 0.85rem; color: #cbd5e1; line-height: 1.5; margin-bottom: 0.75rem;">
              <strong>¿Cómo se usa?</strong> Stitch <u>no tiene botón para subir archivos</u>. Abres el archivo, copias el <strong>Prompt 1</strong> (Auth) y lo pegas. Luego haces clic en <strong>'+ Add Screen'</strong> y pegas el <strong>Prompt 2</strong> (Dashboard). Repites sucesivamente para cada pantalla.
            </p>
            <div style="font-size: 0.78rem; color: #fca5a5; background: rgba(239, 68, 68, 0.15); padding: 0.5rem; border-radius: 4px; border-left: 3px solid #ef4444;">
              ❌ <strong>NO subas:</strong> scripts SQL, el TRD ni el PRD completo. Stitch solo procesa prompts de diseño visual.
            </div>
          </div>

          <!-- Card Supabase -->
          <div style="background: rgba(20, 83, 45, 0.35); border: 1px solid #4ade80; border-radius: 8px; padding: 1.25rem;">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem;">
              <span style="font-size: 1.5rem;">🐘</span>
              <h4 style="color: #bbf7d0; margin: 0; font-size: 1.1rem;">Supabase</h4>
            </div>
            <p style="font-size: 0.82rem; color: #22c55e; font-weight: 600; margin-bottom: 0.5rem;">supabase.com/dashboard</p>
            <div style="background: rgba(0,0,0,0.3); border-radius: 6px; padding: 0.6rem; margin-bottom: 0.75rem;">
              <span style="font-size: 0.75rem; color: var(--text-muted); display: block;">📄 DOCUMENTO EXACTO:</span>
              <strong style="color: #4ade80; font-size: 0.9rem;">05_ESQUEMA_SUPABASE_COMPLETO.sql</strong>
            </div>
            <p style="font-size: 0.85rem; color: #cbd5e1; line-height: 1.5; margin-bottom: 0.75rem;">
              <strong>¿Cómo se usa?</strong> Entra a tu proyecto en Supabase ➔ menú lateral <strong>SQL Editor</strong> ➔ clic en <strong>'New Query'</strong>. Copias todo el contenido del archivo SQL, lo pegas en el editor y presionas <strong>'Run'</strong>.
            </p>
            <div style="font-size: 0.78rem; color: #fca5a5; background: rgba(239, 68, 68, 0.15); padding: 0.5rem; border-radius: 4px; border-left: 3px solid #ef4444;">
              ❌ <strong>NO pegues:</strong> archivos Markdown (.md), código React ni prompts de Stitch. Supabase solo ejecuta SQL PostgreSQL.
            </div>
          </div>

          <!-- Card AI Studio -->
          <div style="background: rgba(12, 74, 110, 0.35); border: 1px solid #38bdf8; border-radius: 8px; padding: 1.25rem;">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem;">
              <span style="font-size: 1.5rem;">⚡</span>
              <h4 style="color: #bae6fd; margin: 0; font-size: 1.1rem;">Google AI Studio</h4>
            </div>
            <p style="font-size: 0.82rem; color: #0ea5e9; font-weight: 600; margin-bottom: 0.5rem;">aistudio.google.com/apps</p>
            <div style="background: rgba(0,0,0,0.3); border-radius: 6px; padding: 0.6rem; margin-bottom: 0.75rem;">
              <span style="font-size: 0.75rem; color: var(--text-muted); display: block;">📄 DOCUMENTO EXACTO:</span>
              <strong style="color: #38bdf8; font-size: 0.9rem;">07_PROMPT_MAESTRO_AISTUDIO.md</strong>
            </div>
            <p style="font-size: 0.85rem; color: #cbd5e1; line-height: 1.5; margin-bottom: 0.75rem;">
              <strong>¿Cómo se usa?</strong> Abre el archivo en tu editor, reemplaza <code>[TU_SUPABASE_URL]</code> y <code>[TU_SUPABASE_ANON_KEY]</code> con tus credenciales reales de Supabase. Entra a AI Studio, crea una nueva App y pega el prompt completo en la caja de instrucciones.
            </p>
            <div style="font-size: 0.78rem; color: #fca5a5; background: rgba(239, 68, 68, 0.15); padding: 0.5rem; border-radius: 4px; border-left: 3px solid #ef4444;">
              ❌ <strong>NO compiles:</strong> sin haber ejecutado primero el script SQL en Supabase ni dejes los placeholders de credenciales sin rellenar.
            </div>
          </div>
        </div>
      </div>
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

      <!-- ========================================================================= -->
      <!-- 💎 CONSOLA MAESTRA DE ACTIVACIÓN: GEMA 3 ➔ CATÁLOGO 40 ESTILOS ➔ STITCH -->
      <!-- ========================================================================= -->
      <div class="card" id="gema3-activation-card" style="border: 2px solid #818cf8; background: linear-gradient(135deg, rgba(30, 27, 75, 0.95), rgba(15, 23, 42, 0.95)); box-shadow: 0 4px 20px rgba(99, 102, 241, 0.2);">
        <div class="card-header" style="flex-wrap: wrap; gap: 0.5rem; justify-content: space-between; align-items: center;">
          <div style="display: flex; align-items: center; gap: 0.6rem;">
            <span style="font-size: 1.6rem;">💎</span>
            <div>
              <h3 class="card-title" style="color: #c084fc; margin: 0;">Consola de Activación: Gema 3 ➔ Catálogo ➔ Google Stitch</h3>
              <span style="font-size: 0.8rem; color: #a5b4fc;">La Vía Oficial para tu Proyecto Formativo Completo</span>
            </div>
          </div>
          <span class="brand-badge" style="background: rgba(129, 140, 248, 0.2); color: #a5b4fc; border: 1px solid #818cf8;">Paso 3 del Pipeline SDLC</span>
        </div>

        <p style="color: #cbd5e1; font-size: 0.9rem; line-height: 1.5; margin: 0.75rem 0 1rem 0;">
          Esta consola es el <strong>puente operativo</strong> entre la <strong>Gema 3 en Google Gemini</strong> y el <strong>Catálogo de 40 Estilos</strong>. Selecciona aquí o en cualquier tarjeta del catálogo abajo tu estilo visual favorito; la consola preparará el <strong>mensaje de disparo exacto</strong> para que la Gema 3 redacte tu archivo canónico <code style="color: #38bdf8;">06_PROMPTS_GOOGLE_STITCH.md</code> con la suite completa de 7 pantallas.
        </p>

        <!-- Selector Rápido de Estilo y Proyecto -->
        <div class="form-grid" style="margin-top: 0.5rem;">
          <div class="form-group">
            <label class="form-label" style="color: #a5b4fc; font-weight: 600;">Nombre de tu Aplicación / Proyecto Real:</label>
            <input type="text" id="gema3-app-name" class="form-control" value="EduPulse SaaS" oninput="window.Generators.updateGema3TriggerPrompt()" placeholder="Ej. VetCare, FinTrack, EducaPro..." />
          </div>
          <div class="form-group">
            <label class="form-label" style="color: #a5b4fc; font-weight: 600;">Estilo Visual Elegido (De los 40 Estilos):</label>
            <select id="gema3-style-select" class="form-control" onchange="window.Generators.updateGema3TriggerPrompt()">
              <!-- Inyectado dinámicamente -->
            </select>
          </div>
        </div>

        <!-- Ficha Resumen del Estilo Activo -->
        <div style="margin-top: 0.75rem; padding: 0.85rem 1rem; background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(129, 140, 248, 0.3); border-radius: 8px;">
          <div id="gema3-selected-style-badge" style="color: #e0e7ff; font-size: 0.95rem; font-weight: 600; margin-bottom: 0.35rem;">
            <!-- Badge inyectado dinámicamente -->
          </div>
          <div id="gema3-selected-style-desc" style="color: #94a3b8; font-size: 0.82rem; line-height: 1.4;">
            <!-- Descripción inyectada dinámicamente -->
          </div>
          <!-- Vista Previa Visual del Estilo Seleccionado -->
          <div id="gema3-selected-style-preview" style="margin-top: 0.75rem;">
            <!-- Inyectado dinámicamente por updateGema3TriggerPrompt -->
          </div>
        </div>

        <!-- Bloque de Código del Mensaje para Gema 3 -->
        <div class="code-container" style="margin-top: 1rem;">
          <div class="code-header" style="background: #1e1b4b; border-color: rgba(129, 140, 248, 0.3);">
            <span style="color: #c084fc; font-weight: 600;">📨 MENSAJE_DE_ACTIVACION_PARA_GEMA_3.txt</span>
            <button class="btn-copy" onclick="window.App.copyCode('gema3-trigger-output')" style="background: #4f46e5; border-color: #6366f1; color: white;">📋 Copiar Mensaje para Gema 3</button>
          </div>
          <pre class="code-content" id="gema3-trigger-output" style="max-height: 320px; font-size: 0.84rem;"></pre>
        </div>

        <!-- Circuito de 4 Pasos para el Aprendiz -->
        <div style="margin-top: 1rem; padding: 1rem; background: rgba(6, 78, 59, 0.2); border: 1px solid #10b981; border-radius: 8px;">
          <h4 style="color: #34d399; margin: 0 0 0.5rem 0; font-size: 0.95rem;">👣 Circuito de Acción para el Aprendiz (Sin Saltos ni Pérdida de Contexto):</h4>
          <ol style="margin: 0; padding-left: 1.25rem; font-size: 0.85rem; color: #cbd5e1; line-height: 1.7;">
            <li><strong>Paso 1:</strong> Haz clic en el botón morado <strong>"Copiar Mensaje para Gema 3"</strong> arriba (o haz clic en <em>"💎 Activar en Gema 3"</em> en cualquier tarjeta del catálogo abajo).</li>
            <li><strong>Paso 2:</strong> Abre tu <strong>Gema 3 en Gemini</strong> (donde ya cargaste <code>01_PLAN</code>, <code>02_PRD</code> y <code>03_USER_FLOWS</code>). Pega este mensaje y presiona Enviar. La Gema 3 te entregará el archivo <code>06_PROMPTS_GOOGLE_STITCH.md</code>. Guárdalo en tu carpeta local <code>docs/</code>.</li>
            <li><strong>Paso 3:</strong> Entra a <a href="https://stitch.withgoogle.com" target="_blank" style="color: #34d399; font-weight: 600; text-decoration: underline;">stitch.withgoogle.com</a> ➔ Haz clic en <em>'New Project'</em> ➔ Pega el <strong>Prompt 1</strong> (Auth) ➔ Presiona Enter ➔ Haz clic en <strong>'+ Add Screen'</strong> ➔ Pega el <strong>Prompt 2</strong> (Dashboard) y repite sucesivamente con las 7 pantallas.</li>
            <li><strong>Paso 4:</strong> Sube <code>06_PROMPTS_GOOGLE_STITCH.md</code> a la <strong>Gema 4</strong> para que Google AI Studio compile tu aplicación React conectada a Supabase con esta misma estética visual.</li>
          </ol>
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

      <!-- ========================================================================= -->
      <!-- 🧪 SANDBOX RÁPIDO: GENERADOR DE PANTALLA AISLADA EN NAVEGADOR (OPCIONAL) -->
      <!-- ========================================================================= -->
      <div class="card" id="stitch-generator-card" style="border-left: 4px solid #f59e0b; background: rgba(245, 158, 11, 0.05);">
        <div class="card-header" style="flex-wrap: wrap; gap: 0.5rem; justify-content: space-between; align-items: center;">
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <span style="font-size: 1.4rem;">🧪</span>
            <div>
              <h3 class="card-title" style="color: #fbbf24; margin: 0;">Sandbox de Pruebas: Generador de Pantalla Aislada</h3>
              <span style="font-size: 0.8rem; color: #fde68a;">Laboratorio Rápido en Navegador (Sin pasar por Gemini)</span>
            </div>
          </div>
          <span class="badge" style="background: rgba(245, 158, 11, 0.2); color: #fbbf24; border: 1px solid #f59e0b;">Laboratorio Rápido</span>
        </div>
        <p style="color: var(--text-muted); font-size: 0.88rem; margin: 0.5rem 0 1rem 0;">
          💡 <strong>Nota Didáctica:</strong> Si estás construyendo tu proyecto formativo completo, usa la <strong>Consola de Activación de Gema 3</strong> en la parte superior. Este formulario inferior es un entorno de pruebas rápido para generar un prompt individual y probar cómo responde Stitch ante una vista particular:
        </p>

        <div class="form-grid">
          <div class="form-group">
            <label class="form-label">Nombre de Prueba:</label>
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
            <label class="form-label">Estilo Visual Frontend:</label>
            <select id="stitch-custom-style" class="form-control" onchange="window.Generators.updateCustomStitchPrompt()">
              <!-- Inyectado dinámicamente -->
            </select>
          </div>
        </div>

        <div id="stitch-custom-style-preview" style="margin-top: 1rem;"></div>

        <div class="code-container" style="margin-top: 1rem;">
          <div class="code-header">
            <span>PROMPT_SANDBOX_INDIVIDUAL.md</span>
            <button class="btn-copy" onclick="window.App.copyCode('stitch-custom-output')">📋 Copiar Prompt Individual</button>
          </div>
          <pre class="code-content" id="stitch-custom-output" style="max-height: 280px;"></pre>
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
    desc: "Aprende el método exacto para trasladar la suite visual de Stitch a AI Studio Apps con enrutamiento reactivo y Supabase.",
    content: `
      <!-- Introducción y Diagrama Conceptual -->
      <div class="card" style="background: linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(16, 185, 129, 0.1)); border-color: #10b981;">
        <div class="card-header">
          <h3 class="card-title">🌉 El Puente Crítico: Del Prototipo Visual al Software Funcional</h3>
        </div>
        <p style="color: var(--text-secondary); line-height: 1.6;">
          Google Stitch (<code>stitch.withgoogle.com</code>) genera prototipos visuales impresionantes con Tailwind CSS, pero son pantallas estáticas y desconectadas. 
          El rol de esta fase es <strong>trasladar la suite completa de pantallas, su sistema de diseño y sus tokens visuales a Google AI Studio Apps (<code>aistudio.google.com/apps</code>)</strong>, dotando a la interfaz de enrutamiento SPA reactivo, estado global y persistencia real en PostgreSQL con Supabase.
        </p>
      </div>

      <!-- Paso a Paso Detallado: Los 3 Momentos de la Importación -->
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">📥 Metodología de Trasvase en 3 Momentos</h3>
        </div>
        
        <div style="display: flex; flex-direction: column; gap: 1.25rem; margin-top: 1rem;">
          <div style="padding: 1.25rem; background: rgba(30, 41, 59, 0.7); border-radius: 10px; border-left: 4px solid #10b981; border: 1px solid var(--border-color);">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem;">
              <h4 style="color: #34d399; font-size: 1.05rem; margin: 0;">1️⃣ En Google Stitch: Diseña la Suite Multi-Pantalla Completa</h4>
              <span class="badge" style="background: rgba(16, 185, 129, 0.2); color: #34d399; border: 1px solid #10b981;">stitch.withgoogle.com</span>
            </div>
            <p style="color: var(--text-secondary); font-size: 0.92rem; margin-bottom: 0.75rem;">
              No diseñes únicamente el Dashboard. Utiliza el botón <strong>"+ Add Screen"</strong> en Stitch para generar la suite canónica de 6 pantallas de tu aplicación:
            </p>
            <ul style="color: var(--text-secondary); font-size: 0.9rem; margin-left: 1.25rem; line-height: 1.6;">
              <li><strong>SCR-01 (Auth):</strong> Login y Registro con inputs estilizados.</li>
              <li><strong>SCR-02 (Dashboard):</strong> Métricas clave (KPIs), gráficas y accesos directos.</li>
              <li><strong>SCR-03 (Explorador):</strong> Tabla de datos con filtros y vista conmutable a tablero Kanban.</li>
              <li><strong>SCR-04 (Detalle 360):</strong> Ficha profunda del registro seleccionado con pestañas de auditoría.</li>
              <li><strong>SCR-05 (Wizard Creación):</strong> Formulario guiado paso a paso con validaciones visuales.</li>
              <li><strong>SCR-06 (Configuración):</strong> Ajustes de perfil, avatar y preferencias de usuario.</li>
            </ul>
          </div>

          <div style="padding: 1.25rem; background: rgba(30, 41, 59, 0.7); border-radius: 10px; border-left: 4px solid #38bdf8; border: 1px solid var(--border-color);">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem;">
              <h4 style="color: #38bdf8; font-size: 1.05rem; margin: 0;">2️⃣ Extracción Quirúrgica: Tokens de Diseño vs. Código Crudo</h4>
              <span class="badge" style="background: rgba(56, 189, 248, 0.2); color: #38bdf8; border: 1px solid #38bdf8;">Inspección</span>
            </div>
            <p style="color: var(--text-secondary); font-size: 0.92rem; line-height: 1.5;">
              <strong>⚠️ Error común del aprendiz:</strong> Copiar miles de líneas de HTML estático y pegarlo en AI Studio genera desorden y rompe la lógica reactiva.<br>
              <strong>✅ La técnica correcta:</strong> Haz clic en <em>"View Code" / "Inspect"</em> en Stitch y extrae únicamente los <strong>tokens visuales compartidos</strong>:
            </p>
            <div style="margin-top: 0.5rem; display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.5rem;">
              <div style="background: rgba(15, 23, 42, 0.6); padding: 0.5rem 0.75rem; border-radius: 6px; font-size: 0.85rem; border: 1px solid rgba(255,255,255,0.05);">
                <strong style="color: #f8fafc;">🎨 Paleta:</strong> Fondos (<code>#0f172a</code>), Cards (<code>#1e293b</code>), Acento (<code>#6366f1</code>).
              </div>
              <div style="background: rgba(15, 23, 42, 0.6); padding: 0.5rem 0.75rem; border-radius: 6px; font-size: 0.85rem; border: 1px solid rgba(255,255,255,0.05);">
                <strong style="color: #f8fafc;">📐 Bordes:</strong> <code>rounded-2xl</code>, <code>border-slate-800</code>.
              </div>
              <div style="background: rgba(15, 23, 42, 0.6); padding: 0.5rem 0.75rem; border-radius: 6px; font-size: 0.85rem; border: 1px solid rgba(255,255,255,0.05);">
                <strong style="color: #f8fafc;">✨ Efectos:</strong> <code>backdrop-blur-xl</code>, sombras <code>shadow-2xl</code>.
              </div>
            </div>
          </div>

          <div style="padding: 1.25rem; background: rgba(30, 41, 59, 0.7); border-radius: 10px; border-left: 4px solid #818cf8; border: 1px solid var(--border-color);">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem;">
              <h4 style="color: #818cf8; font-size: 1.05rem; margin: 0;">3️⃣ En AI Studio: Enrutamiento SPA por Máquina de Estados</h4>
              <span class="badge" style="background: rgba(129, 140, 248, 0.2); color: #818cf8; border: 1px solid #818cf8;">aistudio.google.com/apps</span>
            </div>
            <p style="color: var(--text-secondary); font-size: 0.92rem; line-height: 1.5;">
              En Google AI Studio Apps, ordenamos ensamblar la app utilizando un enrutador interno por variable reactiva <code>currentView</code> en <code>App.jsx</code>. Esto garantiza que la navegación entre las 6 pantallas sea instantánea, sin recargar el navegador ni depender de paquetes externos frágiles:
            </p>
            <div style="background: #0d1117; padding: 0.75rem 1rem; border-radius: 6px; font-family: var(--font-mono); font-size: 0.85rem; color: #38bdf8; margin-top: 0.5rem; overflow-x: auto;">
              const [currentView, setCurrentView] = useState('dashboard'); // 'auth' | 'dashboard' | 'items-list' | 'item-detail' | 'item-create' | 'settings'<br>
              const [selectedItemId, setSelectedItemId] = useState(null);
            </div>
          </div>
        </div>
      </div>

      <!-- Sandbox Auth Alert -->
      <div class="card" style="background: rgba(245, 158, 11, 0.1); border-left: 4px solid #f59e0b; border: 1px solid rgba(245, 158, 11, 0.3);">
        <div class="card-header" style="margin-bottom: 0.5rem;">
          <h3 class="card-title" style="color: #fbbf24; font-size: 1.05rem;">⚠️ Paso Previo Crítico: Configurar Auth en Supabase Sandbox</h3>
        </div>
        <p style="color: var(--text-secondary); font-size: 0.92rem; line-height: 1.5;">
          Antes de probar el login/registro en Google AI Studio Apps, ve a tu panel de Supabase:
        </p>
        <ol style="color: var(--text-secondary); font-size: 0.9rem; margin-left: 1.5rem; line-height: 1.6; margin-top: 0.5rem;">
          <li>Navega a <strong>Authentication</strong> ➔ <strong>Providers</strong> ➔ <strong>Email</strong>.</li>
          <li>Desactiva la casilla <strong>"Confirm email"</strong> (ponla en <code>OFF</code>) y haz clic en <strong>Save</strong>.</li>
        </ol>
        <p style="color: #fbbf24; font-size: 0.85rem; margin-top: 0.5rem; font-weight: 500;">
          💡 ¿Por qué? Por defecto, Supabase exige verificar el correo. Si no lo desactivas, los usuarios creados en pruebas quedarán bloqueados sin poder entrar a la aplicación.
        </p>
      </div>

      <!-- Prompt Maestro de Ensamble con Botón Copiar -->
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">📜 Prompt Maestro de Ensamble Multi-Vista para AI Studio</h3>
        </div>
        <p>Copia y adapta este prompt para ordenar a Google AI Studio que ensamble las pantallas de Stitch con React y Supabase:</p>

        <div class="code-container" style="margin-top: 1rem;">
          <div class="code-header">
            <span>PROMPT_ENSAMBLE_AISTUDIO.md</span>
            <button class="btn-copy" onclick="window.App.copyCode('prompt-ensamble-output')">📋 Copiar Prompt de Ensamble</button>
          </div>
          <pre class="code-content" id="prompt-ensamble-output" style="max-height: 380px;"># OBJETIVO DEL PROYECTO
Construye la aplicación web SPA profesional "[NOMBRE_PROYECTO]" en React 18/19 con Tailwind CSS y Lucide Icons, conectada a PostgreSQL en Supabase y con navegación multi-vista entre todas las pantallas de Stitch.

# 1. DISEÑO VISUAL Y COMPONENTES (SUITE MULTIPANTALLA DE STITCH)
Replica con fidelidad el sistema de diseño visual generado en Google Stitch:
- Estilo: Bento Grid + Glassmorphism / Dark Mode.
- Paleta: Fondo ('#0f172a'), Cards ('#1e293b'), Bordes ('#334155'), Acento ('#6366f1').
- Tipografía: Inter (sans) y JetBrains Mono (código y números).

# 2. ENRUTAMIENTO MULTI-VISTA (ROUTER SPA EN REACT)
Implementa en App.jsx la máquina de estados reactiva 'currentView':
- 'auth': Login y Registro (renderizar si no hay sesión en Supabase Auth).
- 'dashboard': Métricas KPI, widgets y accesos rápidos.
- 'items-list': Explorador con tabla interactiva, filtros, búsqueda y switch a Kanban.
- 'item-detail': Ficha técnica profunda (selectedItemId) con tabs y acciones.
- 'item-create': Formulario Wizard guiado por pasos.
- 'settings': Configuración del perfil de usuario.

# 3. LAYOUT PERSISTENTE (SIDEBAR Y HEADER)
- Sidebar: Logo interactivo, botones con indicador de vista activa, perfil y LogOut.
- Header: Breadcrumbs dinámicas (ej. Inicio > Registros > Detalle), Ctrl+K y botón "+ Nuevo".

# 4. CONEXIÓN A SUPABASE
Inicializa el cliente de Supabase con persistSession: true, autoRefreshToken: true.
- supabase.auth.onAuthStateChange para gestionar la sesión en tiempo real.
- Todas las inserciones deben asignar owner_id: user.id (auth.uid()).

# 5. EXPERIENCIA DE USUARIO (LOS 4 ESTADOS DE UI)
- Skeleton Loaders animados durante peticiones asíncronas.
- Toasts flotantes para confirmar creación/edición/eliminación.
- Empty States ilustrados cuando no existan registros.
- Alertas de error con botón 'Reintentar' si falla la red o RLS.
- Modal de confirmación destructiva antes de eliminar.</pre>
        </div>
      </div>

      <!-- Tabla de Equivalencias de Tokens de Stitch a Tailwind -->
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">🎨 Tabla de Traducción: Tokens de Stitch a Clases Tailwind</h3>
        </div>
        <p>Asegura la fidelidad estética al transferir cualquiera de los estilos del catálogo de Stitch a tu código en AI Studio:</p>

        <div style="overflow-x: auto; margin-top: 1rem;">
          <table style="width: 100%; border-collapse: collapse; font-size: 0.88rem; text-align: left;">
            <thead>
              <tr style="background: rgba(15, 23, 42, 0.9); border-bottom: 2px solid var(--border-color);">
                <th style="padding: 0.75rem 1rem; color: #38bdf8;">Estilo en Stitch</th>
                <th style="padding: 0.75rem 1rem; color: #34d399;">Clases Clave Tailwind CSS</th>
                <th style="padding: 0.75rem 1rem; color: #f8fafc;">Efecto Visual Resultante</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid rgba(51, 65, 85, 0.4);">
                <td style="padding: 0.75rem 1rem; font-weight: 600; color: #818cf8;">Glasmorfismo</td>
                <td style="padding: 0.75rem 1rem; font-family: var(--font-mono); font-size: 0.8rem; color: #94a3b8;"><code>bg-slate-900/60 backdrop-blur-xl border border-white/10 shadow-2xl rounded-2xl</code></td>
                <td style="padding: 0.75rem 1rem; color: var(--text-secondary);">Vidrio esmerilado translúcido con reflejos sutiles.</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(51, 65, 85, 0.4);">
                <td style="padding: 0.75rem 1rem; font-weight: 600; color: #818cf8;">Bento Grid</td>
                <td style="padding: 0.75rem 1rem; font-family: var(--font-mono); font-size: 0.8rem; color: #94a3b8;"><code>grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-auto rounded-2xl</code></td>
                <td style="padding: 0.75rem 1rem; color: var(--text-secondary);">Rejilla modular asimétrica de alto impacto.</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(51, 65, 85, 0.4);">
                <td style="padding: 0.75rem 1rem; font-weight: 600; color: #818cf8;">Neo-Brutalism</td>
                <td style="padding: 0.75rem 1rem; font-family: var(--font-mono); font-size: 0.8rem; color: #94a3b8;"><code>border-[3px] border-black shadow-[4px_4px_0px_#000] font-black rounded-lg bg-yellow-300</code></td>
                <td style="padding: 0.75rem 1rem; color: var(--text-secondary);">Bordes negros gruesos y sombras sólidas sin difuminar.</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(51, 65, 85, 0.4);">
                <td style="padding: 0.75rem 1rem; font-weight: 600; color: #818cf8;">Terminal / Hacker</td>
                <td style="padding: 0.75rem 1rem; font-family: var(--font-mono); font-size: 0.8rem; color: #94a3b8;"><code>bg-[#0d1117] text-emerald-400 font-mono border border-emerald-500/30 rounded-md</code></td>
                <td style="padding: 0.75rem 1rem; color: var(--text-secondary);">Consola CLI oscura con texto verde fósforo monocromático.</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(51, 65, 85, 0.4);">
                <td style="padding: 0.75rem 1rem; font-weight: 600; color: #818cf8;">Cyberpunk</td>
                <td style="padding: 0.75rem 1rem; font-family: var(--font-mono); font-size: 0.8rem; color: #94a3b8;"><code>bg-[#0a0a0f] border-cyan-500/60 shadow-[0_0_20px_rgba(6,182,212,0.3)] text-cyan-300</code></td>
                <td style="padding: 0.75rem 1rem; color: var(--text-secondary);">Fondo negro azabache con resplandor neón cian y magenta.</td>
              </tr>
              <tr>
                <td style="padding: 0.75rem 1rem; font-weight: 600; color: #818cf8;">Claymorphism</td>
                <td style="padding: 0.75rem 1rem; font-family: var(--font-mono); font-size: 0.8rem; color: #94a3b8;"><code>rounded-3xl bg-indigo-100 shadow-[inset_0_4px_8px_rgba(255,255,255,0.6),0_12px_24px_rgba(99,102,241,0.2)]</code></td>
                <td style="padding: 0.75rem 1rem; color: var(--text-secondary);">Relieve 3D suave tipo plastilina/arcilla inflada.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Protocolo de Parches Quirúrgicos -->
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">🩹 Protocolo de Parches Quirúrgicos (Evita el Context Rot)</h3>
        </div>
        <p style="color: var(--text-secondary); line-height: 1.6;">
          Cuando necesites ajustar un detalle en AI Studio, <strong>NUNCA pidas "reescribe la app" o "vuelve a hacer todo"</strong>. Eso destruye el contexto acumulado y genera inconsistencias. Aplica la fórmula de prompt quirúrgico:
        </p>
        
        <div style="display: flex; flex-direction: column; gap: 0.75rem; margin-top: 1rem;">
          <div style="background: rgba(15, 23, 42, 0.8); border: 1px solid var(--border-color); border-radius: 8px; padding: 1rem;">
            <span style="color: #38bdf8; font-weight: 600; font-size: 0.9rem;">🎯 Para ajustar diseño visual:</span>
            <p style="color: var(--text-secondary); font-size: 0.88rem; font-family: var(--font-mono); margin-top: 0.35rem;">
              "En el componente <code>KpiGrid</code>, ajusta las tarjetas para que tengan fondo <code>#1e293b</code>, borde <code>#334155</code> y efecto <code>backdrop-blur-sm</code> manteniendo intactas las props de datos."
            </p>
          </div>
          <div style="background: rgba(15, 23, 42, 0.8); border: 1px solid var(--border-color); border-radius: 8px; padding: 1rem;">
            <span style="color: #34d399; font-weight: 600; font-size: 0.9rem;">🔒 Para resolver errores de RLS o inserción:</span>
            <p style="color: var(--text-secondary); font-size: 0.88rem; font-family: var(--font-mono); margin-top: 0.35rem;">
              "Revisa la función <code>handleCreateProject</code>: asegúrate de obtener el <code>user.id</code> con <code>supabase.auth.getUser()</code> y asignarlo explícitamente a <code>owner_id</code> antes del <code>insert</code>."
            </p>
          </div>
          <div style="background: rgba(15, 23, 42, 0.8); border: 1px solid var(--border-color); border-radius: 8px; padding: 1rem;">
            <span style="color: #fbbf24; font-weight: 600; font-size: 0.9rem;">⏳ Para agregar Skeleton Loaders:</span>
            <p style="color: var(--text-secondary); font-size: 0.88rem; font-family: var(--font-mono); margin-top: 0.35rem;">
              "En la vista de <code>ProjectsList</code>, muestra un <code>SkeletonCard</code> de 3 filas animadas mientras <code>loading === true</code> antes de renderizar la tabla."
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
    id: "evaluador-canvas",
    title: "10. Herramienta en Canvas para Evaluación Integral de Documentación SDLC",
    tag: "Auditoría & Calidad",
    icon: "🎛️",
    desc: "Crea una herramienta interactiva en Canvas (ChatGPT/Claude/Gemini) para auditar los 7 artefactos de tu proyecto, evaluar la cobertura de las 7 fases del SDLC y detectar vacíos antes de codificar.",
    content: `
      <div class="card" style="background: linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 27, 75, 0.85)); border-color: #38bdf8;">
        <div class="card-header">
          <h3 class="card-title">🎛️ Auditoría Pre-Desarrollo con Canvas</h3>
          <span class="xp-badge" style="background: #0284c7;">Control de Calidad 360°</span>
        </div>
        <p>
          Antes de pedirle a Google AI Studio o Cursor que compile tu aplicación, debes asegurarte de que tu documentación no tenga vacíos.
          En este módulo aprenderás a pedirle a tu chat de IA en modo <strong>Canvas / Artifacts</strong> que construya una <strong>aplicación interactiva de auditoría en vivo</strong>.
        </p>
      </div>

      <div class="card">
        <div class="card-header">
          <h3 class="card-title">📊 Rúbrica de Auditoría: Las 7 Fases del SDLC</h3>
        </div>
        <p>La herramienta en Canvas evalúa tus 7 artefactos contra las 7 fases del ciclo de vida de software:</p>

        <div class="pipeline-grid" style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); margin-top: 1rem;">
          <div class="pipeline-card">
            <span class="step-number">1. Requisitos</span>
            <h4 class="step-title">In-Scope & BDD</h4>
            <p class="step-desc">Límites estrictos de MVP y criterios de aceptación Gherkin en <code>01_PLAN</code> y <code>02_PRD</code>.</p>
          </div>
          <div class="pipeline-card">
            <span class="step-number">2. Diseño UI</span>
            <h4 class="step-title">4 Estados UI</h4>
            <p class="step-desc">Empty, Skeleton, Toast y Error en cada vista de <code>03_USER_FLOWS</code> y <code>06_STITCH</code>.</p>
          </div>
          <div class="pipeline-card">
            <span class="step-number">3. Arquitectura</span>
            <h4 class="step-title">RLS al 100%</h4>
            <p class="step-desc">UUIDs, Row Level Security estricto y triggers automáticos en <code>04_TRD</code> y <code>05_SQL</code>.</p>
          </div>
          <div class="pipeline-card">
            <span class="step-number">4. Fullstack</span>
            <h4 class="step-title">Modularidad</h4>
            <p class="step-desc">Estructura Feature-Driven y cliente Supabase singleton en <code>07_AISTUDIO</code>.</p>
          </div>
          <div class="pipeline-card">
            <span class="step-number">5. Testing</span>
            <h4 class="step-title">Playwright & QA</h4>
            <p class="step-desc">Validación E2E derivada de los escenarios Gherkin para flujos críticos.</p>
          </div>
          <div class="pipeline-card">
            <span class="step-number">6. CI/CD</span>
            <h4 class="step-title">Seguridad Secrets</h4>
            <p class="step-desc">Solo SUPABASE_ANON_KEY en cliente y pipeline en Vercel/GitHub Actions.</p>
          </div>
          <div class="pipeline-card">
            <span class="step-number">7. Operaciones</span>
            <h4 class="step-title">Observabilidad</h4>
            <p class="step-desc">Monitoreo de errores con Sentry y prevención activa de God Files.</p>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <h3 class="card-title">⚡ Prompt Maestro para Generar la Herramienta en Canvas</h3>
          <button class="btn-primary" onclick="navigator.clipboard.writeText(document.getElementById('canvas-prompt-text').innerText); window.App.showToast('¡Prompt de Canvas copiado al portapapeles!', 'success');">
            📋 Copiar Prompt Completo
          </button>
        </div>
        <p>Copia el siguiente prompt y pégalo en tu chat con <strong>ChatGPT Canvas</strong>, <strong>Claude Artifacts</strong> o <strong>Google AI Studio</strong>:</p>

        <div class="code-block" style="margin-top: 1rem; max-height: 280px; overflow-y: auto;">
          <pre id="canvas-prompt-text"><code># DIRECTIVA DE CREACIÓN: HERRAMIENTA AUDITORA INTERACTIVA SDLC EN CANVAS

Actúa como un Arquitecto de Software Principal y Auditor de Calidad SDLC. 
Crea en Canvas una aplicación web interactiva completa (Single-Page Application) en un solo bloque de código (HTML5 + Tailwind CSS CDN + JavaScript moderno Vanilla) que funcione como una Consola de Auditoría y Evaluación Integral de Documentación SDLC.

## PROPÓSITO DE LA HERRAMIENTA
La herramienta permitirá al aprendiz de software evaluar los 7 artefactos canónicos generados por la cadena de Gemas de Gemini:
1. 01_PLAN_PROYECTO.md
2. 02_PRD_PRODUCTO.md
3. 03_USER_FLOWS_UX.md
4. 04_TRD_ARQUITECTURA_TECNICA.md
5. 05_ESQUEMA_SUPABASE_COMPLETO.sql
6. 06_PROMPTS_GOOGLE_STITCH.md
7. 07_PROMPT_MAESTRO_AISTUDIO.md

## REQUERIMIENTOS FUNCIONALES DE LA INTERFAZ
1. Tacómetro de Madurez SDLC (0% a 100%) con semáforo dinámico (Crítico &lt;60%, Aceptable 60-84%, Listo &gt;=85%).
2. Selector y editor para los 7 artefactos con botón para Cargar Caso Demo.
3. Matriz visual de las 7 Fases del SDLC mostrando puntuación, aciertos (✓) y vacíos detectados (✕).
4. Alertas rojas de seguridad (ej. falta de Row Level Security RLS o claves UUID).
5. Generador de Prompts Quirúrgicos de Remediación listos para copiar y pegar en las Gemas.

Entrega el código completo, autocontenido y estilizado con Tailwind CSS (tema oscuro elegante).</code></pre>
        </div>

        <div style="margin-top: 1.25rem; display: flex; gap: 0.75rem; flex-wrap: wrap;">
          <a href="12_EVALUADOR_CALIDAD_SDLC_CANVAS.md" target="_blank" class="btn-secondary" style="text-decoration: none; display: inline-flex; align-items: center; gap: 0.5rem;">
            <span>📖 Ver Guía y Código Fuente Completo (Markdown)</span>
          </a>
        </div>
      </div>
    `
  },
  {
    id: "evaluacion",
    title: "11. Laboratorio de Ejercicios y Evaluación",
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
