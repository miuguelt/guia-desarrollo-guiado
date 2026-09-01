# 🚀 Guía Maestra: Desarrollo Guiado por IA
## Pipeline Profesional de Ingeniería de Software: Gemini Gems ➔ Google Stitch ➔ Google AI Studio ➔ Supabase

Bienvenido a la **Guía Completa de Desarrollo Guiado por IA**. Esta metodología permite transformar una simple idea de software en una **aplicación web profesional, con interfaz moderna, arquitectura limpia y base de datos relacional segura en Supabase**, utilizando la **Tetralogía Documental Canónica (Plan, PRD, User Flow y TRD)** y las herramientas de IA generativa de Google.

> **🎯 Público Objetivo:** Aprendices de desarrollo de software, estudiantes de ingeniería, emprendedores técnicos y cualquier persona que quiera construir aplicaciones web reales usando IA como copiloto estructurado.

---

## 🗺️ El Pipeline de Desarrollo en 4 Etapas

```mermaid
flowchart TD
    subgraph FASE1["1. Gemini Custom Gem (Mentor de Producto & SDLC)"]
        A["💡 Idea de Negocio del Aprendiz"] --> B["💎 Gema Gemini: Arquitecto SDLC"]
        B --> C1["🗓️ 01_PLAN_PROYECTO.md"]
        B --> C2["📋 02_PRD_PRODUCTO.md (Gherkin BDD)"]
        B --> C3["🔀 03_USER_FLOWS_UX.md (4 Estados UI)"]
        B --> C4["🏗️ 04_TRD_ARQUITECTURA_TECNICA.md"]
    end

    subgraph FASE2["2. Google Stitch (Prototipado Visual UI)"]
        C2 --> G["🎨 stitch.withgoogle.com"]
        C3 --> G
        G --> H["✨ Diseño UI con los 4 Estados (Empty, Loading, Toast, Error)"]
    end

    subgraph FASE3["3. Supabase (Backend & Base de Datos)"]
        C4 --> J["🐘 Supabase PostgreSQL"]
        J --> K["🔒 Tablas + Row Level Security (RLS) + Triggers"]
        J --> L["🔑 Supabase Auth & JWT"]
    end

    subgraph FASE4["4. Google AI Studio (Construcción Fullstack)"]
        C1 --> M["⚡ aistudio.google.com/apps"]
        H --> M
        K --> M
        C4 --> M
        M --> N["🚀 Aplicación Web Profesional Lista para Producción"]
    end

    style FASE1 fill:#1e1b4b,stroke:#818cf8,stroke-width:2px,color:#fff
    style FASE2 fill:#14532d,stroke:#4ade80,stroke-width:2px,color:#fff
    style FASE3 fill:#3b0764,stroke:#c084fc,stroke-width:2px,color:#fff
    style FASE4 fill:#0c4a6e,stroke:#38bdf8,stroke-width:2px,color:#fff
```

---

## 🏛️ La Tetralogía Documental Canónica

Antes de generar una sola línea de código, la Gema guía al aprendiz para construir estos 4 documentos:

1. **🗓️ Plan de Proyecto (`01_PLAN_PROYECTO.md`):** Alcance del MVP, qué está In-Scope vs Out-of-Scope, dependencias técnicas y cronograma de sprints.
2. **📋 PRD (`02_PRD_PRODUCTO.md`):** Perfiles de usuario (Personas), Requerimientos Funcionales (RF) con criterios de aceptación Gherkin BDD y reglas de negocio.
3. **🔀 User Flow (`03_USER_FLOWS_UX.md`):** Diagramas Mermaid de navegación y especificación obligatoria de los 4 estados de pantalla: *Empty State*, *Loading Skeleton*, *Success Toast* y *Error State*.
4. **🏗️ TRD (`04_TRD_ARQUITECTURA_TECNICA.md`):** Stack con versiones exactas, Diagrama ERD, Script SQL DDL con Row Level Security (RLS) y Requerimientos No Funcionales (RNF).

---

## 📋 Requisitos Previos

Antes de empezar, asegúrate de tener acceso a:

