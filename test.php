<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
    include_once 'lib/coreWeb.php';
    $cw = new Controller();
    $cw->ConnectionDB();
    $cw->DML_COMMANDS = 'INSERT INTO `account` (`username`,`password`,`email`,`name`,`record`) VALUES (:username,:password,:email,:name,CURRENT_TIMESTAMP())';
    $cw->DATASET = array('username'=>'test1','password'=>'test1','email'=>'test1@mail.com','name'=>'test1');
    $cw->Create();
    echo $cw->QUERY_RESULT;
    $cw->DisconnectDB();  
?>
</body>
</html>
