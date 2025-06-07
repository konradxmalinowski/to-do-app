<?php

require_once 'database.php';

$result = mysqli_query($conn, 'SELECT id_item as id, name, priority FROM items;');

if (!$result) {
    http_response_code(500);
    echo json_encode(["error" => "Failed getting items" . mysqli_error($conn)]);
    exit;
}

$items = mysqli_fetch_all($result, MYSQLI_ASSOC);

http_response_code(200);
echo json_encode($items);

?>