var enviar = document.getElementById("enviar");
var msg = document.getElementById("msg");

enviar.addEventListener("click", function () {
    fetch("https://email-anonimo.onrender.com/send/anonymous/email", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            subject: "Sugestão Extenção",
            email: "silva.samueldev@gmail.com",
            message: msg.value,
        })
    })
})

var send = document.getElementById("send");
send.addEventListener('mouseenter', function () {
    send.src = "assets/img/send-alter.png";
});

send.addEventListener('mouseout', function () {
    send.src = "assets/img/send.png";
});

enviar.addEventListener('mouseenter', function () {
    send.src = "assets/img/send-alter.png";
});

enviar.addEventListener('mouseout', function () {
    send.src = "assets/img/send.png";
});