$(document).ready(function() {

  $("a").click(function(e) {
    var linkHref = $(this).attr('href');
    
    $('html, body').animate({
      scrollTop: $(linkHref).offset().top
    });

    e.preventDefault();
    
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
