<?php
    include_once 'lib/coreWeb.php';
    $post = json_decode(file_get_contents('php://input'));
    if(!empty($post->dataset)){
        $cw = new Controller;
        $cw->ConnectionDB();
        $cw->DML_COMMANDS = 'INSERT INTO `account` (`username`,`password`,`email`,`name`,`record`) VALUES (:username,:password,:email,:name,CURRENT_TIMESTAMP())';
        $cw->DATASET = array('username'=>$post->dataset[0],'password'=>$post->dataset[1],'email'=>$post->dataset[2],'name'=>$post->dataset[3]);
        $cw->Create();
        echo $cw->QUERY_RESULT;
        $cw->DisconnectDB();   
        unset($cw);
    }
?>
