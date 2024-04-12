<?php

$conn = new mysqli("localhost", "username", "password", "cv_application");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM cv_data";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "<table border='1'>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Education</th>
                <th>Work Experience</th>
                <th>Skills</th>
                <th>Image</th>
                <th>CV File</th>
            </tr>";
    while ($row = $result->fetch_assoc()) {
        echo "<tr>
                <td>{$row['name']}</td>
                <td>{$row['email']}</td>
                <td>{$row['phone']}</td>
                <td>{$row['education']}</td>
                <td>{$row['work_experience']}</td>
                <td>{$row['skills']}</td>
                <td><img src='uploads/{$row['image']}' width='100'></td>
                <td><a href='uploads/{$row['cv_file']}' target='_blank'>Download CV</a></td>
            </tr>";
    }
    echo "</table>";
} else {
    echo "No CVs found";
}

$conn->close();
?>
