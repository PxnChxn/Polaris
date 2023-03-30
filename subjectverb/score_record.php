<?php
    //init Session
    session_start();
    include_once '../lib/coreWeb.php';
    $post = json_decode(file_get_contents('php://input'));
    if(!empty($post)){
        $cw = new Controller;
        $cw->ConnectionDB();
        $cw->DML_COMMANDS = 'INSERT INTO `learning`(`level`,`score`,`record`,`idaccount`,`idcourse`) VALUES (:level,:score,CURRENT_TIMESTAMP(),:idaccount,:idcourse)';
        $cw->DATASET = array('level'=>$post->cLevel,'score'=>$post->score,'idaccount'=>$_SESSION['id'],'idcourse'=>$post->idCourse);
        $cw->Create();
        echo $cw->QUERY_RESULT;
        $cw->DisconnectDB();
        unset($cw);
    }
?>