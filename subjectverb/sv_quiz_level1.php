<?php
    include_once '../lib/coreWeb.php';
    //init Session
    session_start();
    $v = new View;
    $v->SectionHeader('แบบทดสอบความรู้เรื่อง Subject verb agreement เลเวล 1');
  ?>
    <link rel="stylesheet" href="../css/svStyle.css">
    <style>
  .grid-container {
  display: grid;
  grid-template: 60px / auto auto auto;
  grid-gap: 30px;
}
.grid-container > div {
  padding: 20px 0;
}
.item2{
    text-align:center;
}
.item2 *{
  display:inline;
}
.item3{
  text-align:right;
}
#logout{
    border-radius: 16px;
    padding:10px;
    color:black;
    font-weight:bold;
    cursor: pointer;
    margin-left:3em;
}
    </style>
</head>
<body>
    <div class="grid-container">
      <div class="item1"></div>
      <div class="item2">        <img src="../picture/user pic.png" style="width:60px;">
          <h4 style="color:white;">User: <?php echo $_SESSION['account_name']; ?></h4>
          <button id="logout">LOGOUT</button></div>
      <div class="item3"><a href="sv_level1.php"><img src="../picture/cross.png" style="width:50px;margin-right:3em;"></a></div>  
    </div>
    <div class="header">
        <h3>แบบทดสอบความรู้เรื่อง Subject verb agreement เลเวล 1</h3>
    </div>
    <div class="container">
        <div id="q-container" class="hide">
            <a id="question"></a>
            <div id="a-button" class="btn-grid">
                <button class="btn">Answer 1</button>
                <button class="btn">Answer 2</button>
                <button class="btn">Answer 3</button>
                <button class="btn">Answer 4</button>
            </div>
        </div>
        <div class="control">
            <button id="start-btn" class="start-btn btn"> เริ่มเลย </button>
            <button id="next-btn" class="next-btn btn hide"> ต่อไป </button>
        </div>
    </div>

    <div class="score">
        <span id="right-answers" class="hide"></span>
    </div>
    <?php
        $v->PATH_FILES = '../';
        $v->SectionFooter();
        unset($v);
    ?>
    <script src="../script/SV_Level1.js"></script>
</body>
</html>