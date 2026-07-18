// ===========================
// Navigation active au défilement
// ===========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });

});

// ===========================
// Effet d'apparition au défilement
// ===========================

const elements = document.querySelectorAll(".plat, .galerie-container img, .apropos-container");

function revealElements() {

    const screenPosition = window.innerHeight * 0.85;

    elements.forEach(element => {

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < screenPosition) {
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
        }

    });

}

elements.forEach(element => {
    element.style.opacity = "0";
    element.style.transform = "translateY(50px)";
    element.style.transition = "all 0.8s ease";
});

window.addEventListener("scroll", revealElements);
window.addEventListener("load", revealElements);

// ===========================
// Bouton "Retour en haut"
// ===========================

const topButton = document.createElement("button");

topButton.innerHTML = "↑";
topButton.id = "topButton";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.bottom = "20px";
topButton.style.right = "20px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.borderRadius = "50%";
topButton.style.border = "none";
topButton.style.background = "#ff9800";
topButton.style.color = "#fff";
topButton.style.fontSize = "24px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.boxShadow = "0 5px 15px rgba(0,0,0,.3)";
topButton.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
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

// ===========================
// Message du formulaire
// ===========================

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function(e) {

        e.preventDefault();

        alert("Merci ! Votre message a été envoyé avec succès.");

        form.reset();

    });

}

// ===========================
// Année automatique dans le footer
// ===========================

const footer = document.querySelector("footer p");

if (footer) {

    footer.innerHTML = `© ${new Date().getFullYear()} Restaurant Délice. Tous droits réservés.`;

}