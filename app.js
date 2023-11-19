// ------------------------------ navbar ------------------------------------------
let sidemenu = document.getElementById("sidemenu");

function openmenu() {
 sidemenu.style.right = "0"; 
}
function closemenu() {
 sidemenu.style.right = "-250px"; 

   }

// --------------- typing amination ------------
   const textElement = document.getElementById('text');
const texts = ['Hello there!', "I'm a web designer", 'Developer ', 'Graphic Designer', 'Photo Editor '];
let index = 0;
let letterIndex = 0;
let currentText = '';
let isDeleting = false;

function type() {
  currentText = texts[index];
  if (isDeleting) {
    textElement.textContent = currentText.substring(0, letterIndex - 1);
    letterIndex--;
  } else {
    textElement.textContent = currentText.substring(0, letterIndex + 1);
    letterIndex++;
  }

  const typingSpeed = 100; // Adjust the typing speed here

  if (!isDeleting && letterIndex === currentText.length) {
    isDeleting = true;
    setTimeout(type, typingSpeed * 2);
  } else if (isDeleting && letterIndex === 0) {
    isDeleting = false;
    index++;
    if (index === texts.length) {
      index = 0;
    }
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(type, typingSpeed);
  }
}

// Start the typing animation
type();
// -------------------- swiper js ------------------------

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 25,
    freeMode: true,
    fada:'true',
    autoplay: {
      delay: 3500,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    loop:true,
    centerSlide:'true',
    grabCursor:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets:true,
    },
    breakpoints: {
0: {
    slidesPerView: 1,
    slidesPerView: 1,
    spaceBetween: 0,

},
520: {
    slidesPerView: 2,
},
950: {
    slidesPerView: 3,
},
    },
  });




//   ----------------------- to top script --------------
// Get the button
let mybutton = document.getElementById("to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// /////////////////////// scroll aminate 

window.addEventListener('scroll', reveal);
function reveal() {
    let reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
      let windowheight = window.innerHeight;
      let revealtop = reveals[i].getBoundingClientRect().top;
        let revealpoint = 150;
        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add("active");
        }else{
            reveals[i].classList.remove("active");
        }
    }


}