
function multiply(num1, num2) {
    const result = num1 * num2;
    return result;
}

var myImage = document.querySelector("img");

myImage.onclick = function () {
  var mySrc = myImage.getAttribute("src");
  if (mySrc === "images/img1.jpg") {
    myImage.setAttribute("src", "images/img2.png");
  } else {
    myImage.setAttribute("src", "images/img1.jpg");
  }
};

var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

function setUserName() {
    var myName = prompt("Напиши своё имя");
    localStorage.setItem("name", myName);
    myHeading.textContent = myName + " ты моя любимая попочка :З";
  }

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    var storedName = localStorage.getItem("name");
    myHeading.textContent = storedName + " ты моя любимая попочка :З";
  }

  myButton.onclick = function () {
    setUserName();
  };