const $portfolio = document.querySelector(".sec-portfolio-js");
const $modalImgPorfolio = document.querySelector(".img-modal-js");

$portfolio.addEventListener("click", (e) => {
    //console.log(e.target.classList);
    if (e.target.classList.contains("img-btn-modal-js")) {
        //SRC
        let urlImg = e.target.attributes[0].nodeValue
        //add modal
        $modalImgPorfolio.src = urlImg;
    }
});

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
