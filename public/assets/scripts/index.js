//NAVBAR ACTIVE STATE while SCROLLING
const navLinksElements = document.querySelectorAll('.nav-item');
const section = document.querySelectorAll("section");
const windowPathName = window.location.pathname;

const btnHamburguer = document.querySelector(".hamburguer");
const navResponsive = document.querySelector(".nav-items-links");

function activeMenu(){
    let len = section.length;

    while(--len && window.scrollY + 200 < section[len].offsetTop){}
    navLinksElements.forEach(item => item.classList.remove("active"));
    if (len == 0) navLinksElements[0].classList.add("active");
    if (len == 1) navLinksElements[1].classList.add("active");
    if (len == 2) navLinksElements[1].classList.add("active");
    if (len == 3) navLinksElements[1].classList.add("active");
    if (len == 4) navLinksElements[2].classList.add("active");
    if (len == 5) navLinksElements[3].classList.add("active");
    if (len == 6) navLinksElements[4].classList.add("active");
}

activeMenu();
window.addEventListener("scroll", activeMenu);

//CLICK + SCROLL

const logoLink = document.querySelectorAll(".logo-link");
logoLink.forEach(link => {link.addEventListener("click", (e) => {
    e.preventDefault();
    scrollIntoViewWithOffset(section[0]);
})});

const inicioLink = document.querySelectorAll(".inicio-link");
inicioLink.forEach(link => {link.addEventListener("click", (e) => {
    e.preventDefault();
    scrollIntoViewWithOffset(section[0]);
    if (navResponsive.classList.contains("active"))
    {
        navResponsive.classList.remove("active");
    }
})});

const seccion1 = document.querySelectorAll(".seccion1-link");

seccion1.forEach(link => {link.addEventListener("click", (e) => {
    e.preventDefault();
    scrollIntoViewWithOffset(section[1]);
    if (navResponsive.classList.contains("active"))
    {
        navResponsive.classList.remove("active");
    }
})});

const seccion2 = document.querySelectorAll(".seccion2-link");

seccion2.forEach(link => {link.addEventListener("click", (e) => {
    e.preventDefault();
    scrollIntoViewWithOffset(section[4]);
    if (navResponsive.classList.contains("active"))
    {
        navResponsive.classList.remove("active");
    }
})});

const seccion3 = document.querySelectorAll(".seccion3-link");

seccion3.forEach(link => {link.addEventListener("click", (e) => {
    e.preventDefault();
    scrollIntoViewWithOffset(section[5]);
    if (navResponsive.classList.contains("active"))
    {
        navResponsive.classList.remove("active");
    }
})});

const seccion4 = document.querySelectorAll(".seccion4-link");

seccion4.forEach(link => {link.addEventListener("click", (e) => {
    e.preventDefault();
    scrollIntoViewWithOffset(section[6]);
    if (navResponsive.classList.contains("active"))
    {
        navResponsive.classList.remove("active");
    }
})});

const scrollIntoViewWithOffset = (selector) => {
    window.scrollTo({
        behavior: 'smooth',
        top:
            selector.getBoundingClientRect().top + window.pageYOffset - 100
    })
}

//HAMBURGUER

btnHamburguer.addEventListener("click", function(){
    if (!navResponsive.classList.contains("active"))
    {
        navResponsive.classList.add("active");
    }else{
        navResponsive.classList.remove("active");
    }
});

// FEATURES

const fCarousel = document.querySelector(".container-feature .carousel");
const fArrowBtns = document.querySelectorAll(".container-feature .container-slider .caret");
const fFirstCardWidth = fCarousel.querySelector(".carousel-product").offsetWidth;
const fCarouselProducts = Array.from(fCarousel.querySelectorAll(".carousel-product"));
const fFirstCard = fCarouselProducts[0];
const fLastCard = fCarouselProducts[fCarouselProducts.length - 1];

let fCardPerView = Math.round(fCarousel.offsetWidth / fFirstCardWidth);

fCarouselProducts.slice(0, fCardPerView).forEach((card) => {
    const cloneFirstCard = card.cloneNode(true);
    fCarousel.appendChild(cloneFirstCard);
});

fCarouselProducts.slice(-fCardPerView).forEach((card) => {
    const cloneLastCard = card.cloneNode(true);
    fCarousel.insertBefore(cloneLastCard, fFirstCard);
});

fCarousel.classList.add("no-transition");
fCarousel.scrollLeft = fCarousel.offsetWidth;
fCarousel.classList.remove("no-transition");

