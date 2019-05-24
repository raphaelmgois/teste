//  jQuery(window).load(function () {
  //    $(".loader").delay(15).fadeOut("slow"); //retire o delay quando for copiar!
//    $("#tudo_page").toggle("fast");});



var i = setInterval(function () {
    clearInterval(i);

    // The desired code is only this:
    document.getElementById("loading").style.display = "none";
    document.getElementById("content").style.display = "block";
   
}, 2000);