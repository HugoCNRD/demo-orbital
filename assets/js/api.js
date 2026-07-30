const API_URL =
"https://crew-center-api.hugobatigne.workers.dev/";





async function api(action,data={}){


    const response =
    await fetch(API_URL,{

        method:"POST",

        headers:{

            "Content-Type":
            "application/json"

        },


        body:JSON.stringify({

            action:action,

            ...data

        })


    });



    return await response.json();



}
