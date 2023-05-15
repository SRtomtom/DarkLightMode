const chk = document.getElementById("chk"); //"const chk" serve para criar a variavel e o depois do igual é o que a variavel vai fazer

function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

//carrega modo dark / light
function locadTheme() {
  const darkMode = localStorage.getItem("dark");

  if (darkMode) {
    toggleDarkMode();
  }
}

locadTheme();

chk.addEventListener("change", () => {
  toggleDarkMode();

  //salva e/ou remove modo dark
  localStorage.removeItem("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("dark", 1); //a flag'1' é possivel ver em inspecionar > application > local Storage.
  }
});
