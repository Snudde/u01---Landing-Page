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

const toggleCheckbox = document.getElementById("theme-toggle");
const body = document.body;

// Apply saved theme on load
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  body.classList.add("dark-mode");
  toggleCheckbox.checked = true;
}

// Toggle theme + save preference
toggleCheckbox.addEventListener("change", () => {
  if (toggleCheckbox.checked) {
    body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
  } else {
    body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light");
  }
});