///////////////////////////////
// Side Navigation Functions //
///////////////////////////////
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

//////////////////////////
//    Initialize Site   //
//////////////////////////
$(document).ready(function () {
  // Flip Navigation
  var flipNav = $("#flip");
  if (flipNav && flipNav.length) {
    flipNav.click(function () {
      $("#panel").slideToggle("slow");
    });
  }

  // Slide Up Navigation
  var slideUpBtn = $(".slideUpBtn");
  if (slideUpBtn && slideUpBtn.length) {
    slideUpBtn.click(function () {
      $("ul").slideUp();
    });
  }

  var slideDownBtn = $(".slideDownBtn");
  if (slideDownBtn && slideDownBtn.length) {
    slideDownBtn.click(function () {
      $("ul").slideDown();
    });
  }
});
