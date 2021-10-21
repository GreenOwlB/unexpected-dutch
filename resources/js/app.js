/* smooth scroll on specific links */

const controller = new AbortController();


function eventlisteners() {
    const aekLink = document.querySelector("#aekLink");
    const introAek = document.querySelector("#introAek");
    const aekText = document.querySelector(".Aekingerzand");

    

    

    aekLink.addEventListener("click",function (){
        smoothscroll(introAek);
    });

    window.addEventListener('scroll', function() {
        revealText(aekText);
    },{
        signal: controller.signal
    });
}


function revealText(elementToReveal) {
    const position = elementToReveal.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (windowHeight > position) {
        elementToReveal.classList.add("active");
        controller.abort();
    }
}


function smoothscroll(linkTo) {
    const position = linkTo.getBoundingClientRect().top;
    let distance = position - 700;
    window.scrollBy({
        top: distance,
        left: 0,
        behavior: 'smooth'
    });
}



eventlisteners();

