// Animate Home

TOP_LEAVES = document.querySelector('#top_leaves');
LEFT_LEAF = document.querySelector('#left_leaf');
RIGHT_LEAF = document.querySelector('#right_leaf');
HOME_SOFA = document.querySelector('#home_sofa');

PROJECT_CONTENT = document.querySelector('#project_content');

setTimeout(() => {
    TOP_LEAVES.classList.remove('hideLeft');
    // LEFT_LEAF.classList.remove('hideLeft');

    RIGHT_LEAF.classList.remove('hideRight');
    // HOME_SOFA.classList.remove('hideBottom');

    // PROJECT_CONTENT.classList.add('showElem');
}, 400);

setTimeout(() => {
    // TOP_LEAVES.classList.remove('hideLeft');
    LEFT_LEAF.classList.remove('hideLeft');

    // RIGHT_LEAF.classList.remove('hideRight');
    HOME_SOFA.classList.remove('hideBottom');

    // PROJECT_CONTENT.classList.add('showElem');
}, 800);

setTimeout(() => {
    PROJECT_CONTENT.classList.add('showElem'); 
}, 1500);

// SLIDE animation

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("pic-item");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    // x[i].style.display = "none";
    x[i].style.opacity = 0;
  }
  x[slideIndex-1].style.opacity = 1;
}
