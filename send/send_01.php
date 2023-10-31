<?php
error_reporting(-1);
header('Content-Type: text/html; charset=utf-8');

$contact = $_POST['contact_01']; 
$connection = $_POST['connection_01'];
$question = $_POST['question_01'];


$contact = htmlspecialchars($contact);
$connection = htmlspecialchars($connection);
$question = htmlspecialchars($question);


$contact = urldecode($contact);
$connection = urldecode($connection);
$question = urldecode($question);


$contact = trim($contact);
$connection = trim($connection); 
$question = trim($question);


$headers = "Content-Type: text/html; charset=utf-8 \r\n";
/* $headers .= "From: serg@vpohodenot.ru \r\n"; */

mail("kat@fireplace23.ru", "Вопрос с сайта", "Имя: $contact \r\n Связь: $connection \r\n Вопрос: $question \r\n", $headers);   
?> 