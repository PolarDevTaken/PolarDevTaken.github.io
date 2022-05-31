// const oferta = document.getElementsByClassName("oferta");
// const form=document.getElementById('ilosc_osob');
// const ilosc_osob = form.elements['ilosc_osob'];
// const oferty = ["normalna","ulgowa","2+1","2+2"];
// let najlepsza_oferta;
// switch(ilosc_osob){
//     case 1: 
//     let wiek = parseInt(prompt("ile masz lat?","14"))
//     if(wiek > 18){
//         najlepsza_oferta = oferty[0];
//     }
//     else{
//          najlepsza_oferta = oferty[1];
//     }
//     break;
//     case 2:
//         let wiek1 = parseInt(prompt("ile masz lat?","14"));
//         let wiek2 = parseInt(prompt("ile masz lat?","14"));
//         if(wiek1>18 || wiek2>18){
//          najlepsza_oferta = "dwa razy" + oferty[0];
//         }
//         else if(wiek1<18 || wiek2>18){
//              najlepsza_oferta = oferty[0] + oferty[1];
//         }
//         else if(wiek1>18 || wiek2<18){
//              najlepsza_oferta = oferty[0] + oferty[1];
//         }
//         else{
//              najlepsza_oferta = "dwa razy" + oferty[1];
//         }
//         break;
//         case 3:
//              najlepsza_oferta = oferty[2];
//             break;
//             case 4:
//                  najlepsza_oferta = oferty[3];
//                 break;
// }




// oferta.textContent = "Najlepsza oferta dla " + ilosc_osob + "to: " + najlepsza_oferta;
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  console.log(slides);
  let dots = document.getElementsByClassName("dot");
  let desc = document.getElementsByClassName("desc");
  console.log(desc);


  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = desc.length}
  for (i = 0; i <desc.length; i++) {
    desc[i].style.display = "none"; 
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  desc[slideIndex-1].style.display = "block";
  
}


/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
