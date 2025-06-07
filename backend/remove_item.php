<?php
require_once 'database.php';

$data = json_decode(file_get_contents('php://input'), true);

$id = $data['id'];

if (!$data) {
    echo json_encode(["error" => 'Invalid id']);
    http_response_code(400);
    exit;
}

$query = "DELETE FROM items where id_item = '$id';";
$result = mysqli_query($conn, $query);

if (!$result) {
    http_response_code(500);
    echo json_encode(["error" => "Failed deleting data" . mysqli_errno($conn)]);
    exit;
}

http_response_code(200);
echo json_encode(["success" => true, "deleted_row" => $id]);

?>