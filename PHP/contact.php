<?php
$imie = $_POST['imie'];
$nazwisko = $_POST['nazwisko'];
$email = $_POST['email'];

$conn = new mysqli('localhost','root','','zesranie');
if($conn->connect_error){
	die("Connection Failed : ". $conn->connect_error);
} else {
	$insert = $conn->prepare("insert into idk(email, imie, nazwisko) values(?, ?, ?)");
	$insert->bind_param("sss",$email, $imie, $nazwisko);
	$insert->execute();
	$insert->close();
	$conn->close();
}
?>