$(document).ready(function() {
  var  pgSection = $(window).height()-70;
/*
  $("a").click(function(e) {
    var linkHref = $(this).attr('href');
    console.log($(linkHref).offset().top - 70);
    console.log($(linkHref));
    $('html, body').animate({

      scrollTop: ($(linkHref).offset().top - 70)
    });

    e.preventDefault();
    
  });
  */
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
