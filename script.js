// ===============================
// Typing Animation
// ===============================

const typingText = [
    "Frontend Developer",
    "AI Enthusiast",
    "Web Developer",
    "Problem Solver"
];

let index = 0;
let charIndex = 0;
let isDeleting = false;

const subtitle = document.querySelector(".hero h2");

function typeEffect() {

    if (!subtitle) return;

    let current = typingText[index];

    if (!isDeleting) {

        subtitle.textContent = current.substring(0, charIndex++);
    }
    else {

        subtitle.textContent = current.substring(0, charIndex--);
    }

    let speed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === current.length + 1) {

        speed = 1500;
        isDeleting = true;
    }

    if (isDeleting && charIndex === 0) {

        isDeleting = false;
        index = (index + 1) % typingText.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// ===============================
// Navbar Active Link
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;
        const height = section.clientHeight;

        if (pageYOffset >= top) {

            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");
        }

    });

});


// ===============================
// Reveal Animation
// ===============================

const revealElements = document.querySelectorAll("section,.card,.skill-grid div");

function reveal() {

    revealElements.forEach(el => {

        const windowHeight = window.innerHeight;

        const top = el.getBoundingClientRect().top;

        if (top < windowHeight - 100) {

            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }

    });

}

revealElements.forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(60px)";
    el.style.transition = "all .8s ease";

});

window.addEventListener("scroll", reveal);

reveal();


// ===============================
// Scroll To Top Button
// ===============================

const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.right = "25px";
topBtn.style.bottom = "25px";
topBtn.style.width = "55px";
topBtn.style.height = "55px";
topBtn.style.borderRadius = "50%";
topBtn.style.border = "none";
topBtn.style.cursor = "pointer";
topBtn.style.fontSize = "22px";
topBtn.style.background = "#38bdf8";
topBtn.style.color = "white";
topBtn.style.display = "none";
topBtn.style.boxShadow = "0 10px 25px rgba(0,0,0,.3)";
topBtn.style.transition = ".3s";

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";
    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};


// ===============================
// Navbar Background
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        header.style.background="rgba(2,6,23,.95)";
        header.style.boxShadow="0 5px 20px rgba(0,0,0,.3)";
    }

    else{

        header.style.background="rgba(15,23,42,.75)";
        header.style.boxShadow="none";
    }

});


// ===============================
// Button Ripple Effect
// ===============================

const buttons=document.querySelectorAll(".btn,.btn2");

buttons.forEach(button=>{

button.addEventListener("click",function(e){

const circle=document.createElement("span");

const diameter=Math.max(button.clientWidth,button.clientHeight);

const radius=diameter/2;

circle.style.width=circle.style.height=`${diameter}px`;

circle.style.left=`${e.clientX-button.offsetLeft-radius}px`;

circle.style.top=`${e.clientY-button.offsetTop-radius}px`;

circle.classList.add("ripple");

const ripple=button.getElementsByClassName("ripple")[0];

if(ripple){

ripple.remove();

}

button.appendChild(circle);

});

});


// ===============================
// Loading Animation
// ===============================

window.addEventListener("load",()=>{

document.body.style.opacity="0";

setTimeout(()=>{

document.body.style.transition="opacity .8s";

document.body.style.opacity="1";

},200);

});
