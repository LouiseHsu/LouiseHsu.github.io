$(document).ready(function() {
  var  pgSection = $(window).height()-60;

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


$('body').scroll(function(){
  var scrollPos = $('body').scrollTop();
  console.log(scrollPos);
  if (scrollPos > pgSection/2 && scrollPos < pgSection*1.5) {
    $('#title').text('About');
    return;
  } 
  if (scrollPos > pgSection*1.5) {
    $('#title').text('Projects');
    return;
  }
  else {
    $('#title').text('Louise Hsu');
    return;
  }

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
