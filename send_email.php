<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    $to = "jeelptl2005@gmail.com"; // Your email address
    $subject = "New Contact Form Message from $name";
    $body = "You have received a new message from your website contact form:\n\n" .
            "Name: $name\n" .
            "Email: $email\n" .
            "Subject: $subject\n" .
            "Message:\n$message";

    $headers = "From: $email\r\n" .
               "Reply-To: $email\r\n" .
               "X-Mailer: PHP/" . phpversion();

    if (mail($to, $subject, $body, $headers)) {
        echo "<script>alert('Thank you! Your message has been sent.'); window.location.href='index.html';</script>";
    } else {
        echo "<script>alert('Sorry, your message could not be sent. Please try again later.'); window.location.href='index.html';</script>";
    }
} else {
    header("Location: index.html");
    exit;
}
?>
