// // Disable right-click
document.addEventListener("contextmenu", (e) => e.preventDefault());

function ctrlShiftKey(e, keyCode) {
  return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}

document.onkeydown = (e) => {
  // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
  if (
    event.keyCode === 123 ||
    ctrlShiftKey(e, "I") ||
    ctrlShiftKey(e, "J") ||
    ctrlShiftKey(e, "C") ||
    (e.ctrlKey && e.keyCode === "U".charCodeAt(0))
  )
    return false;
};
{
  const loader = document.querySelector(".loader"); // loader winsow

  setTimeout(() => {
    loader.style.display = "none";
  }, 1005);
}
// {
//   const loader = document.querySelector(".loader"); // loader winsow
//   function loaderWindow() {
//     // If window Load Function Active class "visibilty hidden & opacity 0"
//     loader.classList.add("active");
//   }

//   function timeLoad() {
//     // Time To Add Function "loadwindow"
//     setTimeout(loaderWindow, 0);
//   }

//   window.onload = timeLoad; // When Window Load Add Function TimeLoad To remove loader Window
// }
{
  const button__Scroll = document.querySelector(".btnScroll"); // Button To Scroll

  window.onscroll = function () {
    //window.scrollY >= 300 ? button__Scroll.classList.add("active") : button__Scroll.classList.remove("active");

    // When Window Scroll
    if (window.scrollY >= 300) {
      // If Window Increese Than or Aquel 500px
      button__Scroll.classList.add("active"); // Add Class Active To Button Scroll From "-60px" To "25px"
    } else {
      button__Scroll.classList.remove("active"); // Remove Class Active Form "25px" To "-60px"
    }
  };
  button__Scroll.addEventListener("click", (e) => {
    // When Click On Button Scroll Add Top "0" And Scroll Smooth
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

{
  const toggle = document.querySelector(".iconToggle i"); // Toggle Bars
  const menu = document.querySelector("nav");
  const nav__Link = document.querySelectorAll(".nav_Item .item_Nav"); // All Links Menu
  const all__Menu = document.querySelector(".all__Header"); // Menu Fixed
  const main__Header = document.querySelector(".main__Header"); // Logo

  function replaceIconBars() {
    toggle.classList.replace("fa-close", "fa-bars");
  }
  toggle.addEventListener("click", (e) => {
    menu.classList.toggle("active"); // Add Class Active to Menu To Open
    if (menu.classList.contains("active")) {
      toggle.classList.replace("fa-bars", "fa-close");
    } else {
      replaceIconBars();
    }
  });

  nav__Link.forEach((item) => {
    // Loop On all Links Menu
    item.addEventListener("click", (e) => {
      // Item === Link Menu
      nav__Link.forEach((item) => {
        // Loop On all Menu Links
        item.classList.remove("active"); // Remove class Active From All Links
        e.target.classList.add("active"); // Add Class Active To The Link User Cliked On
      });
    });
  });
  window.addEventListener("scroll", (e) => {
    menu.classList.remove("active"); // Add Class Active to Menu To Open
    replaceIconBars();

    // Window On Scroll
    if (window.scrollY >= 500) {
      // If Window Scroll === 500
      all__Menu.classList.add("active"); // Add Class Active To Menu Header To Fixed
      main__Header.classList.add("active"); // Add Class Active Form Width "85"PX To 60 px
    } else {
      all__Menu.classList.remove("active"); // Remove Class Acrtive From Menu Header From Fixed To Static
      main__Header.classList.remove("active"); // Remove Class Active From Logo Width Form 60px To 85px
    }
    if (window.scrollY == 0) {
      // If Window Scroll === 0
      nav__Link.forEach((item) => {
        // Loop all Links
        item.classList.remove("active"); // Reove Class Active Form All Links
        nav__Link[0].classList.add("active"); // Add Class Active To Link index [0]
      });
    }
  });
}

{
  (function () {
    const typed = new Typed(".typed", {
      strings: ["Full-Stack Developer", "Front-End Developer", "Back-End Developer"],
      typeSpeed: 150,
      backSpeed: 150,
      loop: true
    });
  })();
}

{
  (function () {
    const typed = new Typed(".title", {
      strings: ["Hamid Safdari"],
      typeSpeed: 150,
      backSpeed: 150,
      loop: false
    });
  })();
}

{
  (function () {
    const typed = new Typed(".titleAbout", {
      strings: ["I'm A Full-Stack Developer"],
      typeSpeed: 150,
      backSpeed: 150,
      loop: true
    });
  })();
}

{
  // Library Of supermarquee

  $("#supermarquee").supermarquee({
    type: "horizontal",
    speed: "medium",
    direction: "ltr",
    pauseonhover: true,
    autostart: true,
    mode: "continuous",
    position: "custom",
    content:
      "- HTML - Css - Javascript - Jquery - Bootstrap - Material UI - Reactjs - Next Js - Redux - Jest - Node Js - Express js - PHP - Laravel 10 - MongoDB - PostgreSQL - Mysql - Hooks - Git - Github - Responsive design - slick js"
  });
}

{
  // Library Of supermarquee

  $("#supermarquee-01").supermarquee({
    type: "horizontal",
    speed: "medium",
    direction: "ltr",
    pauseonhover: true,
    autostart: true,
    mode: "continuous",
    position: "custom",
    content: `
    <img src="assets/images/icon/01.png" alt="html">
    <img src="assets/images/icon/02.png" alt="css">
    <img src="assets/images/icon/03.png" alt="javascript">
    <img src="assets/images/icon/017.png" alt="Next js">
    <img src="assets/images/icon/018.png" alt="Jest">
    <img src="assets/images/icon/08.png" class="jquery" alt="git">
    <img src="assets/images/icon/015.png" class="jquery bgGit" alt="github">
    <img src="assets/images/icon/014.png" class="jquery" alt="jquery">
    <img src="assets/images/icon/04.png" alt="bootstrap">
    <img src="assets/images/icon/06.png" alt="Material UI">
    <img src="assets/images/icon/05.png" alt="react">
    <img src="assets/images/icon/010.png" alt="redux">
    <img src="assets/images/icon/016.png" alt="Nodejs">
    <img src="assets/images/icon/011.png" alt="PHP">
    <img src="assets/images/icon/012.png" alt="Laravel">
    <img src="assets/images/icon/013.png" alt="MongoDB">
    <img src="assets/images/icon/09.png" alt="PostgerSQl">
    <img src="assets/images/icon/07.png" alt="Mysql">
    
    `
  });
}

{
  // Main Section

  $(".slider-Two").owlCarousel({
    nav: true,
    dots: true,
    loop: true,
    margin: 20,
    navText: [
      "<i class='fa-solid fa-chevron-right'></i>",
      "<i class='fa-solid fa-chevron-left'></i>"
    ],
    items: 1,
    thumbs: false,
    smartSpeed: 1300,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: false,
    responsiveClass: true,
    autoHeight: true,
    responsive: {
      0: {
        items: 1
      },
      650: {
        items: 2
      },
      1200: {
        items: 2
      },
      1400: {
        items: 2
      }
    }
  });
}

{
  // Swiper Slider
  var swiper = new Swiper(".allPortfolio .swiper-container", {
    slidesPerView: 3,
    spaceBetween: 25,
    speed: 1000,
    pagination: {
      el: ".all-main .swiper-pagination",
      clickable: true
    },
    navigation: false,
    mousewheel: false,
    keyboard: true,
    autoplay: {
      delay: 4000,
    },
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      480: {
        slidesPerView: 1
      },
      991: {
        slidesPerView: 1
      },
      992: {
        slidesPerView: 2
      }
    }
  });
  swiper.el.addEventListener("mouseenter", function () {
    swiper.autoplay.stop();
  });
  
  // Resume autoplay when mouse leaves the slider container
  swiper.el.addEventListener("mouseleave", function () {
    swiper.autoplay.start();
  });
}
{
  // Popup Modal
  // const iconLink = document.querySelectorAll(".iconLink");
  // const popup = document.querySelector(".popup");

  // iconLink.forEach((item) => {
  //   item.addEventListener("click", (e) => {
  //     e.preventDefault();
  //     popup.classList.add("active");
  //     setTimeout(() => {
  //       popup.classList.remove("active");
  //     }, 1000);
  //   });
  // });
}
// {
//   let x = 1;
//   while (x <= 12) {
//     let plane = document.createElement("div");
//     plane.className = `plane plane-${x}`;
//     plane.style.transform = `rotateY(${x * 15}deg)`;
//     document.querySelector(".sphere-wrapper").appendChild(plane);
//     for (y = 1; y <= 36; y++) {
//       let spoke = document.createElement("div");
//       spoke.className = `spoke spoke-${y}`;
//       spoke.innerHTML = ` <div class="dot" style="background-color:${
//         y % 2 === 0 ? "#00fffa" : "#ff9800"
//       }; animation: pulsate .5s infinite ${aDelay(y)}s alternate both"></div>`;
//       spoke.style.transform = `rotateZ(${y}0deg)`;
//       document.querySelector(`.plane-${x}`).appendChild(spoke);
//     }
//     x++;
//   }
//   function aDelay(t) {
//     switch (t) {
//       case 1:
//       case 35:
//         return 0.05;
//       case 2:
//       case 34:
//         return 0.1;
//       case 3:
//       case 33:
//         return 0.15;
//       case 4:
//       case 34:
//         return 0.2;
//       case 5:
//       case 33:
//         return 0.25;
//       case 6:
//       case 30:
//         return 0.3;
//       case 7:
//       case 29:
//         return 0.35;
//       case 8:
//       case 28:
//         return 0.4;
//       case 9:
//       case 27:
//         return 0.45;
//       case 10:
//       case 26:
//         return 0.5;
//       case 11:
//       case 25:
//         return 0.55;
//       case 12:
//       case 24:
//         return 0.6;
//       case 13:
//       case 23:
//         return 0.65;
//       case 14:
//       case 22:
//         return 0.7;
//       case 15:
//       case 21:
//         return 0.75;
//       case 16:
//       case 20:
//         return 0.8;
//       case 17:
//       case 19:
//         return 0.85;
//       case 18:
//         return 0.95;
//       case 36:
//         return 0;
//       default:
//         return 1;
//     }
//   }
// }

{
  // Animation AOS

  setTimeout(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  }, 120);
}

{
  // Counter Visits
  function websiteVisits(response) {
    document.querySelector("#visits").textContent = response.value;
    console.log(response.value);
  }
}
