$(function(){
  $('#highlight').click(function(){
    // Remove existing highlights
    $('.highlighted').removeClass('highlighted');
    
    // Get selector and apply .hightlighted
    var selector = $('#selector').val();
    $(selector).addClass('highlighted');
  })
})