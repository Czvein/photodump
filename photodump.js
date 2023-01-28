const form = document.getElementById("upload-form");
const photoInput = document.getElementById("photo-input");
const photosDiv = document.getElementById("photos");

form.addEventListener("submit", event => {
  event.preventDefault();
  const file = photoInput.files[0];
  const reader = new FileReader();
  reader.addEventListener("load", event => {
    const img = document.createElement("img");
    img.classList.add("photo");
    img.src = event.target.result;
    photosDiv.appendChild(img);
  });
  reader.readAsDataURL(file);
});