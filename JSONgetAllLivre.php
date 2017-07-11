<?php
session_start();
require_once "Controller.php";

$c=new Controller();
//controle token session
if($c->auth()){
//appel de la méthode qui selectionne tous les livres
$c->getAllLivre();
}