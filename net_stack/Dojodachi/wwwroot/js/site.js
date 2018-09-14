// Write your JavaScript code.
$("#feed").click(() => {
    $.ajax({
        url: "/feed"
    })
        .done((data) => {
            $("#msg").text(data[0]);
            $("#pet-full").text(data[1]);
            $("#pet-meals").text(data[2]);
            check();
        })
});

$("#play").click(() => {
    $.ajax({
        url: "/play"
    })
        .done((data) => {
            $("#msg").text(data[0]);
            $("#pet-happ").text(data[1]);
            $("#pet-energy").text(data[2]);
            check();
        });
});

$("#work").click(() => {
    $.ajax({
        url: "/work"
    })
        .done((data) => {
            $("#msg").text(data[0]);
            $("#pet-meals").text(data[1]);
            $("#pet-energy").text(data[2]);
            check();
        })
    });

$("#sleep").click(() => {
    console.log("sleeping");
    $.ajax({
        url: "/sleep"
    })
        .done((data) => {
            $("#msg").text(data[0]);
            $("#pet-energy").text(data[1]);
            $("#pet-happ").text(data[2]);
            $("#pet-full").text(data[3]);
            check();
        });
});

function check() {
    $.ajax({
        url: "/dead"
    })
        .done((data) => {
            if (data) {
                $("#msg").text("Your Dojodachi has passed away...");
                $("#dachi-options").html('<input id="reset" class="btn btn-primary" type="button" value="Restart?" onClick="window.location.reload()">');
            }
            $.ajax({
                url: "/win"
            })
                .done((data) => {
                    if (data) {
                        $("#msg").text("Congratulations! You won!"); $("#dachi-options").html('<input class="btn btn-primary" type="button" value="Restart?" onClick="window.location.href=window.location.href">');
                        $("#dachi-options").html('<input id="reset" class="btn btn-primary" type="button" value="Restart?" onClick="window.location.href=window.location.href">');
                    }
                });
        })
}