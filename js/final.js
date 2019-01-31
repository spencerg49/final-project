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
    examPic.setAttribute('src',`images/graph.jpg`);
});

var imageNumber = function (image=1) {
  var image = Math.floor( Math.random() * 4 ) + 1;

  console.log(`You rolled: ${image}`);

  var imageElement = document.getElementById('image');
  var nextElement = document.getElementById('nextBtn');



};

document.getElementById('nextBtn').addEventListener('click', imageNumber);
