const videoContainers = document.querySelectorAll('.divideo');

videoContainers.forEach((container) => {
  const img = container.querySelector('img');
  const iframe = container.querySelector('iframe');
  const videoId = container.getAttribute('data-video-id');

  // 1. Quando o mouse ENTRA: mostra o vídeo
  container.addEventListener('mouseenter', () => {
    if (!iframe.src) {
      iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=0`;
    }
    img.style.display = 'none';
    iframe.style.display = 'block';
  });

  // 2. Quando o mouse SAI: volta a mostrar a imagem
  container.addEventListener('mouseleave', () => {
    iframe.style.display = 'none';
    img.style.display = 'block';
  });
});