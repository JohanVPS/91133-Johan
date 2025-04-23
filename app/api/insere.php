<?php

if ($_SERVER['REQUEST_METHOD'] !== 'POST'){
    header("Location: http://localhost:8081/app/index.html");
    exit;
}


?>