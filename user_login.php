<?php
    include_once 'lib/coreWeb.php';
    $post = json_decode(file_get_contents('php://input'));
    if(!empty($post->dataset)){
        $cw = new Controller;
        $cw->ConnectionDB();
        $cw->DML_COMMANDS = 'SELECT idaccount,name FROM account where username=:username and password=:password';
        $cw->DATASET = array('username'=>$post->dataset[0],'password'=>$post->dataset[1]);
        $cw->ReadFetchNumฺByPrepare();
        echo $cw->QUERY_RESULT[0];
        $cw->DisconnectDB();
        
        //Create Session
        session_start();
        $_SESSION['id'] = $cw->QUERY_RESULT[0];
        $_SESSION['account_name'] = $cw->QUERY_RESULT[1];
        $_SESSION['start'] = time(); // Taking now logged in time.
        // Ending a session in 30 minutes from the starting time.
        $_SESSION['expire'] = $_SESSION['start'] + (60 * 60);
        unset($cw);
    }
?>