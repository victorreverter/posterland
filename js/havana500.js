FRAME_CASE = document.querySelector('#frame_case');
PROJECT_CASE = document.querySelector('#project_case');

// FILM FESTIVAL Code
HAVANA500_FACE = document.querySelector('#havana500_face');

HAVANA500_FACE.addEventListener('click', function() {

    //Load the required css file
    var element = document.createElement("link");
    element.setAttribute("rel", "stylesheet");
    // element.setAttribute("type", "text/css");
    element.setAttribute("href", "css/havana500.css");
    document.getElementsByTagName("head")[0].appendChild(element);
    
    // Add project the Background
    PROJECT_CASE.classList.add('project-BG');


    //Load the HTML Frame code
    // FRAME_CASE.innerHTML = '';
    FRAME_CASE.innerHTML = '<div class="pic-item vertical-poster havana500-1" style="opacity: 1"></div>';
    FRAME_CASE.innerHTML += '<div class="pic-item vertical-poster havana500-2"></div>';
    FRAME_CASE.innerHTML += '<div class="pic-item vertical-poster havana500-3"></div>';
    FRAME_CASE.innerHTML += '<div class="pic-item vertical-poster havana500-4"></div>';
    FRAME_CASE.innerHTML += '<div class="pic-item vertical-poster havana500-5"></div>';
    FRAME_CASE.innerHTML += '<div class="pic-item vertical-poster havana500-6"></div>';
    FRAME_CASE.innerHTML += '<div class="pic-item vertical-poster havana500-7"></div>';
    FRAME_CASE.innerHTML += '<div class="pic-item vertical-poster havana500-8"></div>';
    FRAME_CASE.innerHTML += '<div class="pic-item vertical-poster havana500-9"></div>';
    FRAME_CASE.innerHTML += '<div class="pic-item vertical-poster havana500-10"></div>';
    FRAME_CASE.innerHTML += '<div class="pic-item vertical-poster havana500-11"></div>';

    FRAME_CASE.innerHTML += '<h2 class="project-title title-light-mode">Havana 500 <span>(2019)</span></h2>';

    PROJECT_CASE.classList.add('showSLIDE');
}, false);