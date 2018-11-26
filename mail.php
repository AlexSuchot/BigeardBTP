<?php
if(isset($_POST['form'])) {


    if(!isset($_POST['firstname']) ||
        !isset($_POST['lastname']) ||
        !isset($_POST['email']) ||
        !isset($_POST['message'])) {
        died('Error.');
    }

    $to = "alexandre.suchot@gmail.com";
    $subject = 'test';
    $message = $_POST['message'];
    $header = "Content-type: text/html; charset=utf-8 \r\n";
    $header .= "From: ".$mail." \r\n";
    $header .= "MIME-Version: 1.0 \r\n";
    $header .= "Content-Transfer-Encoding: 8bit \r\n";
    $header .= "Date: ".date("r (T)")." \r\n";


    mail($to, $subject, $message, $header);

    echo 'email sent.';
    redirect('index.html');



}
?>