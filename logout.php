<?php
    // initial session
    session_start();
    $post = json_decode(file_get_contents('php://input'));
    session_destroy();
    echo $post->status;
?>