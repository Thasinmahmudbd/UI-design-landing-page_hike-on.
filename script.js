window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("ancor").className = "header_on_scroll";
  } else {
    document.getElementById("ancor").className = "header";
  }
}