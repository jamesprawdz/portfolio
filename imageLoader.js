// imageLoader.js
function loadProfileImage() {
  const profileImageDiv = document.getElementById("profileImage");
  if (profileImageDiv) {
    const imgElement = document.createElement("img");
    imgElement.src = "images/IMG_6527.JPEG"; // The path to your image
    imgElement.alt = "James Prawdzik";
    imgElement.style.height = "50px"; // or other styles as needed
    imgElement.style.width = "auto";
    imgElement.style.borderRadius = "50%";
    profileImageDiv.appendChild(imgElement);
  }
}

// Call the function to load the image
document.addEventListener("DOMContentLoaded", loadProfileImage);
