let selectedMode = "mobile";

window.addEventListener("load", () => {
  setTimeout(() => {
    showScreen("chooseScreen");
  }, 1800);
});

function showScreen(id){
  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
  });

  document.getElementById(id).classList.add("active");
}

function selectMode(mode){
  selectedMode = mode;

  document.querySelectorAll(".choice").forEach(btn => {
    btn.classList.remove("active");
  });

  document.querySelector(`.choice[data-mode="${mode}"]`).classList.add("active");
}

function continueWebsite(){
  showScreen("loadingScreen");

  document.getElementById("loadingText").textContent =
    selectedMode === "desktop"
      ? "Mengalihkan ke tampilan desktop..."
      : "Mengalihkan ke tampilan mobile...";

  setTimeout(() => {
    window.location.href = "home.html";
  }, 1600);
}
