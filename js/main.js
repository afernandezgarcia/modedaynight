
/******
 * MODE DAY / NIGHT & LOCALSTORAGE
 ******/

$(document).ready(function($) {
  var mode = localStorage.getItem('mode');
  if (mode)
    $('body').addClass(mode);
    $('.btn-secondary').addClass(mode);
    $('.nav-link').addClass(mode);
    $('.active').addClass(mode);
    $('.mastfoot').addClass(mode);
    $('.day').addClass(mode);
    $('.night').addClass(mode);

  $(".day").click(function() {
    $("body").addClass("light");
    $(".btn-secondary").addClass("light");
    $(".nav-link").addClass("light");
    $(".active").addClass("light");
    $(".mastfoot").addClass("light");
    $(".night").addClass("light");
    localStorage.setItem('mode', 'light');
  });

  $(".night").click(function() {
    $("body").removeClass("light");
    $(".btn-secondary").removeClass("light");
    $(".nav-link").removeClass("light");
    $(".active").removeClass("light");
    $(".mastfoot").removeClass("light");
    $(".day").addClass("light");
    localStorage.setItem('mode', null);
  });
});



/******
 * BUTTONS DAY / NIGHT CSS
 ******/

$(document).ready(function(){
  $("#show").click(function(){
    $(".day").hide();
  });
  $("#show").click(function(){
    $(".night").show();
  });
  $("#hide").click(function(){
    $(".night").hide();
  });
  $("#hide").click(function(){
    $(".day").show();
  });
});