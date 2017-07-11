<?php
session_start();
//controller qui v�rifie l'authentification.
//l'appel est fait pas jquery .
require_once "Controller.php";
require_once "Constantes.php";
require_once "PDO/connectionPDO.php";

error_reporting(0);
//recuperation login et pwd du formulaire
$login=$_POST['log'];
$pwd=$_POST['pwd'];

$c= new Controller();
$result= $c->authentif($login, $pwd,$pdo);

if(empty($result)){
	echo "erreur de login ou de mot de passe!!";
}

else {
	//conversion du pdo en objet
	$obj=(object)$result;
	$nom=$obj->login;
	$idpers=$obj->id;
	//creation d'un token et stockage en dans la variable de session
		$token = uniqid(rand(), true);
		$_SESSION['token'] = $token;
		//heure de creation du token en timestamp
		$_SESSION['token_time'] = time();
		$_SESSION['nom'] = $nom;
		$_SESSION['id'] = $idpers;
//ok renvoy� au javascript pour rediriger vers accueil.php
echo "ok-$token";
	
}
