document.addEventListener("DOMContentLoaded", function () {
  const progressBar = document.querySelector(".progress-bar");

  function setProgress(progress) {
    const degrees = (progress / 100) * 180;
    progressBar.style.transform = `rotate(${degrees}deg)`;
  }
  //setProgress(50);
});
