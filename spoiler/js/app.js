//linea para ocultar los span
$('.spoiler span').hide();

//linea para agregar un button
var button = $("<button>Show Message</button>");

//linea para agregar el boton a la clase spoiler
$('.spoiler').append(button);

//evento para mostrar los span y ocultar los botones
$('button').click(function(){
    $(this).hide();
    //$('.spoiler span').show();
    $(this).prev().show();
});
