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

var mediaSwiper = new Swiper('.media-slider', {
    slidesPerView: 5,
    spaceBetween: 15,
    loop: true,

    // défilement continu
    speed: 4000,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },

    freeMode: true,
    freeModeMomentum: false,

    navigation: {
        nextEl: '.media-next',
        prevEl: '.media-prev',
    },

    pagination: {
        el: '.media-pagination',
        clickable: true,
    },
});

function openLightbox(img) {
    document.getElementById("lightbox-img").src = img.src;
    document.getElementById("lightbox").style.display = "flex";
}

document.getElementById("lightbox").onclick = function() {
    this.style.display = "none";
};