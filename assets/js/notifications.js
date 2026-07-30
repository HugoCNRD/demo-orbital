async function loadNotifications(){


const container =
document.getElementById(
"notifications"
);



if(!container) return;



container.innerHTML =
`
<div class="notification-empty">

No new notifications

</div>
`;



}
