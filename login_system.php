<?php

$getUser = $_POST['username'];
$getPass = $_POST['password'];

//connection DB
try{
    $objCon = new PDO('mysql:host=localhost;dbname=citizen','root','12348765');
}catch(PDOException $error){
    die("การเชื่อมต่อฐานข้อมูลเกิดข้อผิดพลาด! ".$error->getMessage());
}
//Check value
if(!empty($getUser) && !empty($getPass)){
    //select table
    $dml = $objCon->prepare("SELECT * FROM ordinary WHERE username='".$getUser."' AND password='".$getPass."'");
    $dml->execute();    
    $index = $dml->fetch(PDO::FETCH_NUM);
        if(empty($index[0])){
            echo "
                <script>
                alert('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง โปรดลองใหม่อีกครั้ง');
                window.location.href='login_page.html';
                </script>
            ";
        }
else{
    // inital session
    $_SESSION['username'] = $getUser;
    $_SESSION['password'] = $getPass;
    echo "
    <script>
    window.location.href='Home.html';
    </script>";
}
}elseif(!empty($_SESSION['username']) && !empty($_SESSION['password'])){
    $dml = $objCon->prepare("SELECT * FROM ordinary WHERE username='".$_SESSION['username']."' AND password='".$_SESSION['password']."'");
    $dml->execute();    
    $index = $dml->fetch(PDO::FETCH_NUM);
    echo "
    <script>
    window.location.href='Home.html';
    </script>";

}else{
    echo "
    <script>
    alert('คุณป้อนข้อมูลไม่ถูกต้อง โปรดลองใหม่อีกครั้ง');
    window.location.href='login_page.html';
    </script>";
}

?>

