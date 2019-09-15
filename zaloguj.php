<?php
session_start();

if((!isset($_POST['email'])) || (isset($_POST['haslo'])))
{
    header("Location: sign.php");
    exit();
}

require_once "config.php";

$connect = @new mysqli($host, $db_user, $db_password, $db_name);

if($connect->connect_errno!=0)
{
    echo "Error: ".$connect->connect_errno;
}
else{
    $login = $_POST['email'];
    $haslo = $_POST['password'];

    $login = htmlentities($login, ENT_QUOTES, "UTF-8"); //encje html
    $haslo = htmlentities($haslo, ENT_QUOTES, "UTF-8");

if($result = @$connect->query(
    sprintf("SELECT * FROM logowanie WHERE email='%s' AND password='%s'",
mysqli_real_escape_string($connect,$login),
mysqli_real_escape_string($connect,$haslo))));
{
    $amount_user = $result->num_rows;
    if($amount_user>0)
    {
        $_SESSION['zalogowany']=true; //flaga
      
$row = $result->fetch_assoc();
$_SESSION['id'] = $row['id'];
$_SESSION['email'] = $row['email'];

unset($_SESSION['blad']); //usuń zmienną z sesji
$result->close(); //usuwam z pamięci niepotrzebne rezultaty kwerendy
header("Location:index.php");
    }
    else{
        $_SESSION['blad'] = '
        <span class="alert alert-danger" role="alert">
        Nieprawidłowy login lub hasło!
        </span>';
      header("Location:sign.php");
    }
}

    $connect->close();
}

?>
