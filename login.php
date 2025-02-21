<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login Corporativo</title>
  <link rel="stylesheet" href="lib/boostrap-css/bootstrap.min.css">
  <link rel="stylesheet" href="lib/boostrap-iconos/bootstrap-icons.min.css">
  <link rel="stylesheet" href="estilos/estilosindex.css">
  <link rel="shortcut icon" href="img/muni.png" type="image/x-icon">

</head>
<body>
  <div class="login-container">
    <img src="img/muni.png" id="x1" alt="Logo de la Empresa">
    <h3>Acceso Corporativo</h3>
    <form action="proceso/login.php" method="post">
      <div class="form-group position-relative">
        <i class="bi bi-person-fill"></i>
        <input type="text" class="form-control" placeholder="Usuario" name="usuario" required>
      </div>
      <div class="form-group position-relative">
      
        <i class="bi bi-lock-fill"></i>
        <input type="password" class="form-control" placeholder="Contraseña" name="clave" required>
      </div>
      <button type="submit" class="btn btn-custom btn-block"><span id="ingre">Ingresar</span></button>
      <?php
      $dato = isset($_GET['dato']) ? $_GET['dato'] : '';
      if (!empty($dato)) {
          echo "<spam style>$dato</spam>"; 
      } else {
          echo "<spam> </spam>";
      }
    ?>
    </form>
  </div>

  
<script src="lib/boostrap-js/bootstrap.bundle.min.js"></script>
<script src="lib/jquery-3.5.1.slim.min.js"></script>
<script src="lib/popper.min.js"></script>
<script src="lib/bootstrap.min.js"></script>
</body>
</html>
