
/* ===========================================
   Validar Todos los Campos
   =========================================== */

function validar_todo(){
  var expresion = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/;
  var esta_ok = true;
  if(document.getElementById("name").value.length < 2){
    esta_ok = false;
  }
  if(!expresion.test(document.getElementById("email").value)){
    esta_ok = false;
  }
  if(document.getElementById("asunto").value.length < 2){
    esta_ok = false;
  }
  if(document.getElementById("mensaje").value.length < 2){
    esta_ok = false;
  }
  return esta_ok;
}

/* ===========================================
   Evento Modal
   =========================================== */

function evento_envio(){
    document.getElementById("header").className="modal_mensaje_header";
    document.getElementById("modal_mensaje").className="modal_mensaje";
    var elemento = validar_todo();
    var titulo = document.getElementById("titulo_modal");
    var descripcion = document.getElementById("descripcion_modal");
    if(elemento == false){
        document.getElementById("ventana").className="ventana_error";
        titulo.innerHTML += "Mensaje Fallido";
        descripcion.innerHTML += "Por favor, complete el formulario correctamente";
    }else {
        document.getElementById('ventana').className="ventana_exito";
        titulo.innerHTML += "Mensaje Enviado";
        descripcion.innerHTML += "Gracias por confiar en nosotros";
    }
}

function evento_modal(){
    document.getElementById("modal_mensaje").style.visibility = "hidden";
}

