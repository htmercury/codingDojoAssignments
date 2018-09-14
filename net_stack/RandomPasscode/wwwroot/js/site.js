// Write your JavaScript code.
console.log("test");
$("#generate").click(() => {
    $.ajax({
        url: "http://localhost:5000/passcode"
    })
    .done((data) => {
        $("h1").text(data[0]); 
        $("span").text(data[1]);
    })
})