<?php


$discs = file_get_contents("dischi.json");

$data = json_decode($discs, true);
if(isset($_GET['id'])) {
    // SHOW
    $selected_disc = $data[$_GET['id']];
    $result = json_encode($selected_disc);
} else {
    // INDEX
    $result = json_encode($data);
}

header("Content-Type: application/json");
echo $result;



