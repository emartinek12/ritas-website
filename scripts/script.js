const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav ul li");
window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id"); }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
};


const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('nav-ul');
const navitem = document.getElementsByClassName('nav-item');

console.log("works maybe")
hamburger.addEventListener('click', () => {
  navUL.classList.toggle('show');
  console.log("collapse")
});

const menu = document.getElementById('nav-ul');
const link = document.getElementsByClassName('nav-item');

link.on('click', () => {
  menu.classList.remove('show');
});


console.log("remove menu loading")
console.log("remove menu worked")


// $('.hamburger').on('click', function () {
//   $('.menu').addClass('open');
// });

// $('.menu a').on("click", function () {
//   $('.menu').removeClass('open');
// });


// const dropdown = document.getElementById('nav-ul');
// const item = jQuery('.nav-ul li')

// item.addEventListener('click', () => {
//   dropdown.classList.toggle('hide');
//   console.log("mobile navbar hidden")
// });

// $(function () {
//   $('.nav a').on('click', function () {
//     if ($('.navbar-toggle').css('display') != 'none') {
//       $(".navbar-toggle").trigger("click");
//     }
//   });
// });
