// Serie de fonction qui modifie le boitier pour correspondre à la console sélectionner
function PS4() { 
    document.querySelector("#boite_jeux img").src = "../../image/Boite_Démon_Slayer_the_Hinokami_Chronicles_PS4.jfif" //Modifie l'image de la boite de jeu c'est à dire l'image de la span d'id "boite_jeux"
    document.querySelector("#boite_jeux img").alt = "boite Demon Slayer the Hinokami Chronicles PS4" //Modifie la description de l'image de la span d'id "boite_jeux"
}
function PS5() {  
    document.querySelector("#boite_jeux img").src = "../../image/Demon_Slayer_the_Hinokami_Chronicles_boite_PS5.jpg"
    document.querySelector("#boite_jeux img").alt = "boite Demon Slayer the Hinokami Chronicles PS5"
}
function XBOX() { 
    document.querySelector("#boite_jeux img").src = "../../image/Demon_Slayer_the_Hinokami_Chronicles_boite_XBOX.jpg"
    document.querySelector("#boite_jeux img").alt = "boite Demon Slayer the Hinokami Chronicles xbox"
}