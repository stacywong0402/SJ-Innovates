<?php
  $first_name = $_POST['first_name'];
  $last_name = $_POST['last_name'];
  $visitor_email = $_POST['email'];
  $message = $_POST['message'];

  $email_subject = "New Form submission";
  $email_body = "You have received a new message from $first_name $last_name";

  $to = "stacywong0402@gmail.com";
 

  mail($to, $email_subject, $email_body);

?>