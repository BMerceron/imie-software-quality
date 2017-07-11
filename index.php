<?php
include_once"vue/vueAuthentification.php";
define('BASE_PATH', realpath(dirname(__FILE__)));

	// Active tout les warning. Utile en phase de d�veloppement
	// En phase de production, remplacer E_ALL par 0
error_reporting(0);

//appel de la vue authentification

$v=new vueAuthentification();
$v->affiche();

?>
