<?php
  include_once 'lib/coreWeb.php';
  //init Session
  session_start();
  $v = new View;
  $v->SectionHeader('Home');
?>
<style>
    * {
        margin:0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        /*fixed background*/
        background-image: url("picture/bg-top.jpg");
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
        overflow: hidden; 
    }
    .bottom-left {
        position: absolute;
        bottom: 55px;
        left: 75px;
        width:40px;
        height:40px;
        border-radius: 50%;
    }
    .bottom-right {
        position: absolute;
        bottom: 55px;
        right: 75px;
        width: 60px;
        height: 40px;
        border-radius: 25%;
    }
    .column {
        float: left;
        width: 31%;
    }
    .row {
        margin:  50px;
        margin-top: 175px;
        margin-right: 20px;
        margin-left: 110px;

    }
    .image {
        float: left;
        width: 400px;
        border-radius: 45px;
        -webkit-transform: scale(1);
	    transform: scale(1);
	    -webkit-transition: .3s ease-in-out;
	    transition: .3s ease-in-out;
    }
    .image:hover {
        -webkit-transform: scale(1.1);
	    transform: scale(1.1);
        filter: drop-shadow(0 0 0.75rem rgb(255, 255, 255));
    }
    .hd{
        width: 60px;
        height: 60px;
    }
    .logo{
        width: 150px;
        height: 150px;
        margin-left: 70px;
        top: 1px;
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
.item1{
    text-align:left;
    color:white;
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
    color:white;
}
#logout{
    border-radius: 12px;
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
  <div class="item1">EXP: </div>
  <div class="item2"><img class="logo" src="picture/logo.PNG"></div>
  <div class="item3">
    <img src="picture/user pic.png" class="hd">
    <h4>User: <?php echo $_SESSION['account_name']; ?></h4>
    <button id="logout">LOGOUT</button>
  </div>  
</div>
    <!--volume-->
    <div class="row">
        <div class="column">
              <a href="subjectverb/sv_agreement_map.php">
                <img src="picture/SV. Agreement.jpg" class="image">
              </a>
            </div>
        </div>
        <div class="column">
              <a href="Determiners_map.html">
                <img src="picture/Determiner.jpg"  class="image" style="margin-left: 20px;">
              </a>
            </div>
        </div>
        <div class="column">
              <a href="Preposition_map.html">
                <img src="picture/Preposition.png"  class="image">
              </a>
            </div>
        </div>
    </div>

    <div id="bottom" >
        <a href="about.html">
            <img src="picture/How_to_use.png" class="bottom-left">
        </a>
        <a href="ourteam.html">
            <img src="picture/Team.png" class="bottom-right">
        </a>
    </div>
    <?php
        $v->SectionFooter();
        unset($v);
    ?>
</body>
</html>