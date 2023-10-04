batMouse = document.getElementById("batMouse");
document.onmousemove = batCursorFollow;

function batCursorFollow(evenement) {
  var x = evenement.pageX;
  var y = evenement.pageY;
  batMouse.style.left = x - 30 + "px";
  batMouse.style.top = y + 10 + "px";

  batMouse.style.transition = "left 0.2s";
  batMouse.style.transition = "top 0.1s";
}
