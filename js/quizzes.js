/**
 * quizzes.js
 * Banco de preguntas interactivas, validación y sistema de puntuación
 */

window.QUIZZES_DATA = [
  {
    id: "q1",
    question: "1. ¿Por qué es crucial que una Gema de Gemini adopte una metodología socrática (paso a paso)?",
    options: [
      { text: "Para ahorrar tokens de consumo en la API de Google.", correct: false },
      { text: "Para evitar abrumar al estudiante y garantizar que cada requerimiento y regla de negocio sea validado antes de generar código.", correct: true },
      { text: "Porque los modelos de IA no son capaces de generar más de 20 líneas por respuesta.", correct: false },
      { text: "Para obligar al estudiante a escribir el código manualmente en C++.", correct: false }
    ],
    explanation: "La metodología socrática evita alucinaciones y garantiza que el diseño de software sea riguroso, extrayendo los requerimientos reales del aprendiz fase por fase."
  },
  {
    id: "q2",
    question: "2. En Google Stitch (stitch.withgoogle.com), ¿qué elementos clave deben incluirse en un prompt para obtener un diseño profesional?",
    options: [
      { text: "Solo el nombre de la app y una lista de colores RGB.", correct: false },
      { text: "Estructura de layout (Sidebar/Header), componentes clave (KPIs, tablas), sistema de diseño (Dark mode, tokens) y microinteracciones.", correct: true },
      { text: "El código SQL completo de la base de datos.", correct: false },
      { text: "La configuración del puerto de red y el servidor Apache.", correct: false }
    ],
    explanation: "Google Stitch interpreta mejor los prompts cuando se le define la jerarquía visual, la distribución espacial, los componentes interactivos y la paleta de diseño."
  },
  {
    id: "q3",
    question: "3. ¿Qué ocurre en Supabase si creas una tabla pero OLVIDAS habilitar 'Row Level Security' (RLS)?",
    options: [
      { text: "La base de datos se borra automáticamente en 24 horas.", correct: false },
      { text: "Cualquier persona con la clave pública 'anon' puede leer, modificar o eliminar todos los registros de la tabla.", correct: true },
      { text: "Supabase impide que el frontend se conecte mediante HTTPS.", correct: false },
      { text: "Los datos se cifran automáticamente con contraseña de root.", correct: false }
    ],
    explanation: "Sin RLS habilitado (`ALTER TABLE x ENABLE ROW LEVEL SECURITY;`), las tablas son de acceso público sin restricciones a través de la API REST generada por Supabase."
  },
  {
    id: "q4",
    question: "4. En Google AI Studio Apps, ¿cómo se asegura que la aplicación web reaccione en tiempo real a los cambios de sesión del usuario?",
    options: [
      { text: "Haciendo un setInterval que recargue la página cada 2 segundos.", correct: false },
      { text: "Implementando un listener con 'supabase.auth.onAuthStateChange' dentro de un contexto de autenticación.", correct: true },
      { text: "Guardando la contraseña en texto plano en localStorage.", correct: false },
      { text: "Reiniciando el navegador web.", correct: false }
    ],
    explanation: "`supabase.auth.onAuthStateChange` es la función oficial para sincronizar el estado de la UI cuando el usuario inicia o cierra sesión."
  },
  {
    id: "q5",
    question: "5. ¿Cuál es la estructura recomendada para un Requerimiento Funcional en BDD (Behavior-Driven Development)?",
    options: [
      { text: "Un párrafo libre sin formato.", correct: false },
      { text: "Identificador (RF-XX), Descripción, Actor y Criterios de Aceptación en formato Gherkin (Dado-Cuando-Entonces).", correct: true },
      { text: "Solo una captura de pantalla del diseño de Figma.", correct: false },
      { text: "Un archivo ejecutable .exe.", correct: false }
    ],
    explanation: "El formato IEEE 830 combinado con Gherkin (Given-When-Then) permite que tanto humanos como modelos de IA comprendan con precisión la lógica esperada."
  }
];

window.QuizEngine = {
  userAnswers: {},
  score: 0,

  renderQuizzes: function(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = window.QUIZZES_DATA.map((q, idx) => `
      <div class="quiz-item" id="quiz-block-${q.id}">
        <h4 class="quiz-question">${q.question}</h4>
        <div class="quiz-options">
          ${q.options.map((opt, optIdx) => `
            <div class="quiz-option" onclick="window.QuizEngine.selectOption('${q.id}', ${optIdx})">
              <span>${String.fromCharCode(65 + optIdx)})</span>
              <span>${opt.text}</span>
            </div>
          `).join('')}
        </div>
        <div class="quiz-feedback" id="feedback-${q.id}"></div>
      </div>
    `).join('');
  },

  selectOption: function(quizId, optionIndex) {
    const question = window.QUIZZES_DATA.find(q => q.id === quizId);
    if (!question) return;

    const quizBlock = document.getElementById(`quiz-block-${quizId}`);
    const feedback = document.getElementById(`feedback-${quizId}`);
    const optionElements = quizBlock.querySelectorAll('.quiz-option');

    // Desactivar clics adicionales
    optionElements.forEach(el => el.style.pointerEvents = 'none');

    const selectedOption = question.options[optionIndex];
    const isCorrect = selectedOption.correct;

    if (isCorrect) {
      optionElements[optionIndex].classList.add('correct');
      feedback.style.background = 'rgba(16, 185, 129, 0.15)';
      feedback.style.color = '#34d399';
      feedback.style.border = '1px solid #10b981';
      feedback.innerHTML = `✅ <strong>¡Correcto! (+10 XP)</strong>: ${question.explanation}`;
      window.QuizEngine.score += 10;
      window.App.addXP(10);
    } else {
      optionElements[optionIndex].classList.add('incorrect');
      // Mostrar la correcta
      const correctIdx = question.options.findIndex(o => o.correct);
      if (correctIdx !== -1) optionElements[correctIdx].classList.add('correct');

      feedback.style.background = 'rgba(239, 68, 68, 0.15)';
      feedback.style.color = '#f87171';
      feedback.style.border = '1px solid #ef4444';
      feedback.innerHTML = `❌ <strong>Incorrecto</strong>: ${question.explanation}`;
    }

    feedback.classList.add('show');
    const badge = document.getElementById('quiz-score-badge');
    if (badge) badge.textContent = `${window.QuizEngine.score} / 50 XP`;
  }
};
