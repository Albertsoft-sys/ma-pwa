if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js");
  });
}

document.getElementById("btnAction").addEventListener("click", () => {
  document.getElementById("resultat").textContent =
    "Action exécutée à " + new Date().toLocaleTimeString("fr-FR");
});