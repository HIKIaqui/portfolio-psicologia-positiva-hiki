const links = document.querySelectorAll(".sidebar a");
const sections = document.querySelectorAll("main section");
const topButton = document.getElementById("topButton");

function updateActiveLink() {
  let currentSection = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;

    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute("id");
    }
  });

  links.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", () => {
  updateActiveLink();

  if (window.scrollY > 500) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
});

topButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

updateActiveLink();