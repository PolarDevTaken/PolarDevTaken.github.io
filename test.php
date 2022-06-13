<?php


$onenumber = $_GET["numberone"];
$twonumber = $_GET["numbertwo"];


if($onenumber + $twonumber == 420){
  header("Location: https://allegro.pl/");
}

if($onenumber + $twonumber == 360){
  header("Location: https://www.youtube.com/watch?v=yVLfEHXQk08");
}

if($onenumber + $twonumber == 69){
  echo("Nsfw art of roblox appearing in 5 seconds...");
  exit();
}

$symbol = $_GET['arytm'];
echo("<br>");

if($symbol == "+") {
  echo($onenumber + $twonumber);
}

if($symbol == "-"){
  echo($onenumber - $twonumber);
}

if($symbol == "*"){
  echo($onenumber * $twonumber);
}

if($symbol == "/"){
  if($onenumber > 0){
    if($twonumber > 0){
      echo($onenumber / $twonumber);
    }
    else{echo("Value can't be lower then 0.");}
    
  }
  else{
  echo("Value can't be lower then zero.");
}

}


?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="refresh" content="0;url=https://www.zsti.gliwice.pl/">
  <title>Document</title>
</head>
<body>

</body>
</html>