<?php

// Connect to MySQL database
$host = "localhost";
$user = "your_mysql_username";
$password = "your_mysql_password";
$database = "your_database_name";
$conn = mysqli_connect($host, $user, $password, $database);

// Check connection
if (mysqli_connect_errno()) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
    exit();
}

// Process form data
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve form data
    $username = mysqli_real_escape_string($conn, $_POST['username']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $password = mysqli_real_escape_string($conn, $_POST['password']);
    $confirmPassword = mysqli_real_escape_string($conn, $_POST['confirm-password']);

    // Validate form data
    $errors = [];
    
    }
    if (empty($email)) {
        $errors[] = 'Email is required';
    }
    if (empty($password)) {
        $errors[] = 'Password is required';
    }
    if ($password !== $confirmPassword) {
        $errors[] = 'Passwords do not match';
    }

    // If no errors, create new user account
    if (count($errors) === 0) {
        // Generate salt and hash password
        $salt = uniqid();
        $hashedPassword = sha1($salt . $password);

        // Insert new user into database
        $query = "INSERT INTO users (username, email, salt, hashed_password) VALUES ('$username', '$email', '$salt', '$hashedPassword')";
        $result = mysqli_query($conn, $query);

        if ($result) {
            echo 'User account created successfully';
        } else {
            echo 'Error creating user account';
        }
    } else {
        // Display validation errors
        foreach ($errors as $error) {
            echo $error . '<br>';
        }
    }
}

// Close database connection
mysqli_close($conn);

?>
