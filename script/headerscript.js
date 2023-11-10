//===========Nevigation Bar==========//
//========== ===Animation============//

window.onscroll = function () {
    headerbg();
  };
  
  function headerbg() {
    var header = document.getElementById("header");
  
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      header.classList.add("header-scroll");
    } else {
      header.classList.remove("header-scroll");
    }
  }

  //=============Change Theme==========//
//===================================//

var theme = document.getElementById("theme_button");
function change_mode() {
  var element = document.body;
  element.classList.toggle("light-mode");
}
  