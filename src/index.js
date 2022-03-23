//Function Slider Photos


let slider = document.querySelector(".containerHero__slider")
let sliderIndividual = document.querySelectorAll(".containerHero__slider--item")
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 3000;

window.addEventListener("resize", function(){
    width = sliderIndividual[0].clientWidth;
})

setInterval(function(){
    slides();
},intervalo);



function slides(){
    slider.style.transform = "translate("+(-width*contador)+"px)";
    slider.style.transition = "transform .8s";
    contador++;

    if(contador == sliderIndividual.length){
        setTimeout(function(){
            slider.style.transform = "translate(0px)";
            slider.style.transition = "transform 0s";
            contador=1;
        },1500)
    }
}

// Funtion Faqs

var acc = document.getElementsByClassName("faqsContainer__item--accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        }else {
            panel.style.display = "block";
        }
    });
}

// Funtion Alert


function sendAlert() {
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("email").value;
    var telefono = document.getElementById("telefono").value;
    var mensaje = document.getElementById("mensaje").value;
  if (nombre == "" || correo == "" || telefono == "" || mensaje == "") {
      console.log("Hay datos sin completar");
  }else {
    alert("Gracias por contactarnos, pronto nos comunicaremos con usted");
  }
}

//Funtion Testimonials

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("testimonials__slides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

//Send Alert Newsletter

function sendAlertNewsletter() {
    alert("Te inscribiste correctamente");
}

//Function Menu

function showMenu(){
    document.getElementById('menuBurguer').style.display = 'block';
    document.getElementById('buttonOpen').style.display = 'none';
    document.getElementById('buttonOff').style.display = 'block';
}

function hideMenu(){
    document.getElementById('menuBurguer').style.display = 'none';
    document.getElementById('buttonOpen').style.display = 'block';
    document.getElementById('buttonOff').style.display = 'none';
}

