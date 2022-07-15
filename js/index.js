$('.header-inner').mouseenter(function () {
  let a = $(".JsuNav").animate()
  clearInterval(a)
  $(".JsuNav").animate({
   
    width: "100%",
    height: "350px",

  }, 300);


});
$('.header-nav').mouseleave(function () {
  $(".JsuNav").animate({
    width: "100%",
    height: "0px",

  }, 300);

});

$(".sq1 a").mouseenter(function () {
  let a =$(".sq1 a").animate()
  clearInterval(a)
  $(this).animate({
    opacity: '0.8'

  }, 200);
});


$('.sq1 a').mouseleave(function () {
  $(this).animate({
    opacity: '0'

  }, 200);

});
// show-img
$(".show-img a").mouseenter(function () {
  let a =$(".show-img a").animate()
  clearInterval(a)
  $(this).animate({
    opacity: '0.8'

  }, 200);
});
$('.show-img a').mouseleave(function () {
  $(this).animate({
    opacity: '0'

  }, 200);

});
// flex-down
// ("p").fadeIn("fast",function(){
//   alert("Animation Done.");
// });
$(".flex-down li").mouseenter(function () {
  let a =$(".flex-down li").animate()
  clearInterval(a)
  $(".flex-down div").animate({
    opacity: '1'

  }, 200);
});
$('.flex-down li').mouseleave(function () {

  $(".flex-down div").animate({
    opacity: '0'

  }, 200);

});