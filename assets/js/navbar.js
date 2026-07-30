document.addEventListener(
"DOMContentLoaded",
()=>{


const user =
getSession();



if(!user) return;



const username =
document.getElementById(
"userName"
);



if(username){

username.innerHTML =
user.username;

}



const rank =
document.getElementById(
"userRank"
);



if(rank){

rank.innerHTML =
user.rank;

}




const staffButton =
document.getElementById(
"staffAccess"
);



if(
staffButton
&&
!isStaff()
){

staffButton.style.display="none";

}




const logoutButton =
document.getElementById(
"logoutButton"
);



if(logoutButton){

logoutButton.onclick =
logout;

}



});
