// Fonction pour afficher le pop-up
function afficherPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "block";
}

// Récupérer le bouton et ajouter un gestionnaire d'événement
var btnAjouter = document.getElementsByClassName("button-form");
btnAjouter.addEventListener("click", afficherPopup);
