// =============================
// ZubairaA Foods JavaScript
// =============================

// Sticky Header Effect

window.addEventListener("scroll", () => {

const header = document.querySelector("header");

if(window.scrollY > 80){

header.style.background = "#000";
header.style.boxShadow = "0 5px 15px rgba(0,0,0,0.4)";

}else{

header.style.background = "rgba(0,0,0,.85)";
header.style.boxShadow = "none";

}

});

// Fade In Animation

const observer = new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{
threshold:0.2
});document.querySelectorAll("section").forEach((section)=>{

section.style.opacity="0";
section.style.transform="translateY(50px)";
section.style.transition="all 0.8s ease";

observer.observe(section);

});

// Button Animation

document.querySelectorAll(".btn,.call-btn,.whatsapp-btn").forEach((button)=>{

button.addEventListener("click",()=>{

button.style.transform="scale(0.95)";

setTimeout(()=>{

button.style.transform="scale(1)";

},150);

});

});

// Deal Card Glow

document.querySelectorAll(".deal-card").forEach((card)=>{

card.addEventListener("mouseenter",()=>{

card.style.boxShadow="0 0 25px #FFD000";

});

card.addEventListener("mouseleave",()=>{

card.style.boxShadow="none";

});

});// Menu Card Hover

document.querySelectorAll(".menu-card").forEach((card)=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0)";

});

});

// Gallery Zoom

document.querySelectorAll(".gallery img").forEach((image)=>{

image.addEventListener("click",()=>{

image.style.transform="scale(1.1)";

setTimeout(()=>{

image.style.transform="scale(1)";

},300);

});

});// Floating WhatsApp Animation

const whatsapp = document.querySelector(".floating-whatsapp");

setInterval(()=>{

whatsapp.animate([
{transform:"scale(1)"},
{transform:"scale(1.15)"},
{transform:"scale(1)"}

],{

duration:1000

});

},3000);

// Welcome Message

window.onload=()=>{

console.log("🍔 Welcome to ZubairaA Foods Website");

};
