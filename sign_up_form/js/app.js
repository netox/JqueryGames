$('span').hide();

var longitud = function(){
    if($('#password').val().length > 8 ){
        $('#password').next().hide();
    } else {
        $('#password').next().show();
    }
}

var compara = function(){
    if($('#password').val() === $('#confirm').val()){
        $('#confirm').next().hide();
    } else {
        $('#confirm').next().show();
    }
}

$('#password').keyup(longitud).keyup(compara);
$('#confirm').keyup(compara).keyup(longitud);

