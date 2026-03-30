// =======================================
// creating a responsive navbar component
//========================================

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const headerElem =  document.querySelector(".header");

if (mobile_nav && headerElem) {
  mobile_nav.addEventListener('click', () => {
    headerElem.classList.toggle('active');
  });
}


// =======================================
//            protfolio section start
//========================================
const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".img-overlay");

if (p_btns) {
  p_btns.addEventListener("click", (e) => {
    const p_btn_clicked = e.target;
    if (!p_btn_clicked.classList.contains("p-btn")) return;

    p_btn.forEach((curElem) => curElem.classList.remove("p-btn-active"));
    p_btn_clicked.classList.add("p-btn-active");

    const btn_num = p_btn_clicked.dataset.btnNum;
    if (!btn_num) return;

    window.requestAnimationFrame(() => {
      p_img_elem.forEach((curElem) => {
        if (curElem.matches(`.p-btn--${btn_num}`)) {
          curElem.classList.remove("p-image-not-active");
        } else {
          curElem.classList.add("p-image-not-active");
        }
      });
    });
  });
}

if (document.querySelector(".mySwiper") && typeof Swiper !== "undefined") {
  new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      781: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
  });
}


    //scroll To top button

const heroSection = document.querySelector(".section-hero");
const footerElem = document.querySelector(".section-footer");

if (heroSection && footerElem) {
  const scrollElement = document.createElement("div");
  scrollElement.classList.add("scrollTop-style");
  scrollElement.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;
  footerElem.after(scrollElement);

  const scrollTop = () => heroSection.scrollIntoView({ behavior: "smooth" });
  scrollElement.addEventListener("click", scrollTop);
}


  //  Animated Number counter

const counterNum = document.querySelectorAll(".counter-numbers");
const speed = 200;

if (counterNum.length > 0) {
  counterNum.forEach((curElem) => {
    const updateNumber = () => {
      const targetNumber = parseInt(curElem.dataset.number, 10);
      if (Number.isNaN(targetNumber)) return;

      const initialNum = parseInt(curElem.innerText, 10) || 0;
      const incrementNumber = Math.trunc(targetNumber / speed);

      if (initialNum < targetNumber) {
        curElem.innerText = `${initialNum + incrementNumber}+`;
        setTimeout(updateNumber, 10);
      }
    };
    updateNumber();
  });
}

