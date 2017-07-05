<?php
defined('BASEPATH') OR exit('');

?>

<!DOCTYPE HTML>
<html>
    <head>
        <title><?= isset ($pageTitle) ? $pageTitle:$this->uri->segment(1) ?></title>
        <!--Favicon-->
        <link rel="shortcut icon"  href=""> <!--add the .ico file-->

        <!--Load Files-->
        
        <?php if($_SERVER['HTTP_HOST'] == "localhost" || 
        stristr($_SERVER['HTTP_HOST'], "192.168.") !== FALSE ||
        stristr($_SERVER['HTTP_HOST'], "127.0.0.") !== FALSE
        ): ?>

        <link rel="stylesheet" href="<?= base_url()?>public/bootstrap/css/bootstrap.min.css">
        <link rel="stylesheet" href="<?= base_url()?>public/bootstrap/css/bootstrap-theme.css">
        <link rel="stylesheet" href="<?= base_url()?>public/font-awesome/css/font-awesome.min.css">
        <link rel="stylesheet" href="<?= base_url()?>public/font-awesome/css/font-awesome-animation.css">

        <script src="<?= base_url()?>public/js/jquery.min.js"></script>
        <script src="<?= base_url()?>public/bootstrap/js/bootstrap.min.js"></script>

        <?php else: ?>

        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome-animation/0.0.10/font-awesome-animation.min.css">

        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

        <?php endif; ?>
        
        <!--Custom css-->
        <link rel="stylesheet" href="<?= base_url()?>public/css/main.css">

        <!--Custome js-->
        <script src="<?= base_url()?>public/js/main.js"></script>
    </head>
    <body>
        <?= $pageContent?>
    </body>
</html>