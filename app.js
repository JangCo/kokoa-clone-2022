const time = document.querySelector(".status-bar__time");

function setTime() {
    const nowdate = new Date();
    let hour = String(nowdate.getHours()).padStart(2, "0");
    let min = String(nowdate.getMinutes()).padStart(2, "0");

    time.innerHTML = hour + " : " + min;
}

setTime();
setInterval(setTime, 1000);