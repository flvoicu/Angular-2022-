<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET,POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Conecta a la base de datos  con usuario, contraseña y nombre de la BD
$servidor = "localhost"; $usuario = "root"; $contrasenia = ""; $nombreBaseDatos = "empleados";
$conexionBD = new mysqli($servidor, $usuario, $contrasenia, $nombreBaseDatos);

// Consulta datos y recepciona una clave para consultar dichos datos con dicha clave
if (isset($_GET["consultarID"])){
    $sqlEmpleaados = mysqli_query($conexionBD,"SELECT * FROM empleados WHERE id=".$_GET["consultarID"]);
    if(mysqli_num_rows($sqlEmpleaados) > 0){
        $empleaados = mysqli_fetch_all($sqlEmpleaados,MYSQLI_ASSOC);
        echo json_encode($empleaados);
        exit();
    }
    else{  echo json_encode(["success"=>1]); }
}

if (isset($_GET["consultarDNI"])){
    $dni = $_GET["consultarDNI"];
    $sqlEmpleaados = mysqli_query($conexionBD,"SELECT * FROM empleados WHERE dni='$dni'");
    if(mysqli_num_rows($sqlEmpleaados) > 0){
        $empleaados = mysqli_fetch_all($sqlEmpleaados,MYSQLI_ASSOC);
        echo json_encode($empleaados);
        exit();
    }
    else{  echo json_encode(["success"=>1]); }
}

//borrar pero se le debe de enviar una clave ( para borrado )
if (isset($_GET["borrar"])){
    $sqlEmpleaados = mysqli_query($conexionBD,"DELETE FROM empleados WHERE id=".$_GET["borrar"]);
    if($sqlEmpleaados){
        echo json_encode(["success"=>11]);
        exit();
    }
    else{  echo json_encode(["success"=>borrar]); }
}
//Inserta un nuevo registro y recepciona en método post los datos
if(isset($_GET["insertar"])){
    $input = file_get_contents("php://input");
    $data = json_decode($input, true);
    $nombre=$data["nombre"];
    $dni=$data["dni"];
    $fecha=$data["fecha"];
    $vacaciones=$data["vacaciones"];
    
       if(($nombre!="")&&($dni!="")&&($fecha!="")&&($vacaciones!="")){     
            $sqlEmpleaados = mysqli_query($conexionBD,"INSERT INTO empleados(id,nombre,dni,fecha,vacaciones) VALUES(NULL,'$nombre','$dni','$fecha','$vacaciones') ");
            echo json_encode(["success"=>111]);
        }

    exit();
}
// Actualiza datos pero recepciona datos de nombre, correo y una clave para realizar la actualización
if(isset($_GET["actualizar"])){

    $input = file_get_contents("php://input");
    $data = json_decode($input, true);
    $nombre=$data["nombre"];
    $dni=$data["dni"];
    $fecha=$data["fecha"];
    $vacaciones=$data["vacaciones"];
    $sqlEmpleaados = mysqli_query($conexionBD,"UPDATE `empleados` SET `nombre` = '$nombre', `dni` = '$dni', `fecha` = '$fecha', `vacaciones` = '$vacaciones' WHERE `empleados`.`id` = ".$_GET["actualizar"]);
    echo json_encode(["success"=>1111]);
    exit();
}
// Consulta todos los registros de la tabla empleados
$sqlEmpleaados = mysqli_query($conexionBD,"SELECT * FROM empleados ");
if(mysqli_num_rows($sqlEmpleaados) > 0){
    $empleaados = mysqli_fetch_all($sqlEmpleaados,MYSQLI_ASSOC);
    echo json_encode($empleaados);
}
else{ echo json_encode([["success"=>11111]]); }


?>
