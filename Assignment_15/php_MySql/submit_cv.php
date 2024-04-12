<?php
$conn = new mysqli("localhost", "username", "password", "cv_application");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$education = $_POST['education'];
$work_experience = $_POST['work_experience'];
$skills = $_POST['skills'];
$image = $_FILES['image']['name'];
$cv_file = $_FILES['cv_file']['name'];

$target_dir = "uploads/";
move_uploaded_file($_FILES['image']['tmp_name'], $target_dir . $image);
move_uploaded_file($_FILES['cv_file']['tmp_name'], $target_dir . $cv_file);

$sql = "INSERT INTO cv_data (name, email, phone, education, work_experience, skills, image, cv_file)
        VALUES ('$name', '$email', '$phone', '$education', '$work_experience', '$skills', '$image', '$cv_file')";
if ($conn->query($sql) === TRUE) {
    echo "CV submitted successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
