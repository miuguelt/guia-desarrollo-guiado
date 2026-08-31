/**
 * app.js
 * Orquestador principal de la interfaz web educativa interactiva
 */

window.App = {
  currentModuleIndex: 0,
  xp: 0,

  init: function() {
    this.loadState();
    this.renderNav();
    this.switchModule(window.MODULES_DATA[0].id);
    this.updateProgress();
  },

  loadState: function() {
    const savedXP = localStorage.getItem('devbrain_guided_xp');
    if (savedXP) {
      this.xp = parseInt(savedXP, 10);
      this.updateXPDisplay();
    }
  },

  addXP: function(amount) {
    this.xp += amount;
    localStorage.setItem('devbrain_guided_xp', this.xp);
    this.updateXPDisplay();
    this.showToast(`🎉 ¡Ganaste +${amount} XP!`, 'success');
  },

  updateXPDisplay: function() {
    const xpEl = document.getElementById('xp-count');
    const levelEl = document.getElementById('user-level');
    if (xpEl) xpEl.textContent = `${this.xp} XP`;

    if (levelEl) {
      if (this.xp >= 50) {
        levelEl.textContent = "🏆 Arquitecto IA Master";
      } else if (this.xp >= 20) {
        levelEl.textContent = "⚡ Desarrollador Guiado";
      } else {
        levelEl.textContent = "🌱 Aprendiz SDLC";
      }
    }
  },

  renderNav: function() {
    const navContainer = document.getElementById('nav-modules-list');
    if (!navContainer) return;

    navContainer.innerHTML = window.MODULES_DATA.map((mod, idx) => `
      <li>
        <button class="nav-item-btn ${idx === 0 ? 'active' : ''}" id="nav-btn-${mod.id}" onclick="window.App.switchModule('${mod.id}')">
          <span class="nav-item-icon">${mod.icon}</span>
          <span>${mod.title}</span>
        </button>
      </li>
    `).join('');
  },

  switchModule: function(moduleId) {
    const modIdx = window.MODULES_DATA.findIndex(m => m.id === moduleId);
    if (modIdx === -1) return;

    this.currentModuleIndex = modIdx;
    const mod = window.MODULES_DATA[modIdx];

    // Actualizar botones de navegación
    document.querySelectorAll('.nav-item-btn').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.getElementById(`nav-btn-${mod.id}`);
    if (activeBtn) activeBtn.classList.add('active');

    // Renderizar contenido en el main
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.innerHTML = `
        <div class="module-header">
          <span class="module-tag">${mod.tag}</span>
          <h2 class="module-title">${mod.title}</h2>
          <p class="module-desc">${mod.desc}</p>
        </div>
        <div class="module-body">
          ${mod.content}
        </div>
      `;
    }

    // Inicializar generadores específicos del módulo
    if (moduleId === 'vision-holistica') {
      window.Generators.showSdlcPhase(1);
    } else if (moduleId === 'cadena-gemas') {
      window.Generators.updateMultiGemPrompt();
    } else if (moduleId === 'artefactos-individuales') {
      window.Generators.updateAllArtifacts();
    } else if (moduleId === 'stitch-ui') {
      window.Generators.loadStitchPreset();
    } else if (moduleId === 'conexion-supabase') {
      window.Generators.updateSupabaseClientPreview();
    } else if (moduleId === 'evaluacion') {
      window.QuizEngine.renderQuizzes('quiz-list');
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.updateProgress();
  },

  switchArtifactTab: function(tabKey) {
    window.Generators.activeArtifactTab = tabKey;
    ['srs', 'gherkin', 'sql', 'stitch', 'aistudio'].forEach(k => {
      const btn = document.getElementById(`tab-btn-${k}`);
      if (btn) {
        if (k === tabKey) btn.classList.add('active');
        else btn.classList.remove('active');
      }
    });
    window.Generators.updateAllArtifacts();
  },

  downloadCurrentArtifact: function() {
    const filename = document.getElementById('artifact-current-filename')?.textContent || 'artefacto.md';
    const content = document.getElementById('artifact-current-output')?.textContent;

    if (!content) {
      this.showToast("⚠️ No hay contenido para descargar.", "warning");
      return;
    }

    const blob = new Blob([content], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    this.showToast(`💾 Archivo ${filename} descargado exitosamente.`, "success");
  },

  updateProgress: function() {
    const total = window.MODULES_DATA.length;
    const current = this.currentModuleIndex + 1;
    const pct = Math.round((current / total) * 100);
    
    const fillEl = document.getElementById('progress-fill');
    if (fillEl) fillEl.style.width = `${pct}%`;
  },

  copyCode: function(elementId) {
    const el = document.getElementById(elementId);
    if (!el) return;

    const text = el.textContent || el.innerText;
    navigator.clipboard.writeText(text).then(() => {
      this.showToast("📋 ¡Copiado al portapapeles con éxito!", "success");
    }).catch(() => {
      this.showToast("❌ No se pudo copiar automáticamente.", "error");
    });
  },

  showToast: function(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `<span>${message}</span>`;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  },

  toggleTheme: function() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    this.showToast(`Modo cambiado a: ${newTheme === 'dark' ? 'Oscuro' : 'Claro'}`);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  window.App.init();
});
