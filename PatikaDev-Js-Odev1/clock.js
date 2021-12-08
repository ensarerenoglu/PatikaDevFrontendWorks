let name = prompt("Adınızı Belirtiniz:");
if(name != null || name != NaN || name !="" || name !=" "){
    document.getElementById("welcomeMessage").innerText = `Merhaba ${name}, Hoşgeldin`;
}
else{
    name = prompt("Lütfen Adınızı Belirtiniz: ");
}

function getDate(){
    let d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth();
    let day = d.getDate();
    let dayNo = d.getDay();
    let days = new Array("Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi");
    dayName = days[dayNo];
    let second = d.getSeconds();
    let munite = d.getMinutes();
    let hour = d.getHours();
    day = day<10 ? "0"+day: day;
    hour = hour<10 ? "0"+hour: hour;
    munite = munite<10 ? "0"+munite: munite;
    second = second<10 ? "0"+second: second;
    
    document.getElementById("dateArea").innerText = `${day}.${month+1}.${year} ${dayName} günü, ${hour}:${munite}:${second}`
};
setInterval(getDate,1000);



