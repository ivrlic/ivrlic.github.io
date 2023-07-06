

const btnUp = document.getElementById("btn-up");
let isUp = false;

let toggleBtnUp = function(isUp){
//   btnUp.style.visibility = isUp ? "visible" : "hidden";
  btnUp.style.opacity = isUp ? 1 : 0;
  btnUp.style.transform = isUp ? "scale(1)" : "scale(0)";
};

window.addEventListener("scroll", function(){
  if (window.scrollY > 400) {
    isUp = true;
    toggleBtnUp(isUp);
  } else {
    isUp = false;
    toggleBtnUp(isUp);
  }
});
