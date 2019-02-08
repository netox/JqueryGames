//variables para poder pintar
var canvas = $('canvas');
var context = canvas[0].getContext('2d');
var lastEvent;
var isClicked = false;
//var color = $('.selected').css('background-color');

//codigo para poner el circulo sobre la paleta de controles
$('.controls').on('click','li',function(){
    $(this).siblings().removeClass('selected');
    $(this).addClass('selected');
    //color = $('.selected').css('background-color');
});

//mostrar y ocultar la paleta de colores para agregar uno nuevo
$('#revealColorSelect').click(function(){
    $('#colorSelect').toggle();
});

//funcion para obtener el color cada vez que cambie los input
function getColor(){
    var red = $('#red').val();
    var green = $('#green').val();
    var blue = $('#blue').val();

    var rgb = 'rgb('+ red + ',' + green + ',' + blue + ')';
    $('#newColor').css('background',rgb);
}

//metodo change para mandar a llamar la funcion getColor
$('input[type=range]').change(getColor);

//boton para agregar un nuevo color 
$('#addNewColor').click(function(){
    var li = $("<li></li>");
    li.css('background',$('#newColor').css('background'));
    $('.controls ul').append(li);
});


canvas.mousedown(function(e){
    isClicked = true;
    lastEvent = e;
}).mousemove(function(e){
    if(isClicked){
        context.beginPath();
        context.strokeStyle = $('.selected').css('background-color');
        context.moveTo(lastEvent.offsetX,lastEvent.offsetY);
        context.lineTo(e.offsetX,e.offsetY);
        context.stroke();
        lastEvent = e;
    }
    
}).mouseup(function(){
    isClicked = false;
}).mouseleave(function(){
    canvas.mouseup();
});