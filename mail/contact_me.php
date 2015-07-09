<?php
// Check for empty fields
if(empty($_POST['name'])  		||
   empty($_POST['email']) 		||
   empty($_POST['phone']) 		||
   empty($_POST['message'])	||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
	return false;
   }

$name = $_POST['name'];
$email_address = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

// Create the email and send the message
$to = 'brian.ranney@gmail.com';
$email_subject = "Website Contact Form";
$email_body = "You have received a new message from your website contact form.";
$headers = "From: brian.ranney@contribe.se"; 
$headers .= "Reply-To";
mail($to,$email_subject,$email_body,$headers);
return true;
?>