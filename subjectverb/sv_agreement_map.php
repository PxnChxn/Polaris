<?php
    include_once '../lib/coreWeb.php';
    //init Session
    session_start();
    $v = new View;
    $v->SectionHeader('Subject Verb Agreement');
?>
<style>
    body{
        overflow: hidden;
        background-image: url("../picture/chapterbg/SV.agreement.jpg");
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
    }
    .cross {
        position: absolute;
        top: 55px;
        right: 75px;
        width: 50px;
        height: 50px;
        border-radius: 25%;
    }
    .planet{
        width: 140px;
        height: 140px;
        display: block;
        float: left;
        margin-right: 10px;
    }
    #vel1 {
        float: left;
        margin-top: 280px;
        margin-left: 150px;
    }
    #vel2 {
        float: left;
        margin-top: 180px;
        margin-left: 200px;
    }
    #vel3 {
        float: left;
        margin-left: 180px;
        margin-top: 300px;
    }
    #vel4 {
        float: right;
        margin-top: 150px;
        margin-right: 190px;
    }
    .saturn {
        position: absolute;
        bottom: -150px;
        right: -200px;
        width: 50%;
        height: 60%;
        margin: 0;
        padding: 0;
    }
    .text {
        font-family: 'Courier New', Courier, monospace;
        font-size: 36pt;
        font-weight: 600;
        color: white;
        position: absolute;
        bottom: 9px;
        left: 50px;
        padding: 20px;
    }
    .Bquiz{
        position: absolute;
        width: 150px;
        height: 110px;
        top: 35px;
        left: 60px;
    }
    .grid-container {
  display: grid;
  grid-template: 150px / auto auto auto;
  grid-gap: 30px;
  padding: 10px;
}

.grid-container > div {
  padding: 20px 0;
}
.item2{
    text-align:center;
    display: inline;
}
.item3{
    text-align:right;
}
.item3 > *{
    margin-right:1em;    
}
#logout{
    border-radius: 16px;
    padding:10px;
    color:black;
    font-weight:bold;
    cursor: pointer;
}
</style>
</head>
<body>
<?php
    $v->SessionActive();
?>
    <div class="grid-container">
        <div class="item1"><a href="sv_super_quiz.html"><img src="../picture/Bquiz.png" class="Bquiz"></a></div>
        <div class="item2">        <img src="../picture/user pic.png" style="width:60px;">
            <h4 style="color:white;">User: <?php echo $_SESSION['account_name']; ?></h4>
            <button id="logout">LOGOUT</button></div>
        <div class="item3">        <a href="../home.php">
                <img src="../picture/cross.png" class="cross">
            </a>    </div>  
    </div>
    <section>
        <div>            
            <a href="sv_level1.php"><img src="../picture/SV.Agreement/vel1.png" class="planet" id="vel1"></a>
            <?php
                $c = new Controller;
                $c->ConnectionDB();
                for($i=2; $i<=4; $i++){
                    $c->DML_COMMANDS = "SELECT level FROM learning where idaccount=".$_SESSION['id']." and level=$i order by record desc limit 1";
                    $c->ReadFetchNum();
                    if($c->QUERY_RESULT[0] != ''){
                        switch($c->QUERY_RESULT[0]){
                            case 2:
                                echo '';
                                break;
                            case 3:
                                echo '';
                                break;
                            case 4:
                                echo '';
                                break;
                        }
                    }
                }

            ?>
            <a href="sv_level2.php"><img src="../picture/SV.Agreement/vel2.png" class="planet" id="vel2" style="filter: grayscale(60%);"></a>
            <a href="SV.agreement_3.html"><img src="../picture/SV.Agreement/vel3.png" class="planet" id="vel3"></a>
            <a href="SV.agreement_4.html"><img src="../picture/SV.Agreement/vel4.png" class="planet" id="vel4"></a>
            
            <div class="text">
                <a>Subject Verb Agreement</a>
            </div>
            <img src="../picture/SV.Agreement/saturn.png" class="saturn">
        </div>
    </section>
    <?php
        $v->PATH_FILES = '../';
        $v->SectionFooter();
        unset($v);
    ?>   
</body>
</html>