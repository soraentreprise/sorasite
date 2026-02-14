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
    "ML": {
        name: "Mali",
        products: ["PX1", "PXT", "Nirlight"],
        details: "Présence opérationnelle et déploiements actifs."
    },
    "BF": {
        name: "Burkina Faso",
        products: ["PX1", "Nirlight"],
        details: "Déploiements en cours dans les forces de sécurité."
    },
    "CI": {
        name: "Côte d’Ivoire",
        products: ["PX1", "PXT"],
        details: "Utilisation dans les infrastructures critiques."
    },
    "SN": {
        name: "Sénégal",
        products: ["Nirlight"],
        details: "Analyse narcotique et contrôle aux frontières."
    },
    "NE": {
        name: "Niger",
        products: ["PX1"],
        details: "Présence stratégique dans les zones frontalières."
    },
    "GN": {
        name: "Guinée",
        products: ["PX1"],
        details: "Déploiements dans les unités de sécurité."
    },
    "TG": {
        name: "Togo",
        products: ["Nirlight"],
        details: "Utilisation dans les opérations de contrôle."
    },
    "GH": {
        name: "Ghana",
        products: ["PX1", "Nirlight"],
        details: "Présence croissante dans les infrastructures critiques."
    },
    "BJ": {
        name: "Bénin",
        products: ["PX1"],
        details: "Déploiements en cours dans les douanes."
    },
    "CM": {
        name: "Cameroun",
        products: ["PX1", "PXT"],
        details: "Utilisation dans les opérations gouvernementales."
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
