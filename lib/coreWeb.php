<?php
class Model{
    protected $DB_CONNECTED;
    function Conn(){
        $conf = parse_ini_file("config.ini",false);       //get configuration file
        try{
            $host = $conf["db_host"];
            $dbname = $conf["db_name"];
            $connected = new PDO("mysql:host=$host;dbname=$dbname",$conf["db_user"],$conf["db_pass"]);
        }catch(PDOException $e){
            die("การเชื่อมต่อฐานข้อมูลเกิดความผิดพลาด!".$e->getMessage());
        }
        //setcharactor for THAI FONT
        $connected->query("SET character_set_results=utf8");
        $connected->query("SET character_set_client=utf8");
        $connected->query("SET character_set_connection=utf8");
        return $connected;
    }
}
class Controller extends Model{
    public $DML_COMMANDS;
    public $QUERY_RESULT;
    public $DATASET;

    public function ConnectionDB(){
        $this->DB_CONNECTED = Self::Conn();
    }
    public function Create(){
        //$dml = call queryCompareStore(:attribute)
        //$arr = ["attribute"=>data]
        try{
                $res_query = $this->DB_CONNECTED->prepare($this->DML_COMMANDS);
                $this->QUERY_RESULT = $res_query->execute($this->DATASET);
                //result = 1 หมายถึงบันทึกข้อมูลสำเร็จ
            }catch(Exception $e){
                echo 'Error: '.$e->getMessage();
        }
    }
    public function ReadFetchAllNum(){
        $res_query = $this->DB_CONNECTED->prepare($this->DML_COMMANDS);
        $res_query->execute();
        $this->QUERY_RESULT = $res_query->fetchAll(PDO::FETCH_NUM);
    }
    public function ReadFetchAllNumฺByPrepare(){
        $res_query = $this->DB_CONNECTED->prepare($this->DML_COMMANDS);
        $res_query->execute($this->DATASET);
        $this->QUERY_RESULT = $res_query->fetchAll(PDO::FETCH_NUM);
    }
    public function ReadFetchNum(){
        $res_query = $this->DB_CONNECTED->prepare($this->DML_COMMANDS);
        $res_query->execute();
        $this->QUERY_RESULT = $res_query->fetch(PDO::FETCH_NUM);            
    }
    public function ReadFetchNumฺByPrepare(){
        $res_query = $this->DB_CONNECTED->prepare($this->DML_COMMANDS);
        $res_query->execute($this->DATASET);
        $this->QUERY_RESULT = $res_query->fetch(PDO::FETCH_NUM);
    }
    public function Update(){
        //Support Storage Engine "InnoDB" by MySQL
        $res_query = $this->DB_CONNECTED->prepare($this->DML_COMMANDS);
        try {
            $this->DB_CONNECTED->beginTransaction();
            $res_query->execute($this->DATASET);
            $this->DB_CONNECTED->commit();
        }catch (Exception $e){
            $this->DB_CONNECTED->rollback();
            throw $e;
        }
    }
    public function Delete(){
        $this->DB_CONNECTED->prepare($this->DML_COMMANDS)->execute($this->DATASET);
    }
    function DisconnectDB() {
        unset($this->DB_CONNECTED);
    }
}
class View{
    public $PATH_FILES;
    public function SectionHeader($web_title){
        echo '<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>'.$web_title.'</title>
            <script src=" https://cdn.jsdelivr.net/npm/sweetalert2@11.7.3/dist/sweetalert2.all.min.js "></script>
            <link href=" https://cdn.jsdelivr.net/npm/sweetalert2@11.7.3/dist/sweetalert2.min.css " rel="stylesheet">
            <style>
            @import url("https://fonts.googleapis.com/css2?family=Mitr&display=swap");
            h1,h2,h3,h4,h5,h6{
                font-family:Mitr,Arial, Helvetica, sans-serif;
            }
            </style>';
    }
    public function SectionFooter(){
        echo '<script>
        document.getElementById("logout").addEventListener("click", ()=>{
            ajaxPOST = (dataset) =>{
          let xhttp = new XMLHttpRequest();
          xhttp.open("POST", "'.$this->PATH_FILES.'logout.php", true);
          xhttp.setRequestHeader("Content-Type", "application/json");
          xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
              let response = this.responseText;
              if(response != ""){
                  Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "ลงชื่อออกเรียบร้อย",
                    showConfirmButton: false,
                    timer: 1800
                  }); 
                    setTimeout(()=> {
                        window.location.href="'.$this->PATH_FILES.'login.html";
                    }
                    ,2000); 
                }
            }
          };
          xhttp.send(JSON.stringify(dataset));
        }
        ajaxPOST({"status":1})
        });
    </script>';
    }
    function SessionActive(){
        if (empty($_SESSION['id'])) {
            echo "<script> Swal.fire({
                position: 'center',
                icon: 'warning',
                title: 'ลงชื่อเข้าใช้งานระบบก่อน...นะครับ',
                showConfirmButton: false,
                timer: 1800
            }); setTimeout(()=> {
                window.location.href='../login.html';
            }
            ,2000);</script>";
        } else {
            $now = time(); // Checking the time now when home page starts.
            if ($now > $_SESSION['expire']) {
                session_destroy();
                echo "<script> Swal.fire({
                    position: 'center',
                    icon: 'warning',
                    title: 'ถูกตัดการเชื่อมต่อ คุณลงชื่อเข้าใจนานเกินไป',
                    showConfirmButton: false,
                    timer: 1800
                });                     setTimeout(()=> {
                    window.location.href='../login.html';
                }
                ,2000);</script>";
            }
        }
    }
}
?>