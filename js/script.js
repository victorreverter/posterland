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

