<?php
session_start();
require_once "Controller.php";
require_once "vue/vueAccueil.php";
$control=new Controller();

if($control->auth())
        {
$v=new vueAccueil();
$v->affiche();

        }
	

else
{
	
	header('Location: index.php?error=login');

}