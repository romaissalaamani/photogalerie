window.onload = addTabFocus;

function addTabFocus() {
  console.log("Page loaded: adding tabindex to gallery images");

  const images = document.querySelectorAll("#gallery img");
  for (let i = 0; i < images.length; i++) {
    images[i].setAttribute("tabindex", "0");
  }
}

function upDate(previewPic) {
  console.log(previewPic.alt, previewPic.src);
  const preview = document.getElementById("image");
  preview.textContent = previewPic.alt;
  preview.style.backgroundImage = 'url("' + previewPic.src + '")';
}
function undo() {
  const preview = document.getElementById("image");
  preview.style.backgroundImage = 'url("")';
  preview.textContent = "Hover over an image below to display here.";
}