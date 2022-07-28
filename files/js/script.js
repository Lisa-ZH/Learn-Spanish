// JavaScript Document
$(document).ready(function () {
    /* Click to flip the card */
  $(".flip-container").click(function () {
    $(this).closest('.flip-container').toggleClass('flip');
    $(this).css('transform, rotateY(180deg)');
  });

    $(".prev").click(function () {
        $('.flip-container').removeClass('flip');
  });
    
    $(".next").click(function () {
        $('.flip-container').removeClass('flip');
  });
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
        console.log("h");
        showSlides(slideIndex += n);
    }
    
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("flip-inner");
 
  if (n > slides.length) {
      slideIndex = 1;
  }    
  if (n < 1){
      slideIndex = slides.length;
  }
  
  for ( i = 0; i < slides.length; i++){
      slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
