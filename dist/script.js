function toggleAboutUsVisibility() {
  const about = document.getElementById("au-1");
  const us = document.getElementById("au-2");

  if (about.style.display !== "none") {
    about.style.display = "none";
    us.style.display = "inline";
  } else {
    about.style.display = "inline";
    us.style.display = "none";
  }
}

setInterval(toggleAboutUsVisibility, 1000);