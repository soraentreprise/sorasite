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
document.querySelectorAll(".country").forEach(country => {
    country.addEventListener("click", () => {
        const code = country.id;
        const info = presence[code];

        if (info) {
            document.getElementById("country-name").innerText = info.name;
            document.getElementById("country-details").innerText =
                "Produits utilisés : " + info.products.join(", ") +
                ". " + info.details;

            document.getElementById("country-info").style.display = "block";
        }
    });
});
