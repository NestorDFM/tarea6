(function() {
    $(function() {

        var id = 0;
        $('form').submit(function(e) {
            e.preventDefault(); 
            var moneda = $(this).serializeArray();
            
            console.log(moneda[0].value);
            console.log(moneda[1].value);
            console.log(moneda[2].value);
            
            
            var denominacion = moneda[0].value;

            if (denominacion == null || denominacion.length == 0 ||  /^[A-zA-Z]+$/.test(denominacion) == false ) {
                            alert('Debe ingresar solo letras en el campo denominacion');
                           $('#denominacion').val('').focus();
                            return false;
                   }

            var compra;
            var venta;

             //Guardar valor de compra y venta en variables
            if (Number(moneda[1].value) > 0 && Number(moneda[2].value) > 0) {
                compra = parseFloat(moneda[1].value);
                venta = parseFloat(moneda[2].value);


            }

            //Controla que los numeros ingresados no sean negativos
            if(Number(moneda[1].value) < 0 || Number(moneda[2].value) < 0) {
                alert("Los valores a ingresar deben ser positivos")
               $('#venta').val('').focus();
               $('#compra').val('').focus();
                return false; 

            }
            //controla que compra no sea mayor a venta
            if (compra >= venta) {
                alert("El valor de compra debe ser menor al valor de venta");
                $('#venta').val('').focus();
                $('#compra').val('').focus();
                
                return false; 

            } 
           
           //carga la tabla si los campos estan correctos
            if (Number(moneda[1].value) > 0 && Number(moneda[2].value) > 0) {

                id++;

                var row = '<tr>';
                row += '<td>' + id;
                row += '<td>' + moneda[0].value;
                row += '<td>' + moneda[1].value;
                row += '<td>' + moneda[2].value;

                $('table tbody').append(row);
                $('form').trigger('reset');
                
            }


        });
    });

})();
