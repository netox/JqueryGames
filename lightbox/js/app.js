var modal = $("<div class='modal'></div>");


$('body').append(modal);

/*$('#imageGallery a').click(function(evt){
    //hacemos que el link no redireccione a ningun lado
    evt.preventDefault();
    
    img.attr('src',$(this).attr('href'));
    p.text($(this).children('img').attr('alt'));
    $('.modal').show();
});*/

$('#imageGallery').on('click','a',function(evt){
    //hacemos que el link no redireccione a ningun lado
    evt.preventDefault();
    var img = $('<img>');
var p = $('<p></p>');
modal.append(img);
modal.append(p);
    
    img.attr('src',$(this).attr('href'));
    p.text($(this).children('img').attr('alt'));
    $('.modal').show();
});

$('.modal').click(function(){
    $(this).hide();
});