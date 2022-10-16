

/*selecionar o botão */

const btnMenu = document.getElementById('btn-menu');

/* função do botão */
btnMenu
function toggleMenu(event) {
  if(event.type === 'touchstart') event.preventDefault();

 const nav = document.getElementById('nav');
 nav.classList.toggle('active');

 const active = nav.classList.contains('active');

 event.currentTargert.setAttribute('aria-expanded',active);

 if(active){
   event.currentTargert.setAttribute('aria-label', 'Fechar Menu');
 } else {
   event.currentTargert.setAttribute('aria-label', 'Abrir Menu');
 }
}

/* evento de clicar no botão */
btnMenu.addEventListener( 'click', toggleMenu);

btnMenu.addEventListener('touchstar', toggleMenu);

/*  slide - carrosel */
let slideIndex = 1;
  mostreSlides(slideIndex);

function pluslides(n){
   mostreSlides(slideIndex += n)
}

function slideAtual(n){
  mostreSlides(slideIndex =n)
}

function mostreSlides(n){
  let i;
  let slides = document.getElementsByClassName("slides");
  let pontos = document.getElementsByClassName("ponto");
        
  if (n > slides.length){
    slideIndex = 1;
  }

  if (n < 1){
    slideIndex = slides.length;
  }

  for(i=0; i < slides.length; i++){
    slides[i].style.display = "none";
  }

  for(i=0; i < pontos.length; i++){
    pontos[i].className= pontos[1].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display ="block";
  pontos[slideIndex-1].className += " active";


} 
