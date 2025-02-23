<?php
include('../conecxion/conecxion.php');

$action = $_GET['action'] ?? '';

switch ($action) {
    case 'busper':
        if (isset($_POST['codigo'])) {
            $codigo = $cnn->real_escape_string($_POST['codigo']);
            
            $sql = "SELECT nombres , apellidos FROM personal WHERE dni = '$codigo'";
            $resultado = $cnn->query($sql);
        
            if ($resultado->num_rows > 0) {
                $fila = $resultado->fetch_assoc();
                echo $fila['nombres'] ." ".$fila['apellidos'] ;
            } else {
                echo ""; 
            }
        }
    break;
    
    default:
    echo json_encode(["status" => "error", "message" => "Acción no válida"]);
        break;
}
?>

