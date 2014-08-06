<?php
$toEmail 		= "everyone@yahoo.com"; //Replace it recipient email address
$subject 		= 'Email For Subcribe...'; //Subject line for emails

//Let's clean harmful characters from raw POST data using PHP Sanitize filters. 
$postEmail 		= filter_var($_POST["postEmail"], FILTER_SANITIZE_EMAIL);


//similar validation applies to all data, unless you want to replace with some other strong validation.
if(strlen($postEmail)<1)
{
	header('HTTP/1.1 500 Email Field Empty'); 
	exit();
}
//Finally we can proceed with PHP email.
$headers = 'From: '.$postEmail.'' . "\r\n" .
    'Reply-To: '.$postEmail.'' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
	
//Email Body
$Body = "";
$Body .= "Email Address: ";
$Body .= $postEmail;
$Body .= "\n";
$Body .= "\n";


@$sentMail = mail($toEmail, $subject, $Body .' Your Subscriber', $headers);

if(!$sentMail)
	{
		header('HTTP/1.1 500 Couldnot send mail! Sorry..'); 
		exit();
	}else{
		echo '<p>Thank you for your Subscribe</p>';
	}

?>