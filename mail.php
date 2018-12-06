<?php
//if "email" variable is filled out, send email
if (isset($_POST['email']))  {


    //Email information
    $admin_email = "loic.vanderschooten@ynov.com";
    $email = $_POST['email'];
    $subject = "Bigeard-BTP formulaire";
    $comment = $_POST['message'] + " " + $_POST['firstname'] + " " + $_POST['lastname'];
    $rexSafety = "/[\^<,\"@\/\{\}\(\)\*\$%\?=>:\|;#]+/i";

    if(preg_match($rexSafety,$_POST['firstname'])){
        echo "Wrong value for the firstname";
    }
    else{

    }
    if(preg_match($rexSafety,$_POST['lastname'])){
        echo "Wrong value for the lastname";
    }
    else{

    }

    //send email
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        mail($admin_email, "$subject", $comment, "From:" . $email);
        header('Location: http://bigeard-btp.aventu.re/');


        //Email response
        echo "Thank you for contacting us!";
    }
    else {
        echo "Wrong value for the mail.";
    }
}