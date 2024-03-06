console.log(Notification.permission);

if (Notification.permission === "granted") {
    alert("we have permission");
}

else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(permission => {
        console.log(permission);
    });
}


var modal = document.getElementById("myModal");

var span = document.getElementsByClassName("close")[0];


span.onclick = function () {
    modal.style.display = "none";
};


window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};


modal.style.display = "block";

document.getElementById("acceptCookies").onclick = function () {

    document.cookie = "cookiesAccepted=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";

    modal.style.display = "none";
};
