const toggle = document.getElementById("darkToggle");
const html = document.documentElement;
html.classList.remove("dark");
if (localStorage.getItem("theme") === "dark") {
  html.classList.add("dark");
  toggle.checked = true;
}

toggle.addEventListener("change", () => {
  if (toggle.checked) {
    html.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    html.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
});
