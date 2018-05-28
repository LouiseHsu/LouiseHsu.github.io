$(document).ready(function() {
  var  pgSection = $(window).height()-70;

 $("#title").click(function() {
  console.log("clicked");
  $('html, body').animate({
    scrollTop: (0)
  });
});

 $("#aboutnav, #introarrow").click(function() {
  console.log("clicked");
  $('html, body').animate({
    scrollTop: ($(window).height()-70)
  });
});

$("#projectsnav, #aboutarrow").click(function() {
  console.log("clicked");
  $('html, body').animate({
    scrollTop: (pgSection * 2)
  });
});

/*$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  console.log(scroll);
  console.log((window).height()-70);
  if (scroll < $(window).height()-70) {
    $('#title').text('Projects');
  }
});*/


  function bounceArrow() {
    for(i=0; i<10; i++) {
      $(".arrow").animate({
        marginTop: '+=' + '20px',
        marginBottom: '-=' + '20px'
      }, 400).animate({
        marginTop: '-=' + '20px',
        marginBottom: '+=' + '20px'
      }, 400);
    }
  } 

bounceArrow();
setInterval (bounceArrow, 8000);


});
