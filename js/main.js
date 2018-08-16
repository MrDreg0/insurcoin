$(document).ready(function(){
  $(document).on("scroll",function(){
    if($(document).scrollTop()>100){
      $(".nav-wrapper").removeClass("large").addClass("small");
    } else{
      $(".nav-wrapper").removeClass("small").addClass("large");
    }
});
  $("#menu").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });
});