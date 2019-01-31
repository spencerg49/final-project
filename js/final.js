var modalElement = document.getElementById('modal');
var examPic = document.getElementById('examplePic');




document.getElementById('webJava').addEventListener('click', function () {
  modalElement.style.display = "block";
  modalElement.style.opacity = 1;
  examPic.setAttribute('src',`images/web.png`);
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

// add event listener here for .nav-btn (add Id attribute to that element if needed)
// inside the event listener function, change the "height" style of the .topMenu element.
