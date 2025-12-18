document.addEventListener('mousemove', (e) => {
  const x = e.clientX + 'px';
  const y = e.clientY + 'px';

  document.documentElement.style.setProperty('--x', x);
  document.documentElement.style.setProperty('--y', y);
});

// fechar clicando fora da imagem
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('active');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImg');
  const closeModal = document.getElementById('closeModal');

  // Seleciona todas as imagens do carrossel
  const images = document.querySelectorAll('.project-carousel-track img');

  images.forEach(img => {
    img.addEventListener('click', () => {
      modal.style.display = 'flex';
      modalImg.src = img.src;
      modalImg.alt = img.alt;
    });
  });

  // Fecha ao clicar no X
  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Fecha ao clicar fora da imagem
  modal.addEventListener('click', e => {
    if (e.target !== modalImg && e.target !== closeModal) {
      modal.style.display = 'none';
    }
  });
});
