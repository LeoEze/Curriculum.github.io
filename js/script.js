
// boton arriba
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("btn-arriba").style.display = "block";
  } else {
    document.getElementById("btn-arriba").style.display = "none";
  }
}

document.getElementById("btn-arriba").addEventListener("click", function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
