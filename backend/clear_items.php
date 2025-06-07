<?php
require_once 'database.php';

$query = "TRUNCATE TABLE items";
$result = mysqli_query($conn, $query);

if (!$result) {
    http_response_code(500);
    echo json_encode(["error" => "Failed clearing all items" . mysqli_error($conn)]);
}

http_response_code(200);
echo json_encode(["success" => true]);

?>