function popUp() 
	{
        var popUpChoix; /* Variable popUpChoix */

        if (confirm("Envoyer le message")) /* Si le bouton cliquer envoi d'une pop up*/
            { 
                popUpChoix = "OK"; 
                alert("Envoi confirmer")  /* si l'utilisateur a cliquer sur ok alors aficher une alerte */
            }   

        else 
            {
                popUpChoix = "annuler";
                alert("Envoi annuler") /* si l'utilisateur a cliquer sur annuler alors aficher une alerte */
            }
                document.getElementById("popUp").innerHTML = popUpChoix; /* recupèration de la variable */
            }