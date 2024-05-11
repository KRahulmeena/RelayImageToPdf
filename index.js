let newImage, showImg;
function loadFile(event) {
  showImg = document.getElementById("showImg");
  showImg.src = URL.createObjectURL(event.target.files[0]);

  newImage = document.createElement("img");
  newImage.src = URL.createObjectURL(event.target.files[0]);

  showImg.onload = function () {
    URL.revokeObjectURL(showImg.src); // free memory
  };
}

function pdfDown() {
  let doc = new jsPDF();
  doc.addImage(newImage, 10, 10);
  doc.save("YourImage.pdf");
}
