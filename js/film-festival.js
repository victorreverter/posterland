FRAME_CASE = document.querySelector('#frame_case');
PROJECT_CASE = document.querySelector('#project_case');

// FILM FESTIVAL Code
FILM_FESTIVAL_FACE = document.querySelector('#film_festival_face');

FILM_FESTIVAL_FACE.addEventListener('click', function() {

    //Load the required css file
    var element = document.createElement("link");
    element.setAttribute("rel", "stylesheet");
    // element.setAttribute("type", "text/css");
    element.setAttribute("href", "css/filmfestival.css");
    document.getElementsByTagName("head")[0].appendChild(element);
    
    // Add project the Background
    PROJECT_CASE.classList.add('project-BG');


    //Load the HTML Frame code
    // FRAME_CASE.innerHTML = '';
    FRAME_CASE.innerHTML = '<div class="pic-item horizontal-poster film-festival-1" style="opacity: 1"></div>';
    FRAME_CASE.innerHTML += '<div class="pic-item horizontal-poster film-festival-2"></div>';
    FRAME_CASE.innerHTML += '<div class="pic-item horizontal-poster film-festival-3"></div>';
    FRAME_CASE.innerHTML += '<div class="pic-item horizontal-poster film-festival-4"></div>';
    FRAME_CASE.innerHTML += '<div class="pic-item horizontal-poster film-festival-5"></div>';
    FRAME_CASE.innerHTML += '<div class="pic-item horizontal-poster film-festival-6"></div>';

    FRAME_CASE.innerHTML += '<div class="pic-item vertical-poster film-festival-7"></div>';
    FRAME_CASE.innerHTML += '<div class="pic-item vertical-poster film-festival-8"></div>';
    FRAME_CASE.innerHTML += '<div class="pic-item vertical-poster film-festival-9"></div>';
    FRAME_CASE.innerHTML += '<div class="pic-item vertical-poster film-festival-10"></div>';
    FRAME_CASE.innerHTML += '<div class="pic-item vertical-poster film-festival-11"></div>';
    FRAME_CASE.innerHTML += '<div class="pic-item vertical-poster film-festival-12"></div>';
    FRAME_CASE.innerHTML += '<div class="pic-item vertical-poster film-festival-13"></div>';
    FRAME_CASE.innerHTML += '<div class="pic-item vertical-poster film-festival-14"></div>';
    FRAME_CASE.innerHTML += '<div class="pic-item vertical-poster film-festival-15"></div>';
    FRAME_CASE.innerHTML += '<div class="pic-item vertical-poster film-festival-16"></div>';
    FRAME_CASE.innerHTML += '<div class="pic-item vertical-poster film-festival-17"></div>';

    FRAME_CASE.innerHTML += '<h2 class="project-title title-light-mode">Classic Cinema Festival <span>(2021)</span></h2>';

    PROJECT_CASE.classList.add('showSLIDE');
}, false);