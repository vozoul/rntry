<?php
header('Content-Type: application/json');

$AllowMethod = ['GET', 'POST'];

$uri = $_SERVER['REQUEST_URI'];
$method = $_SERVER['REQUEST_METHOD'];

if (!in_array($method, $AllowMethod)) {
    echo json_encode($res = [
        "success" => false,
        "message" => "method not allowed"
    ]);
    return;
}

$uri = substr($uri, 1);
$page = explode('?', $uri)[0];
$params = explode('?', $uri)[1];

$req = json_decode(file_get_contents('./VirtualDB.json'), true);

if($page === "") {
    $success = true;
    $message = "Bienvenue sur l'api.";
}
if (!array_key_exists($uri, $req) && !empty($uri)) {
    $success = false;
    $data = null;
}
if (array_key_exists($uri, $req)){
    $success = true;
    $data = json_encode($req[$uri]);
}
if (!$success) {
    $message = " Une erreur est survenue veuillez retenter ultérieurement";
}

$res['success'] = $success;
$res['message'] = $message;
if(!is_null($data)) {
    $res[$page] = json_decode($data);
}

echo json_encode($res);