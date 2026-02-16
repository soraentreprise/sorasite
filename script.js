/* ------------------------------
   MENU MOBILE
------------------------------ */
function toggleMenu() {
    document.querySelector("nav ul").classList.toggle("show");
}

/* ------------------------------
   CARTE AFRIQUE INTERACTIVE
------------------------------ */

const presence = {
    "BF": {
        name: "Burkina Faso",
        products: ["PX1", "PXT"],
        details: "Présence opérationnelle et déploiements actifs."
    },
    "CI": {
        name: "Côte d’Ivoire",
        products: ["PX1", "PXT"],
        details: "Présence opérationnelle et déploiements dans les unités de sécurité et opérations gouvernementales."
    },
    "GH": {
        name: "Ghana",
        products: ["PX1", "PXT"],
        details: "Démonstration à L'Etat Major des Armeés et au National Control Commission."
    },
    "GMB": {
        name: "Gambie",
        products: ["PX1", "PXT"],
        details: "Démonstration au GRA ."
    },
    "ML": {
        name: "Mali",
        products: ["PX1", "PXT"],
        details: "Démonstration à la Douane."
    },
    "NGA": {
        name: "Nigeria",
        products: ["PX1", "PXT"],
        details: "Démonstration au Quartier général de la Défense."
    }

};

/* Interaction avec la carte */
document.querySelectorAll('.country').forEach(country => {
    country.addEventListener('click', () => {
        const id = country.id;
        alert("Pays sélectionné : " + id);
   
        if (info) {
            document.getElementById("country-name").innerText = info.name;
            document.getElementById("country-details").innerText =
                "Produits utilisés : " + info.products.join(", ") +
                ". " + info.details;

            document.getElementById("country-info").style.display = "block";
        }
    });
});
/* === SWIPER === */
new Swiper('.main-slider', {
    loop: true, autoplay: {delay: 5000}, centeredSlides: true,
    slidesPerView: 1.2, spaceBetween: 30, grabCursor: true,
    pagination: {el: '.swiper-pagination', clickable: true},
    navigation: {nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev'},
    breakpoints: {768: {slidesPerView: 2}, 1024: {slidesPerView: 2.5}}
});
new Swiper('.media-slider', {
    loop: true, slidesPerView: 1.5, spaceBetween: 20, centeredSlides: true,
    pagination: {el: '.media-pagination', clickable: true},
    navigation: {nextEl: '.media-next', prevEl: '.media-prev'},
    breakpoints: {640: {slidesPerView: 3}, 1024: {slidesPerView: 5}}
});