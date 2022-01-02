<?php
session_start();

// If the user is already logged in, destroy the session and redirect to the login page
unset($_COOKIE['PHPSESSID']);
setcookie('PHPSESSID', '', time() - 3600, '/');
session_destroy();

// login page
header('Location: https://github.com/login/oauth/authorize?client_id=Iv1.8092fe843b5138e7');
