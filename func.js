document.addEventListener('mousemove', (e) => {
  const x = e.clientX + 'px';
  const y = e.clientY + 'px';

  document.documentElement.style.setProperty('--x', x);
  document.documentElement.style.setProperty('--y', y);
});

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modalImagem');
  const imagemModal = document.getElementById('imagemModal');
  const fecharModal = document.getElementById('fecharModal');

  const imagens = document.querySelectorAll('.trilho-carrossel img');

  imagens.forEach((img) => {
    img.addEventListener('click', () => {
      modal.classList.add('exibir');
      imagemModal.src = img.src;
      imagemModal.alt = img.alt;
    });
  });

  if (fecharModal) {
    fecharModal.addEventListener('click', () => {
      modal.classList.remove('exibir');
    });
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target !== imagemModal && e.target !== fecharModal) {
        modal.classList.remove('exibir');
      }
    });
  }
});