<?php
  include_once '../lib/coreWeb.php';
  //init Session
  session_start();
  $v = new View;
  $v->SectionHeader('SV Agreement lev.1');
?>
<style>
  * {
    box-sizing: border-box;
  }
  body {
    font-family:Mitr,Arial, Helvetica, sans-serif;
    margin: 0;
    overflow: hidden; 
  }
  .mySlides {
    display: none;
  }
  img {
    vertical-align: middle;
    border-radius: 20px;
  }
  .slideshow-container {
    width: 75%;
    height: 75%;
    margin-right: auto;
    margin-left: auto;
    margin-top: 20px;
  }
  /* Next & previous buttons */
  .prev,
  .next {
    cursor: pointer;
    position: absolute;
    top: 55%;
    width: auto;
    padding: 16px;
    margin-top: -22px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
  }
  /* Position the "next button" to the right */
  .next {
    right: 0;
    margin-right: 12.5%;
    border-radius: 3px 0 0 3px;
  }
  /* On hover, add a black background color with a little bit see-through */
  .prev:hover,
  .next:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
  /* Caption text */
  .text {
    color: #ffffff;
    font-size: 15px;
    padding: 8px 12px;
    position: absolute;
    bottom: 8px;
    width: 100%;
    text-align: center;
  }
  /* Number text (1/3 etc) */
  .numbertext {
    color: #ffffff;
    font-size: 12px;
    padding: 8px 12px;
    position: absolute;
    bottom: 4%;
    right: 14%;
  }
  /* The dots/bullets/indicators */
  .dot {
    cursor: pointer;
    height: 15px;
    width: 15px;
    margin: 0 2px;
    background-color: #999999;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;
  }
  .active,
  .dot:hover {
    background-color: #111111;
  }
  /* Fading animation */
  .fade {
    -webkit-animation-name: fade;
    -webkit-animation-duration: 1.5s;
    animation-name: fade;
    animation-duration: 1.5s;
  }
  @-webkit-keyframes fade {
    from {
      opacity: .4
    }
    to {
      opacity: 1
    }
  }
  @keyframes fade {
    from {
      opacity: .4
    }
    to {
      opacity: 1
    }
  }
  /* On smaller screens, decrease text size */
  @media only screen and (max-width: 300px) {
    .prev,
    .next,
    .text {
      font-size: 11px
    }
  }
  #vdo {
    min-width: 100%;
    max-width: 100%;
    right: 0;
    bottom: 0;
    position: fixed;
    z-index: -1;
    opacity: 90%;
  }
  .button {
    background-color: #C24DA2;
    border: none;
    color: white;
    padding: 10px 30px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 25px;
    margin-left: 50px;
    margin-top: 20px;
    cursor: pointer;
    border-radius: 10px;
  }
  .cross {
    position: absolute;
    top: 30px;
    right: 75px;
    width: 50px;
    height: 50px;
    border-radius: 25%;
  }
  .popup {
    display: none;
    position: fixed;
    padding: 10px;
    width: 280px;
    left: 50%;
    margin-left: -150px;
    height: 180px;
    top: 50%;
    margin-top: -100px;
    background: #FFF;
    border: 3px solid #F04A49;
    z-index: 20;
  }

  #popup:after {
    position: fixed;
    content: "";
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0,0,0,0.5);
    z-index: -2;
  }

  #popup:before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: #FFF;
    z-index: -1;
  }
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
<?php
  $v->SessionActive();
?>
  <div class="grid-container">
      <div class="item1"><a href="sv_quiz_level1.php" class="button" style="font-size:18px;">QUIZ</a></div>
      <div class="item2">        <img src="../picture/user pic.png" style="width:60px;">
          <h4 style="color:white;">User: <?php echo $_SESSION['account_name']; ?></h4>
          <button id="logout">LOGOUT</button></div>
      <div class="item3"><a href="sv_agreement_map.php"><img src="../picture/cross.png" class="cross"></a></div>  
  </div>

  <video autoplay muted loop id="vdo"> <source src="../picture/Bgvdo.mp4" type="video/mp4"></video>
	<div class="slideshow-container">
        <div class="mySlides fade">
          <div class="numbertext">1 / 7</div>
          <img src="../picture/SV.Agreement/level1/2.png" style="width:100%">
        </div>
        <div class="mySlides fade">
          <div class="numbertext">2 / 7</div>
          <img src="../picture/SV.Agreement/level1/3.png" style="width:100%">
        </div>
        <div class="mySlides fade">
          <div class="numbertext">3 / 7</div>
          <img src="../picture/SV.Agreement/level1/4.png" style="width:100%">
        </div>
        <div class="mySlides fade">
          <div class="numbertext">4 / 7</div>
          <img src="../picture/SV.Agreement/level1/5.png" style="width:100%">
        </div>
        <div class="mySlides fade">
          <div class="numbertext">5 / 7</div>
          <img src="../picture/SV.Agreement/level1/6.png" style="width:100%">
        </div>
        <div class="mySlides fade">
          <div class="numbertext">6 / 7</div>
          <img src="../picture/SV.Agreement/level1/7.png" style="width:100%">
        </div>
        <div class="mySlides fade">
          <div class="numbertext">7 / 7</div>
          <img src="../picture/SV.Agreement/level1/8.png" style="width:100%">
        </div>
        <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
        <a class="next" onclick="plusSlides(1)">&#10095;</a>
      </div>
  
      <script>
        var slideIndex = 1;
        showSlides(slideIndex);
        function plusSlides(n) {
          showSlides(slideIndex += n);
        }
        function currentSlide(n) {
          showSlides(slideIndex = n);
        }
        function showSlides(n) {
          var i;
          var slides = document.getElementsByClassName("mySlides");
          if(n > slides.length) {
            slideIndex = 1
          }
          if(n < 1) {
            slideIndex = slides.length
          }
          for(i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
          }
          slides[slideIndex - 1].style.display = "block";
        }
      </script>
      <?php
        $v->PATH_FILES = "../";
        $v->SectionFooter();
        unset($v);
      ?>
</html>