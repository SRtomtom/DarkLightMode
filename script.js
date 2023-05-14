const chk = document.getElementById("chk");
//"const chk" serve para criar a variavel e o depois do igual é o que a variavel vai fazer

chk.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});
