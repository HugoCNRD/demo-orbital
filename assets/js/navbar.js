/* =====================================================
   CREW CENTER NAVBAR MANAGER
===================================================== */



document.addEventListener("DOMContentLoaded", () => {



/* =====================================================
   ZULU CLOCK
===================================================== */


function updateZuluClock(){


    const clock =
        document.getElementById("zuluClock");



    if(!clock) return;



    const now =
        new Date();



    const hours =
        now.getUTCHours()
        .toString()
        .padStart(2,"0");



    const minutes =
        now.getUTCMinutes()
        .toString()
        .padStart(2,"0");



    const seconds =
        now.getUTCSeconds()
        .toString()
        .padStart(2,"0");



    clock.innerHTML = `

        <i data-lucide="clock"></i>

        ${hours}:${minutes}:${seconds} Z

    `;



    if(window.lucide){

        lucide.createIcons();

    }



}



updateZuluClock();


setInterval(
    updateZuluClock,
    1000
);






/* =====================================================
   USER MENU
===================================================== */


const userButton =
    document.getElementById("userButton");


const userDropdown =
    document.getElementById("userDropdown");





if(userButton && userDropdown){



    userButton.addEventListener(
        "click",
        (event)=>{


            event.stopPropagation();



            userDropdown.classList.toggle(
                "active"
            );


        }
    );





    document.addEventListener(
        "click",
        ()=>{


            userDropdown.classList.remove(
                "active"
            );


        }
    );





    userDropdown.addEventListener(
        "click",
        (event)=>{


            event.stopPropagation();


        }
    );


}








/* =====================================================
   SESSION USER DATA
===================================================== */



const session =
    JSON.parse(
        localStorage.getItem("crew_session")
    );





if(session){


    const username =
        document.getElementById(
            "navbarUsername"
        );



    const profileName =
        document.getElementById(
            "profileUsername"
        );



    if(username){

        username.textContent =
            session.username;

    }



    if(profileName){

        profileName.textContent =
            session.username;

    }







    /*
        STAFF ACCESS CONTROL

        IMPORTANT:
        Le bouton existe dans le HTML
        mais il est caché par défaut.

        Il apparaît uniquement
        si staff === true.
    */


    const staffButton =
        document.getElementById(
            "staffCenterButton"
        );



    if(
        staffButton &&
        session.staff === true
    ){

        staffButton.style.display =
            "flex";

    }





}







/* =====================================================
   LOGOUT
===================================================== */


const logout =
    document.getElementById(
        "logoutButton"
    );



if(logout){


    logout.addEventListener(
        "click",
        ()=>{


            localStorage.removeItem(
                "crewSession"
            );



            window.location.href =
                "../index.html";


        }
    );


}







/* =====================================================
   LUCIDE ICONS
===================================================== */


if(window.lucide){

    lucide.createIcons();

}



});
