var modalWebElement = document.getElementById('modalWeb');
var modalGraphElement = document.getElementById('modalGraph');

document.getElementById('webJava').addEventListener('click', function () {
  modalWebElement.style.display = "block";
  modalWebElement.style.opacity = 1;
});

document.getElementById('graphJava').addEventListener('click', function () {
  modalGraphElement.style.display = "block";
  modalGraphElement.style.opacity = 1;
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
  // modalElement.style.display = "none";

  var fadeOutInterval = setInterval(function() {
  // If the modals opacity is > 0, subtract 0.1
  if (modalWebElement.style.opacity > 0) {
    modalWebElement.style.opacity -= 0.05;
  } else {
    modalWebElement.style.display = 'none';
    clearInterval(fadeOutInterval);
  }

  console.log("still alive bitches")
  // Else clear the setInterval from running (call clearInterval function)
}, 10);
});

document.getElementById('close').addEventListener('click', function() {
  // modalElement.style.display = "none";

  var fadeOutInterval = setInterval(function() {
  // If the modals opacity is > 0, subtract 0.1
  if (modalGraphElement.style.opacity > 0) {
    modalGraphElement.style.opacity -= 0.05;
  } else {
    modalGraphElement.style.display = 'none';
    clearInterval(fadeOutInterval);
  }

  console.log("still alive bitches")
  // Else clear the setInterval from running (call clearInterval function)
}, 10);
});
