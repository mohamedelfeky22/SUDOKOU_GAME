var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var playerName = document.getElementsByName("playerName")[0];
var span = document.getElementsByClassName("close")[0];
var play = document.getElementById("playBtn");
var name = document.getElementById("name");
btn.onclick = function () {
  modal.style.display = "block";
}

span.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
////////////////////////////////////////////////////////////////////
//let's play button
play.onclick = function () {
  window.sessionStorage.setItem('name', playerName.value);
  window.open("Game.html", "_self");
};
