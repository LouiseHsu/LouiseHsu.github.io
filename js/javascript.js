$(document).ready(function() {

  $("a").click(function(e) {
    var linkHref = $(this).attr('href');
    
    $('html, body').animate({
      scrollTop: $(linkHref).offset().top
    });

    e.preventDefault();
    
  });
  
});