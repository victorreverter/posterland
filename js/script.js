HEAD_ELEM = document.getElementsByTagName('head');
FRAME_CASE = document.querySelector('#frame_case');

// HOME animation
TOP_LEAVES = document.querySelector('#top_leaves');
LEFT_LEAF = document.querySelector('#left_leaf');
RIGHT_LEAF = document.querySelector('#right_leaf');
HOME_SOFA = document.querySelector('#home_sofa');

PROJECT_CONTENT = document.querySelector('#project_content');
PROJECT_CASE = document.querySelector('#project_case');

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

// ==========================================================================

// HOME to SLIDE

// FILM_FESTIVAL_FACE = document.querySelector('#film_festival_face');
CLOSE_PROJECT = document.querySelector('#close_project');

// CLOSE Icon
CLOSE_PROJECT.addEventListener('click', function() {
    // alert('cocoa');
    PROJECT_CASE.classList.remove('showSLIDE');
    FRAME_CASE.innerHTML = '';
    // console.log(HEAD_ELEM);
    // console.log(HEAD_ELEM[0].lastChild);

    HEAD_ELEM[0].removeChild(HEAD_ELEM[0].lastChild);

    //Remove BG Class
    PROJECT_CASE.classList.remove('project-BG');
}, false);

// FILM FESTIVAL PROJECT
// FILM_FESTIVAL_FACE.addEventListener('click', function() {
//     PROJECT_CASE.classList.add('showSLIDE');
// }, false);

// ==========================================================================

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
