/*funcion para suscribete en el footer*/
function suscribete() {
    alert('¡Correo registrado exitosamente! 😎');
}

/*funcion para botones proximamente de autocultivo.html*/
function proximamente() {
    alert('Esta extensión estará disponible proximamente, ¡Suscríbete para más actualizaciones! 😎');
}

//validar registro JAVASCRIPT
$(function () {
    $("#mi-formulario").validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            password: "required",
            fono: "required",
            fecha: "required",
            password2: {
                required: true,
                equalTo: "#password"
            }

        }, //rules
        messages: {

            email: {
                required: 'Ingresa tu correo electrónico',
                email: 'Formato de correo no válido'
            },
            password: {
                required: 'Ingresa una contraseña',
                minlength: 'Caracteres insuficiente'
            },
            fono: {
                required: 'Ingrese un número de celular',
                minlength: 'Cantidad de digitos insuficiente'
            },
            fecha: {
                required: 'Seleccione una fecha válida',
                min: 'Fecha no corresponde'
            },
            password2: {
                required: 'Rengresa la contraseña',
                equalTo: 'Las contraseñas ingresadas no coinciden',
                minlength: 'Caracteres insuficiente'

            }

        }//messages
    }); //$('#mi-formulario').validate
}); //function

//Validar correo suscripción Javascript
function validacion()
{
    cor=document.getElementById('correo').value;
    if(cor.length<=11)
        {
            alert('Error: debe ingresar un correo válido.');
            document.getElementById('correo').value="";
            document.suscripcion.cor.focus();
            return false;
        }
    else{
        alert('¡Suscripción realizada correctamente!');
    }
    return true;
}