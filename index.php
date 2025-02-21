<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro de Asistencia</title>
    <link rel="stylesheet" href="lib/boostrap-css/bootstrap.min.css">
    <link rel="stylesheet" href="lib/boostrap-iconos/bootstrap-icons.min.css">
    <link rel="shortcut icon" href="img/muni.png" type="image/x-icon">
    <style>
    
#hora {
  font-size: 3.5rem; 
  font-weight: bold;
}
#mensaje {
  font-size: 1.2rem;
  font-weight: bold;
}
#mensaje2 {
  font-size: 1.1rem;
  font-weight: bold;
  color: red;

}
.cerrado {
  color: red;
}
.abierto {
  color: green;
}
#carasis {
  width: 28rem; 
  top: -2rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 
            0 4px 6px -2px rgba(0, 0, 0, 0.05);
 
}
#headercardasis{
  background-color: #0c0c24;
}
#fecha {
  font-size: 1.1rem;
  font-weight: bold; 
}
#turno-actual {
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 1rem;
}
    </style>
</head>
<body>
<div class="container d-flex justify-content-center align-items-center vh-100">
        <div class="card text-center shadow-lg " id="carasis">
            <div class="card-header  text-white" id="headercardasis">
                <h1 class="card-title">Registro de Asistencia</h1>
            </div>
            <div class="card-body">
                <p id="fecha" class="text-muted"></p>
                <p id="hora" class="my-3"></p>
                <p id="mensaje"></p>
                <p id="mensaje2"></p>
                <p id="turno-actual"></p> 

                <!-- Formulario para enviar datos -->
                <form id="formulario-asistencia">
                    <!-- Campos ocultos para almacenar los datos -->
                    <input type="text" id="adni"   name="adni"> 
                    <input type="hidden" id="dia" name="dia">
                    <input type="hidden" id="turno" name="turno">
                    <input type="hidden" id="afecha" name="afecha">
                    <input type="hidden" id="fecha_actual" name="fecha_actual" value="<?php echo date("d-m-Y"); ?>">
                    <input type="hidden" id="ashora" name="ashora">
                    <input type="hidden" id="estado"   name="estado"> 
                
                    <a href="login.php" class="btn btn-success">
                       <i class="bi bi-box-arrow-in-right"></i> Acceder al Sistema
                      </a>
                      <!-- style="display: none;" -->
                    <button type="submit" class="btn btn-success mt-3 " >Enviar Datos</button>
                </form>
            </div>
        </div>
    </div>
<script src="lib/boostrap-js/bootstrap.bundle.min.js"></script>
<script src="javascrip/asistenciaau.js"></script>
</body>
</html>