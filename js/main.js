$(document).ready(function(){
  $(document).on("scroll",function(){
    if($(document).scrollTop()>100){
      $(".nav-wrapper").removeClass("large").addClass("small");
    } else{
      $(".nav-wrapper").removeClass("small").addClass("large");
    }
  });
  $("#toggle-language").on("click", function (evt) {
    evt.preventDefault();
    $("#toggle-language__menu").toggleClass("show");
  })
  $("#menu").on("click",".move-link", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href');
    var top = $(id).offset().top;
    $(".nav-block").toggleClass("menu-open");
    $('body,html').animate({scrollTop: top}, 1500);
  });
  $(".open-mobile-menu").on("click", function(evt) {
    evt.preventDefault();
    $(".nav-block").toggleClass("menu-open");
  })
  $(".close-mobile-menu").on("click", function(evt) {
    evt.preventDefault();
    $(".nav-block").toggleClass("menu-open");
  })
  let graphFill = $(".graph-fill").data("graphPeriod") * 16.5 + "%";
  $(".graph-fill").animate({
    width: graphFill,
    opacity: "1"
  }, 1000);
  let costFill = $(".cost-fill").data("costPrice") / 100000000 * 100 + "%";
  $(".cost-fill").animate({
    width: costFill,
    opacity: "1"
  }, 1000);
});