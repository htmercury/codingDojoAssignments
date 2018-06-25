let world = [
    [2,2,2,2,2,2,2,2,2,2],
    [2,1,1,1,1,1,1,3,1,2],
    [2,1,2,2,3,2,2,1,1,2],
    [2,1,1,2,1,2,1,1,1,2],
    [2,1,2,2,1,2,1,2,1,2],
    [2,1,1,2,2,2,1,2,1,2],
    [2,1,2,2,1,1,1,2,1,2],
    [2,1,3,1,1,1,1,2,3,2],
    [2,2,2,2,2,2,2,2,2,2]
];

let score = 0;

let pacman = {
    x: 1,
    y: 1
}

function displayWorld() {
    let output = "";
    for (var i = 0; i < world.length; i++) {
        output += "<div class='row'>";
        for (var j=0; j<world[i].length; j++) {
            if (world[i][j] == 3)
                output += "<div class='cherry'></div>";
            if (world[i][j] == 2)
                output += "<div class='brick'></div>";
            if (world[i][j] == 1)
                output += "<div class='coin'></div>";
            if (world[i][j] == 0)
                output += "<div class='empty'></div>";
        }
        output += "</div>";
    }
    console.log(output);
    document.getElementById('world').innerHTML = output;
}

function displayPacman() {
    document.getElementById('pacman').style.top = pacman.y*22 + 1 +"px";
    document.getElementById('pacman').style.left = pacman.x*22 +"px";
}

function displayScore() {
    document.getElementById('score').innerHTML = score;
}

displayWorld();
displayPacman();
displayScore();

document.onkeydown = function(e) {
    if(e.keyCode == 37 && world[pacman.y][pacman.x-1] != 2) {
        pacman.x --;
        document.getElementById('pacman').style.transform = "scaleX(1)";
    }
    else if (e.keyCode == 39 && world[pacman.y][pacman.x+1] != 2) {
        pacman.x ++;
        document.getElementById('pacman').style.transform = "scaleX(-1)";
    }
    else if (e.keyCode == 38 && world[pacman.y-1][pacman.x] != 2) {
        pacman.y--;
        document.getElementById('pacman').style.transform = "rotate(90deg)";
    }
    else if (e.keyCode == 40 && world[pacman.y+1][pacman.x] != 2) {
        pacman.y++;
        document.getElementById('pacman').style.transform = "rotate(-90deg)";
    }
    displayPacman();

    if(world[pacman.y][pacman.x] == 1) {
        world[pacman.y][pacman.x] = 0;
        score += 10;
        displayScore();
    }

    if(world[pacman.y][pacman.x] == 3) {
        world[pacman.y][pacman.x] = 0;
        score += 50;
        displayScore();
    }

    displayWorld();
}