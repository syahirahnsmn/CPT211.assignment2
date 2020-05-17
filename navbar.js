window.onscroll = function() {navscroll()};
function navscroll() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    document.getElementById("navbar").style.padding = "0vw";
    document.getElementById("navbar").style.backgroundColor = "#bb89b2";
    document.getElementById("topbtn").style.display = "block";
  } else {
    document.getElementById("navbar").style.padding = "1.5vw";
    document.getElementById("navbar").style.backgroundColor = "transparent";
    document.getElementById("topbtn").style.display = "none";
  }
}