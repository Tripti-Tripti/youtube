var timer = 60;
var hitrn = 0;
var score = 0;

function makeBubble() {
    var clutter = "";
    for (var i = 1; i <= 168; i++) {

        var rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`
    }

    document.querySelector("#pannel-bottom").innerHTML = clutter;
}

function runTimer() {

    var timeint = setInterval(function () {
        if (timer > 0) {

            timer--;
            document.querySelector("#time").textContent = timer;
        } else {
            clearInterval(timeint);
            document.querySelector("#pannel-bottom").innerHTML = `<h1>Game Over</h1>`;
        }
    }, 1000)
}
function makeNewHit() {
    hitrn = Math.floor(Math.random() * 10)
    document.querySelector("#hitval").textContent = hitrn;
}

function incScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

document.querySelector("#pannel-bottom").addEventListener("click", function (dets) {
    var clickedNum = Number(dets.target.textContent);
    if (clickedNum === hitrn) {
        incScore();
        makeBubble();
        makeNewHit();
    }
});



makeNewHit();
makeBubble();
runTimer();