fArrowBtns.forEach(btn => {
    btn.addEventListener("click", () =>{
        fCarousel.scrollLeft += btn.id == "left" ? -fFirstCardWidth : fFirstCardWidth;
    })
});

//FUNCIONALIDADES DEL PRODUCTO

const pCarousel = document.querySelector(".container-producto .carousel");
const pArrowBtns = document.querySelectorAll(".container-producto .container-slider .caret");
const pFirstCardWidth = pCarousel.querySelector(".carousel-product").offsetWidth;
const pCarouselProducts = Array.from(pCarousel.querySelectorAll(".carousel-product"));
const pFirstCard = pCarouselProducts[0];
const pLastCard = pCarouselProducts[pCarouselProducts.length - 1];

let pCardPerView = Math.round(pCarousel.offsetWidth / pFirstCardWidth);

pCarouselProducts.slice(0, pCardPerView).forEach((card) => {
    const cloneFirstCard = card.cloneNode(true);
    pCarousel.appendChild(cloneFirstCard);
});

pCarouselProducts.slice(-pCardPerView).forEach((card) => {
    const cloneLastCard = card.cloneNode(true);
    pCarousel.insertBefore(cloneLastCard, pFirstCard);
});

pCarousel.classList.add("no-transition");
pCarousel.scrollLeft = pCarousel.offsetWidth;
pCarousel.classList.remove("no-transition");

pArrowBtns.forEach(btn => {
    btn.addEventListener("click", () =>{
        pCarousel.scrollLeft += btn.id == "left" ? -pFirstCardWidth : pFirstCardWidth;
    })
});

//TESTIMONIOS

const tCarousel = document.querySelector(".container-testimonios .carousel");
const tArrowBtns = document.querySelectorAll(".container-testimonios .container-slider .caret");
const tFirstCardWidth = tCarousel.querySelector(".carousel-product").offsetWidth;
const tCarouselProducts = Array.from(tCarousel.querySelectorAll(".carousel-product"));
const tFirstCard = tCarouselProducts[0];
const tLastCard = tCarouselProducts[tCarouselProducts.length - 1];

let tCardPerView = Math.round(tCarousel.offsetWidth / tFirstCardWidth);

tCarouselProducts.slice(0, tCardPerView).forEach((card) => {
    const cloneFirstCard = card.cloneNode(true);
    tCarousel.appendChild(cloneFirstCard);
});

tCarouselProducts.slice(-tCardPerView).forEach((card) => {
    const cloneLastCard = card.cloneNode(true);
    tCarousel.insertBefore(cloneLastCard, tFirstCard);
});

tCarousel.classList.add("no-transition");
tCarousel.scrollLeft = tCarousel.offsetWidth;
tCarousel.classList.remove("no-transition");

tArrowBtns.forEach(btn => {
    btn.addEventListener("click", () =>{
        tCarousel.scrollLeft += btn.id == "left" ? -tFirstCardWidth : tFirstCardWidth;
    })
});


//CONTACT FORM

const form = document.querySelector("form");
const emailField = form.querySelector(".email-field");
const emailInput = emailField.querySelector(".user-email");

const nameField = form.querySelector(".name-field");
const nameInput = nameField.querySelector(".user-name");

const messageField = form.querySelector(".message-field");
const messageInput = messageField.querySelector(".user-message");

function checkEmail(){
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailInput.value.match(pattern)){
        return emailField.classList.add("invalid");
    }
    emailField.classList.remove("invalid");
}

function checkName(){
    const pattern = /^[a-zA-Z]{3,}\s[a-zA-Z]{3,}$/;
    if (!nameInput.value.match(pattern)){
        return nameField.classList.add("invalid");
    }
    nameField.classList.remove("invalid");
}

function checkMessage(){
    if (messageInput.value.length < 10){
        return messageField.classList.add("invalid");
    }
    messageField.classList.remove("invalid");
}

var successMessage = form.querySelector(".sucess-message");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    checkName();
    checkEmail();
    checkMessage();

    nameInput.addEventListener("keyup", checkName);
    emailInput.addEventListener("keyup", checkEmail);
    messageInput.addEventListener("keyup", checkMessage);

    if (!emailField.classList.contains("invalid") && !nameField.classList.contains("invalid") && !messageField.classList.contains("invalid")){
        nameInput.value = "";
        emailInput.value = "";
        messageInput.value = "";
        successMessage.style.display="block";
        setTimeout(function() {
            successMessage.style.display = "none";
        }, 2000);
    }
})