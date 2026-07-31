/* =====================================================
   CREW CENTER THEME MANAGER
   Dark mode default + persistent light mode
===================================================== */


document.addEventListener("DOMContentLoaded", () => {


    const body = document.body;

    const themeButton =
        document.getElementById("themeToggle");


    const themeIcon =
        document.getElementById("themeIcon");



    /*
        Charger le thème sauvegardé

        Dark = valeur par défaut
    */


    const savedTheme =
        localStorage.getItem("crewTheme");



    if(savedTheme === "light"){

        body.classList.add("light");

        updateIcon(true);

    }
    else{

        body.classList.remove("light");

        updateIcon(false);

    }





    /*
        Bouton changement thème
    */


    if(themeButton){


        themeButton.addEventListener(
            "click",
            () => {


                const isLight =
                    body.classList.toggle("light");



                localStorage.setItem(
                    "crewTheme",
                    isLight ? "light" : "dark"
                );



                updateIcon(isLight);


            }
        );


    }





    function updateIcon(light){


        if(!themeIcon) return;



        if(light){


            themeIcon.setAttribute(
                "data-lucide",
                "moon"
            );


        }
        else{


            themeIcon.setAttribute(
                "data-lucide",
                "sun"
            );


        }



        if(window.lucide){

            lucide.createIcons();

        }


    }



});
