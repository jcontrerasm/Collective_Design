<?php

    if(isset($_POST["nombre"]) && !empty ($_POST["nombre"]) &&
        isset($_POST["email"]) && !empty ($_POST["email"]) &&
        isset($_POST["asunto"]) && !empty ($_POST["asunto"]) &&
        isset($_POST["mensaje"]) && !empty ($_POST["mensaje"])){

        $destino = "juan_cc1991@hotmail.com";
        $contenido = "Mensaje recibido" . "\n" .
                     "De : " . $_POST["nombre"] . "\n" .
                     "Email : " . $_POST["email"] . "\n" .
                     "Asunto : " . $_POST["asunto"] . "\n" .
                     "Mensaje : " . $_POST["mensaje"];

        mail($destino , $_POST["asunto"] , $contenido , $_POST["email"]);

    }

    sleep(2);
    header("Location:contacto");
