<?php
    
    try {
    $conn = new PDO('mysql:host=localhost;dbname=citizen','root','12348765');
    }catch(PDOException $error){
        die("การเชื่อมต่อฐานข้อมูลเกิดข้อผิดพลาด! ".$error->getMessage());
    }
    
    if(!empty($_POST['username']) && !empty($_POST['password']) && !empty($_POST['email'])){
        try{
        $setData = [
            'username'=>$_POST['username'],
            'password'=>$_POST['password'],
            'email'=>$_POST['email'],
            'name'=>$_POST['name']
        ];
        $int = $conn->prepare("INSERT INTO ordinary (username, password, gmail, name) VALUE (:username, :password, :email, :name)");
        $int->execute($setData);
        echo "<script>
        window.location.href='Home.html';
        </script>";
        }catch(PDOException $error){
        echo "
        <script> 
        alert('เกิดข้อผิดพลาด ".$error->getMessage()."');
        window.location.href='processRegister.php';
        </script>
        ";
        }
    }

    else {
        echo "<script>
        alert('ไม่สามารถลงทะเบียนได้ โปรดกรอกข้อมูลให้ครบ');
        window.location.href='register.html';
        </script>";
    }

?>