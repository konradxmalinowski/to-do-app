<?php
require_once 'database.php';

$data = json_decode(file_get_contents('php://input'), true);

$name = $data['name'] ?? 'medium';
$id = $data['id'];

if (!$id) {
    echo json_encode(["error" => 'Invalid id' . mysqli_error($conn)]);
    http_response_code(400);
    exit;
}

$query = "UPDATE items set name = '$name' where id_item = '$id'";
$result = mysqli_query($conn, $query);

if (!$result) {
    http_response_code(500);
    echo json_encode(["error" => "Failed changing name" . mysqli_error($conn)]);
    exit;
}

http_response_code(200);
echo json_encode(["success" => true]);

?>