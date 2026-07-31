/* =====================================================
   CREW CENTER DASHBOARD DATA
===================================================== */


/*
    URL DU CLOUDFLARE WORKER

    A remplacer par ton URL
*/

const API_URL = "https://crew-center-api.hugobatigne.workers.dev/";





document.addEventListener("DOMContentLoaded", async ()=>{


    const session =
        JSON.parse(
            localStorage.getItem("crewSession")
        );



    if(!session){

        window.location.href="../index.html";

        return;

    }




    loadWelcome(session);

    loadDashboard(session.username);



});









/* =====================================================
   WELCOME
===================================================== */


function loadWelcome(session){


    const welcome =
        document.getElementById(
            "welcomeUsername"
        );



    if(welcome){

        welcome.textContent =
            session.username;

    }


}









/* =====================================================
   MAIN DASHBOARD LOADER
===================================================== */


async function loadDashboard(username){



    try{


        const response =
        await fetch(
            API_URL,
            {

                method:"POST",


                headers:{

                    "Content-Type":
                    "application/json"

                },


                body:JSON.stringify({

                    action:"getPilotDashboard",


                    username:username


                })


            }

        );



        const data =
            await response.json();





        if(!data.success){

            console.error(data.error);

            return;

        }






        displayPilotStats(
            data
        );



        displayLastPirep(
            data.lastPirep
        );



        displayRank(
            data.rank
        );



    }

    catch(error){


        console.error(
            "Dashboard error:",
            error
        );


    }



}









/* =====================================================
   PILOT STATS
===================================================== */


function displayPilotStats(data){



    const hours =
        document.getElementById(
            "vaHours"
        );



    const pireps =
        document.getElementById(
            "pirepsCount"
        );




    if(hours){

        hours.textContent =
            data.hours || "0:00";

    }





    if(pireps){

        pireps.textContent =
            data.pireps || 0;

    }







}









/* =====================================================
   RANK DISPLAY
===================================================== */


function displayRank(rank){


    if(!rank)
        return;



    const current =
        document.getElementById(
            "currentRank"
        );



    const next =
        document.getElementById(
            "nextRank"
        );



    const progress =
        document.getElementById(
            "rankProgress"
        );



    const currentHours =
        document.getElementById(
            "hoursCurrent"
        );



    const needed =
        document.getElementById(
            "hoursNeeded"
        );





    if(current)
        current.textContent =
        rank.current;





    if(next)
        next.textContent =
        rank.next;





    if(progress)
        progress.style.width =
        rank.progress+"%";





    if(currentHours)
        currentHours.textContent =
        rank.currentHours+"h";





    if(needed)
        needed.textContent =
        rank.nextHours+"h";





}









/* =====================================================
   LAST PIREP
===================================================== */


function displayLastPirep(pirep){



    const container =
        document.getElementById(
            "lastPirep"
        );



    if(!container)
        return;




    if(!pirep){


        container.innerHTML=`

        <div class="empty-state">

        <i data-lucide="file-x"></i>

        <p>
        No PIREP found
        </p>

        </div>

        `;


        lucide.createIcons();


        return;


    }





    container.innerHTML=`

    <div class="pirep-stat">

        <span>
        Route
        </span>

        <strong>
        ${pirep.route}
        </strong>

    </div>



    <div class="pirep-stat">

        <span>
        Aircraft
        </span>

        <strong>
        ${pirep.aircraft}
        </strong>

    </div>




    <div class="pirep-stat">

        <span>
        Flight Time
        </span>

        <strong>
        ${pirep.time}
        </strong>

    </div>




    <div class="pirep-stat">

        <span>
        Status
        </span>

        <strong>

        ${pirep.status}

        </strong>

    </div>



    `;



}

