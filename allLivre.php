<?php

session_start();
require_once "Controller.php";
require_once "vue/vueAllLivre.php";
$control=new Controller();

if($control->auth())
        {
$v=new vueAllLivre();
$v->affiche();

        }
	

else
{
	
	header('Location: index.php?error=login');

}