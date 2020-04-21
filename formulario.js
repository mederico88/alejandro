$(document).ready(function(){
    $('#btnSend').click(function(){
        
        var errores='';

       // VALIDAR NOMBRE
       if ($('#nombre').val()==0) {
           errores += '<p>Complete el campo Nombre</p>';
       } 

       if ($('#mail').val()=='') {
        errores += '<p>Ingrese un correo electr&oacute;nico</p>';
        } 

        if ($('#mensaje').val()==0) {
            errores += '<p>Complete el campo "Mensaje"</p>';
        } 

        //// ERRORES

       if (errores == ''== false) {
        var mensaje_nodal=  '<div class="MODOincompleto">'+
                                '<div class="mensajeIncompleto">'+
                                    '<h3>Error Encontrados</h3>'+
                                    errores+
                                    '<span id="btncerrar">Cerrar</span>'+
                                '</div>'+
                            '</div>'
        $('body').append(mensaje_nodal);
           
       };
      //cerrar ventana

       $('#btncerrar').click(function () {
           $('.MODOincompleto').remove()
       });

     
    });
}())