// Wait for all content (images/videos) to load
window.addEventListener("load", function () {
    // Hide the preloader
    const preloader = document.getElementById("preloader");
    preloader.style.display = "none";

    // Show the content
    const content = document.getElementById("content");
    content.style.display = "block";
  });