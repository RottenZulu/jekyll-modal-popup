/*
Jquery for Portfolio Modal Popup
*/

$(document).ready(function(e) {

//appends an "active" class to .popup and .popup-content when the "Open" button is clicked
  $(".open").on("click", function(){
    $(".popup-overlay, .popup-content").addClass("active");
  });

//removes the "active" class to .popup and .popup-content when the "Close" button is clicked
  $(".close, .popup-overlay").on("click", function(){
    $(".popup-overlay, .popup-content").removeClass("active");
  });

});
