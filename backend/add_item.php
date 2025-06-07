<?php
require_once 'database.php';

$data = json_decode(file_get_contents('php://input'), true);

$id = $data['id'] ?? 1;
$name = $data['name'] ?? '';
$priority = $data['priority'] ?? 'medium';

if (!$name || !$priority) {
    echo json_encode(["error" => "Invalid or missing fields"]);
    http_response_code(400);
    exit;
}

$query = "INSERT INTO items (id_item, name, priority) values ('$id', '$name', '$priority')";
$result = mysqli_query($conn, $query);

if (!$result) {
    http_response_code(500);
    echo json_encode(["error" => "Failed adding item " . mysqli_error($conn)]);
    exit;
}

http_response_code(201);
echo json_encode(["success" => true, "insert_name" => $name]);

?>