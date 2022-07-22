
/*
reveal animation when scroll
*/
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 100;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);

var fact = document.getElementById("facts");
var text = ["1 IN 4 pregnancies end in abortion every year.", "25 MILLION unsafe abortions take place each year.","People have abortions all the time, regardless of what the law says","Criminalising abortion does not stop abortions, it just makes abortion less safe","Almost every death and injury from unsafe abortion is preventable","Over the last 25 years, more than 50 countries have changed their laws to allow for greater access to abortion","Criminalising abortion is a form of discrimination, which further fuels stigma","Nearly Half of Women Seeking Abortions Have Already Ended a Pregnancy"];
var credit = ["<br>facts @Amnesty International"];
function generate(){
  fact.innerHTML = text[Math.floor(Math.random()*text.length)];
  document.getElementById("credit").innerHTML = credit[0];
  }
function go(){
  document.getElementById('alert').style.visibility='hidden';
  document.getElementById('bg').style.visibility='hidden';
}