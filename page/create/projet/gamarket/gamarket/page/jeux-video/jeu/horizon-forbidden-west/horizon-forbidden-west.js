// Serie de fonction qui modifie le boitier pour correspondre à la console sélectionner
function PS4() { 
    document.querySelector("#boite_jeux img").src = "../../image/Horizon_Forbidden_West_PS4.jpg" //Modifie l'image de la boite de jeu c'est à dire l'image de la span d'id "boite_jeux"
    document.querySelector("#boite_jeux img").alt = "boite Horizon forbbiden west PS4" //Modifie la description de l'image de la span d'id "boite_jeux"
}
function PS5() { 
    document.querySelector("#boite_jeux img").src = "../../image/Horizon_Forbidden_West_PS5.jpg"
    document.querySelector("#boite_jeux img").alt = "boite Horizon forbbiden west PS5"
}