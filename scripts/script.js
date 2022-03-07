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

// making navbar collapse with burger menu when mobile

const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('nav-ul');
const navitem = document.getElementsByClassName('nav-item');

hamburger.addEventListener('click', () => {
  navUL.classList.toggle('show');
});

// remove navbar after having clicked on one sections-link

$(".nav-ul a").click(function () {
  console.log("clicked a")

  $(".nav-ul").removeClass('show');
});
