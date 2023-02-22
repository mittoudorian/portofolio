// Serie de fonction qui modifie le boitier pour correspondre à la console sélectionner
function PS4() { 
    document.querySelector("#boite_jeux img").src = "../../image/Dying_light_2_ps4.jfif" //Modifie l'image de la boite de jeu c'est à dire l'image de la span d'id "boite_jeux"
    document.querySelector("#boite_jeux img").alt = "boite Dying Light 2 PS4" //Modifie la description de l'image de la span d'id "boite_jeux"
}
function PC() { 
    document.querySelector("#boite_jeux img").src = "../../image/Dying_light_2_pc.jfif"
    document.querySelector("#boite_jeux img").alt = "boite Dying Light 2 pc"
}
function PS5() { 
    document.querySelector("#boite_jeux img").src = "../../image/dying_light_2_ps5.jpg"
    document.querySelector("#boite_jeux img").alt = "boite Dying Light 2"
}
function XBOX() { 
    document.querySelector("#boite_jeux img").src = "../../image/Dying_light_2_xbox.jfif"
    document.querySelector("#boite_jeux img").alt = "boite Dying Light 2 xbox"
}