| Herramienta | URL | Propósito |
| :--- | :--- | :--- |
| **Google Gemini** | [gemini.google.com](https://gemini.google.com) | Crear Gemas personalizadas (Tutores IA) |
| **Google Stitch** | [stitch.withgoogle.com](https://stitch.withgoogle.com/?pli=1) | Prototipado visual de interfaces UI |
| **Google AI Studio** | [aistudio.google.com/apps](https://aistudio.google.com/apps) | Construcción de la aplicación web |
| **Supabase** | [supabase.com](https://supabase.com) | Base de datos PostgreSQL + Auth + RLS |

---

## 📚 Estructura de Documentación

### 🔗 Flujo de Gemas, Conocimientos y Directivas Agénticas
| Archivo | Descripción |
| :--- | :--- |
| [`AGENTS.md`](./AGENTS.md) | **Directiva Maestra de Desarrollo e Integración Agéntica** bajo el marco PIC 2026 (System Brief, Operational Rules, Harness Config y Persistence Loop). |
| [`CADENA_DE_GEMAS_Y_CONOCIMIENTOS.md`](./CADENA_DE_GEMAS_Y_CONOCIMIENTOS.md) | Flujo encadenado de 4 Gemas en Gemini usando la sección 'Conocimientos' (Knowledge) con los 4 documentos. |
| [`PROMPTS_MAESTROS_SDLC.md`](./PROMPTS_MAESTROS_SDLC.md) | Repositorio completo de prompts y plantillas profesionales para Plan, PRD, User Flow, TRD, Stitch y AI Studio. |

### 📖 Guías del Pipeline (Fases 1-7)
| # | Archivo | Fase del Pipeline |
| :--- | :--- | :--- |
| 01 | [`01_CREACION_GEMA_GEMINI.md`](./01_CREACION_GEMA_GEMINI.md) | Creación y configuración de la Gema Tutora en Gemini (System Prompt Maestro). |
| 02 | [`02_INGENIERIA_REQUISITOS_Y_ARQUITECTURA.md`](./02_INGENIERIA_REQUISITOS_Y_ARQUITECTURA.md) | La Tetralogía Documental: Plan, PRD, User Flow y TRD con criterios Gherkin y modelos ERD. |
| 03 | [`03_PROTOTIPADO_CON_GOOGLE_STITCH.md`](./03_PROTOTIPADO_CON_GOOGLE_STITCH.md) | Metodología de prompts visuales para `stitch.withgoogle.com`, catálogo maestro de 40 estilos frontend y 4 estados de UI. |
| 04 | [`04_CONSTRUCCION_APP_AISTUDIO_Y_SUPABASE.md`](./04_CONSTRUCCION_APP_AISTUDIO_Y_SUPABASE.md) | Prompt Maestro para construir la app completa en `aistudio.google.com/apps`. |
| 05 | [`05_SUPABASE_DATABASE_Y_BACKEND.md`](./05_SUPABASE_DATABASE_Y_BACKEND.md) | Script SQL DDL completo para Supabase: tablas, triggers, RLS y funciones. |
| 06 | [`06_FASE_IMPORTACION_STITCH_A_AISTUDIO.md`](./06_FASE_IMPORTACION_STITCH_A_AISTUDIO.md) | Guía de exportación de Stitch e importación en Google AI Studio. |
| 07 | [`07_FASE_CONEXION_SUPABASE_VARIABLES_ENTORNO.md`](./07_FASE_CONEXION_SUPABASE_VARIABLES_ENTORNO.md) | Configuración de `SUPABASE_URL` y `SUPABASE_ANON_KEY` en el frontend. |

### 🏢 Guías Avanzadas
| Archivo | Tema |
| :--- | :--- |
| [`08_CASO_ESTUDIO_COMPLETO_END_TO_END.md`](./08_CASO_ESTUDIO_COMPLETO_END_TO_END.md) | Caso real completo "HealthPulse Telemed" con todos los artefactos generados. |
| [`09_HERRAMIENTAS_SDLC_COMPLETO.md`](./09_HERRAMIENTAS_SDLC_COMPLETO.md) | Ecosistema profesional: Testing (Playwright/Vitest), CI/CD (GitHub Actions), Despliegue (Vercel), Observabilidad (Sentry/PostHog). |
| [`10_VISION_HOLISTICA_Y_7_FASES_SDLC.md`](./10_VISION_HOLISTICA_Y_7_FASES_SDLC.md) | Visión macro del software, pensamiento sistémico y comparativa Antes vs Hoy con IA. |
| [`11_ARQUITECTURA_MODULAR_ESCALABILIDAD_Y_MANTENIMIENTO.md`](./11_ARQUITECTURA_MODULAR_ESCALABILIDAD_Y_MANTENIMIENTO.md) | Arquitectura Feature-Driven, patrones de diseño, prevención de God Files, bug triage y escalabilidad en Supabase. |

---

## 🌐 Aplicación Web Educativa Interactiva

Este repositorio incluye una aplicación web completa con teoría interactiva, ejercicios con retroalimentación, generadores automáticos de artefactos y simuladores paso a paso.

### Para ejecutar la aplicación:
```powershell
# Ejecuta el script de inicio en PowerShell:
.\start-windows.ps1
```
La aplicación se abrirá automáticamente en: **`http://localhost:8148`**

---

## 🎯 Objetivos de Aprendizaje

Al completar esta guía, el aprendiz será capaz de:

1. ✅ Dominar la **Tetralogía Documental Canónica**: Redactar **Plan**, **PRD**, **User Flow** y **TRD** de nivel profesional.
2. ✅ Diseñar **Instrucciones de Sistema (System Prompts)** profesionales para convertir modelos de IA en mentores estructurados (Gemas de Gemini).
3. ✅ Traducir requerimientos en **interfaces visuales profesionales** usando Google Stitch con prompts descriptivos y los 4 estados de pantalla (Empty, Loading, Success, Error).
4. ✅ Construir **bases de datos relacionales seguras en Supabase** con Row Level Security (RLS), triggers y funciones PL/pgSQL.
5. ✅ Orquestar la **generación de código frontend moderno** en Google AI Studio conectado en tiempo real a Supabase.
6. ✅ Comprender el **ciclo de vida completo del software (SDLC)** y cómo la IA transformó cada fase.
7. ✅ Aplicar **arquitectura modular** (Feature-Driven), patrones de diseño (Service/Hook) y estrategias de escalabilidad profesional.
