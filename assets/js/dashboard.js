document.addEventListener(
"DOMContentLoaded",
async()=>{


const user =
requireLogin();



document.getElementById(
"pilotName"
).innerHTML =
user.username;




try{


const data =
await api(
"getDashboard",
{
username:user.username
}
);



if(!data.success)
throw "Error";




document.getElementById(
"hours"
).innerHTML =
data.hours;



document.getElementById(
"pireps"
).innerHTML =
data.pireps;



document.getElementById(
"rank"
).innerHTML =
data.rank;



document.getElementById(
"ifGrade"
).innerHTML =
data.ifGrade || "Unknown";



document.getElementById(
"currentFlight"
).innerHTML =
data.flight ||
"No flight currently";



document.getElementById(
"lastPirep"
).innerHTML =
data.lastPirep ||
"No PIREP found";



document.getElementById(
"routeWeek"
).innerHTML =
data.routeWeek ||
"No route selected";



document.getElementById(
"nextRank"
).innerHTML =
data.nextRank;



document.getElementById(
"rankProgress"
).style.width =
data.progress+"%";



}



catch(error){


console.error(error);


}



});
