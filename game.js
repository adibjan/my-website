const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let player = {
    x: 100,
    y: 100,
    speed: 3
};

function gameLoop() {
    ctx.clearRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle = "white";
    ctx.fillRect(player.x, player.y, 40, 40);

    requestAnimationFrame(gameLoop);
}

gameLoop();
