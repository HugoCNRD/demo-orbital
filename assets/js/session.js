const SESSION_KEY = "crew_session";


function getSession(){

    const session =
    localStorage.getItem(SESSION_KEY);


    if(!session){
        return null;
    }


    return JSON.parse(session);

}





function requireLogin(){


    const user = getSession();


    if(!user){

        window.location.href =
        "/demo-orbital/index.html";

        return;

    }


    return user;

}





function logout(){


    localStorage.removeItem(SESSION_KEY);


    window.location.href =
    "/demo-orbital/index.html";


}





function isStaff(){


    const user=getSession();


    if(!user) return false;


    return (
        user.staff === "Yes"
        ||
        user.staff === true
    );


}
