<?php
$email = $_POST['email'];
$password = $_POST['password'];

$conn = new mysqli('localhost','root','','zesranie');
if($conn->connect_error){
	die("Connection Failed : ". $conn->connect_error);
} else {
	$insert = $conn->prepare("insert into users(email, password) values(?, ?)");
	$insert->bind_param("ss",$email, $password);
	$insert->execute();
	$insert->close();
	$conn->close();
}
?>