// Animações básicas ou futura lógica
document.addEventListener("DOMContentLoaded", () => {
  console.log("Site BurgerLux carregado com sucesso.");
});
document.addEventListener("DOMContentLoaded", () => {
  // Alternância de tema
  const toggleBtn = document.getElementById('toggle-theme');
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light');
    toggleBtn.textContent = document.body.classList.contains('light') ? '🌞 Modo Claro' : '🌙 Modo Escuro';
  });

  // Validação simples do formulário
  const form = document.getElementById('pedido-form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    alert("Pedido enviado com sucesso! Obrigado!");
    form.reset();
  });

  console.log("BurgerLux carregado.");
});
