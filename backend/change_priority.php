<?php
require_once 'database.php';

$rawData = file_get_contents('php://input');
$data = json_decode($rawData, true);

if (!$data) {
    echo json_encode(["error" => "Invalid JSON", "raw" => $rawData]);
    http_response_code(400);
    exit;
}

$priority = $data['priority'] ?? null;
$id = isset($data['id']) ? (int) $data['id'] : null;

if (!$id) {
    echo json_encode(["error" => 'Invalid id']);
    http_response_code(400);
    exit;
}


$query = "UPDATE items set priority = '$priority' where id_item = '$id'";
$result = mysqli_query($conn, $query);

if (!$result) {
    http_response_code(500);
    echo json_encode(["error" => "Failed changing priority" . mysqli_error($conn)]);
    exit;
}

http_response_code(200);
echo json_encode(["success" => true]);

?>