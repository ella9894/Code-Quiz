function displayScores() {
    var highScores = JSON.parse(window.localStorage.getItem("highscore")) || [];
    highScores.sort(function (x, y) {
        return y.score - x.score;
    });

    highScores.forEach(function (score) {
        var listEl = document.createElement("li");
        listEl.textContent = score.initials + "-" + score.score;

        var orderedList = document.getElementById("highscore");
        orderedList.appendChild(listEl);
    });
}   

function clearScores() {
    window.localStorage.removeItem("highscore");
    window.location.reload();
}

document.getElementById("clear").onclick = clearScores;

displayScores();