function updateZuluClock(){


    const clock =
    document.getElementById("zuluClock");


    if(!clock) return;



    const now =
    new Date();



    const zulu =
    now.toISOString()
    .slice(11,19);



    clock.innerHTML =
    zulu + " Z";



}



setInterval(
updateZuluClock,
1000
);


updateZuluClock();
