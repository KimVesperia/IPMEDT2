$("button").click(function () {
  $("#mydiv").fadeIn();
  $("button").css("visibility", "hidden");
  $(".timeHover").css("visibility", "hidden");
  $(".returnHover").css("visibility", "visible");
});

$(".close").click(function () {
  $("#mydiv").fadeOut();
  $("button").css("visibility", "visible");
  $(".timeHover").css("visibility", "visible");
  $(".returnHover").css("visibility", "hidden");
});
