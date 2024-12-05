document.addEventListener('DOMContentLoaded', () => {
  const toggleButtons = document.querySelectorAll('.toggle-btn');

  toggleButtons.forEach(button => {
      button.addEventListener('click', () => {
          const description = button.previousElementSibling;
          description.classList.toggle('expanded');

          if (description.classList.contains('expanded')) {
              button.textContent = 'Ver menos';
          } else {
              button.textContent = 'Ver más';
          }
      });
  });
});