$(document).ready(function(){
    $('.design-row p').hide();
    $('.design-row').click(function(){
        $('.design-row p').toggle();
        $('.design-row img').toggle();
    });
});
$(document).ready(function(){
    $('.card-dev p').hide();
    $('.card-dev').click(function(){
        $('.card-dev p').toggle();
        $('.card-dev img').toggle();
    });

});
$(document).ready(function(){
    $('.bottom p').hide();
    $('.bottom').click(function(){
        $('.bottom p').toggle();
        $('.bottom img').toggle();
    });
    $('.col').hover(function(){
      $('.text',this).slidetoggle('slow');
    });
});