const WORKER_URL = "https://crew-center-api.hugobatigne.workers.dev/";


document.addEventListener("DOMContentLoaded",()=>{


    const session = localStorage.getItem("crew_session");


    if(session){

        window.location.href="https://hugocnrd.github.io/demo-orbital/crew/dashboard.html";

    }



});



const form=document.getElementById("loginForm");



form.addEventListener("submit",async(e)=>{


    e.preventDefault();



    const username =
    document.getElementById("username").value.trim();


    const password =
    document.getElementById("password").value.trim();



    const button =
    document.getElementById("loginButton");


    const message =
    document.getElementById("message");



    button.innerHTML="Signing in...";

    button.disabled=true;



    try{


        const response = await fetch(WORKER_URL,{

            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },


            body:JSON.stringify({

                action:"login",

                username:username,

                password:password

            })


        });



        const data = await response.json();



        if(data.success){


            localStorage.setItem(
                "crew_session",
                JSON.stringify(data.user)
            );



            message.style.color="#45ff91";

            message.innerHTML=
            "Login successful. Redirecting...";



            setTimeout(()=>{

                window.location.href=
                "https://hugocnrd.github.io/demo-orbital/crew/dashboard.html";

            },1000);



        }

        else{


            message.style.color="#ff5757";

            message.innerHTML=data.message;


        }



    }


    catch(error){


        message.style.color="#ff5757";

        message.innerHTML=
        "Connection error with server";


        console.error(error);


    }



    button.innerHTML="Sign In";

    button.disabled=false;



});
