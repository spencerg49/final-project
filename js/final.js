var modalElement = document.getElementById('modal');
var examPic = document.getElementById('examplePic');




document.getElementById('webJava').addEventListener('click', function () {
  modalElement.style.display = "block";
  modalElement.style.opacity = 1;
});

document.getElementById('graphJava').addEventListener('click', function () {
  modalElement.style.display = "block";
  modalElement.style.opacity = 1;
});

document.getElementById('photoJava').addEventListener('click', function () {
  modalElement.style.display = "block";
  modalElement.style.opacity = 1;
});

document.getElementById('actJava').addEventListener('click', function () {
  modalElement.style.display = "block";
  modalElement.style.opacity = 1;
});

document.getElementById('close').addEventListener('click', function() {
    modalElement.style.display = "none";
    examPic.setAttribute('src',`images/graph1.jpg`);
});

var image = 1;

var imageNumber = function () {
  image += 1;

  if (image > 4) {
    image = 1;
  }

  console.log(`You rolled: ${image}`);

  var imageElement = document.getElementById('examplePic');
  var nextElement = document.getElementById('nextBtn');

imageElement.setAttribute('src', `images/graph${image}.jpg`);

};

document.getElementById('nextBtn').addEventListener('click', imageNumber);
