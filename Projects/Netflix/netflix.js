let currentBar = null;
let previndex = null;

const bars = document.querySelectorAll(".bars");
const blockcontainer = Array.from(
  document.getElementsByClassName("blockcontainer")
);

bars.forEach((bar, index) => {
  const plusImage = bar.querySelector(".p8 img");

  bar.addEventListener("click", () => {
    if (currentBar) {
      currentBar.querySelector(".p8 img").src = "images/plus.svg";
      if (blockcontainer[previndex] && previndex !== null)
        blockcontainer[previndex].style.display = "none";
      // Hide the additional information of the previous bar if any
    }

    if (currentBar === bar) {
      // If the same bar is clicked again, close it
      currentBar = null;
      blockcontainer[index].style.display = "none";
    } else {
      currentBar = bar;
      blockcontainer[index].style.display = "block";
      plusImage.src = "images/cross.svg";
    }
    previndex = index;
  });
});

//end validate
//display flex justify content center gap 1em
function validate1() {
  var emailinput = document.getElementById("input1");

  if (emailinput.checkValidity()) {
    window.location.href = "https://www.netflix.com/signup/registration?locale=en-IN";
  }
  else{
    document.getElementById("validate1").style.display = "flex";
    document.getElementById("validate1").style.justifyContent = "flex-start";
    document.getElementById("validate1").style.gap = "1em";
    document.getElementById("lang").style.borderColor = "red";
  }
}

function validate2() {
  var end_validate = document.getElementById("input2");

  if (end_validate.checkValidity()) {
    window.location.href = "https://www.netflix.com/signup/registration?locale=en-IN";
  }
  else{
    document.getElementById("validate2").style.display = "flex";
    document.getElementById("validate2").style.justifyContent = "center";
    document.getElementById("validate2").style.gap = "1em";
  }
}