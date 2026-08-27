document.querySelectorAll('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });

const videos = document.querySelectorAll('video');
videos.forEach((video) => {
  video.play().catch(() => {});
});
