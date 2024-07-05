$(function(){ //Cuando está listo el documento

    setTimeout(function(){ 
    $('.preload').hide('fast'); //ocultar el loader
    $('#foo').removeClass('cover');//quitar el cover
    }, 8000);//Después de 5s ocultar el preload
    
  });
  