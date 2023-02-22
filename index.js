/*--------------------- Dark/Light mode ---------------------*/

const changeTheme = document.getElementById('change-theme'); // création d'une constante qui prend la valeur d'un ID
let toggle = 0 // Variable qui permet le changement du thème

changeTheme.addEventListener('click', ()=>{
    /*
    Action : Au clique sur le bouton changez le thème de la page web
    Sortie : Si la variable de toggle est égal à 0 alors appliquer le thème clair (défaut) sinon si la valeur est différente de 0 alors appliquer le theme sombre
    */
    if(toggle === 0){
        document.documentElement.style.setProperty('--text', '#333');
        document.documentElement.style.setProperty('--background', '#fff');
        document.documentElement.style.setProperty('--btn-background', '#eee');
        toggle++;
    }
    else
    {
        document.documentElement.style.setProperty('--text', '#fff');
        document.documentElement.style.setProperty('--background', '#262626');
        document.documentElement.style.setProperty('--btn-background', '#333');
        toggle--;
    }
})
