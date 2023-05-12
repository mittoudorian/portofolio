// Serie de fonction qui modifie le boitier pour correspondre à la console sélectionner
function PS4() { 
    document.querySelector("#boite_jeux img").src = "../../image/Minecraft_ps4.jpg" //Modifie l'image de la boite de jeu c'est à dire l'image de la span d'id "boite_jeux"
    document.querySelector("#boite_jeux img").alt = "boite minecraft PS4" //Modifie la description de l'image de la span d'id "boite_jeux"
}
function SWITCH() { 
    document.querySelector("#boite_jeux img").src = "../../image/Minecraft_switch.jpg"
    document.querySelector("#boite_jeux img").alt = "boite minecraft switch"
}
function PS5() { 
    document.querySelector("#boite_jeux img").src = "../../image/Minecraft_ps5.jfif"
    document.querySelector("#boite_jeux img").alt = "boite minecraft PS5"
}
function XBOX_ONE() { 
    document.querySelector("#boite_jeux img").src = "../../image/Minecraft_xbox_one.jpg"
    document.querySelector("#boite_jeux img").alt = "boite minecraft xbox one"
}