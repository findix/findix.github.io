$(function(){
  var numLines = 50;
  for (var i = 0; i < numLines; i++) {
    $('ul').append('<li></li>');
  }
  
  var zInc = 360 / $('li').length;
  for (var i = 0; i < $('li').length; i++) {
    $('li').eq(i).css('-webkit-animation-delay', (i * 3/numLines) + 's')
    //.css('border-color', 'hsla(' + ( 255/numLines * i) + ', 50%, 50%, 1)')
  }
})