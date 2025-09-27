const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})

document.querySelectorAll('.project-card .image').forEach(imageDiv => {
  const img = imageDiv.querySelector('img');
  if (img) {
    imageDiv.style.backgroundImage = `url('${img.src}')`;
    img.style.display = 'none';
  }
});