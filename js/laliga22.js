FRAME_CASE = document.querySelector('#frame_case');
PROJECT_CASE = document.querySelector('#project_case');

// FILM FESTIVAL Code
LALIGA22_FACE = document.querySelector('#laliga22_face');

LALIGA22_FACE.addEventListener('click', function() {

    //Load the required css file
    var element = document.createElement("link");
    element.setAttribute("rel", "stylesheet");
    // element.setAttribute("type", "text/css");
    element.setAttribute("href", "css/laliga22.css");
    document.getElementsByTagName("head")[0].appendChild(element);
    
    // Add project the Background
    PROJECT_CASE.classList.add('project-BG');


    //Load the HTML Frame code
    // FRAME_CASE.innerHTML = '';
    FRAME_CASE.innerHTML = '<div class="pic-item vertical-poster laliga22-1" style="opacity: 1"></div>';
    FRAME_CASE.innerHTML += '<div class="pic-item vertical-poster laliga22-2"></div>';
    FRAME_CASE.innerHTML += '<div class="pic-item vertical-poster laliga22-3"></div>';
    FRAME_CASE.innerHTML += '<div class="pic-item vertical-poster laliga22-4"></div>';
    FRAME_CASE.innerHTML += '<div class="pic-item vertical-poster laliga22-5"></div>';
    FRAME_CASE.innerHTML += '<div class="pic-item vertical-poster laliga22-6"></div>';
    FRAME_CASE.innerHTML += '<div class="pic-item vertical-poster laliga22-7"></div>';
    FRAME_CASE.innerHTML += '<div class="pic-item vertical-poster laliga22-8"></div>';
    FRAME_CASE.innerHTML += '<div class="pic-item vertical-poster laliga22-9"></div>';
    FRAME_CASE.innerHTML += '<div class="pic-item vertical-poster laliga22-10"></div>';
    FRAME_CASE.innerHTML += '<div class="pic-item vertical-poster laliga22-11"></div>';
    FRAME_CASE.innerHTML += '<div class="pic-item vertical-poster laliga22-12"></div>';

    FRAME_CASE.innerHTML += '<h2 class="project-title title-light-mode">Laliga 21|22<span>(2021)</span></h2>';

    PROJECT_CASE.classList.add('showSLIDE');
}, false);