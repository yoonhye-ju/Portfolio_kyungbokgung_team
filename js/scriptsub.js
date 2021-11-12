$(function(){
  $("#hamburgermenu").hide();
})

$(function(){
  $("#hamburgernav").click(function(){
      $("#hamburgermenu").toggle();
  })
  $(window).scroll(function(){
    $("#hamburgermenu").hide();
})
})