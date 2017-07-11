<?php
include_once "vue/Vue.php";
class vueAuthentification extends Vue {

public function affiche(){
include("headerAuth.html");
echo "<div id='authent'>";  

echo"		<article>";
echo"		<header>";
		//<!-- affichage message erreur si authentification erron�e -->
	
echo"		</header>";
echo"		<section>";
	//<!--ecran d'authentification -->

echo '<FORM name="form" class="verif_form" action="verif.php" method="post" >';
echo '<TABLE width=225 border=0 cellpadding=3>';
//affichage du message sur erruer login
echo '<div id="messagel"></div>';
//affichage message si erreur pwd
echo '<div id="messagep"></div>';
//affichage message si lev�e exception
echo '<div id="messagee"></div>';
echo '<div>';
//si message error -> session expir�
if(isset($_GET['error']) &&$_GET['error']=="login" ){echo "<p>Votre session a expir�e</p>";}
echo '</div>';
echo '<tr><td colspan=2></td></tr>';
echo '<tr><td>Login:</td><td><input type=text id="login" name="log"></td></tr>';
echo '<tr><td>Mot de passe:</td><td><input type="PASSWORD" id="password" name="pwd"></td></tr>';
echo '<tr><td colspan=2 align=center><input type="submit" id="valider" value="Connexion" ></td></tr>';
echo '</TABLE>';
echo '</FORM> ';
		echo '	</section>';
		echo '		<footer>';
		echo '		 </footer>';
		echo '</article>';
		echo '</div>';
		include("footer.html");
}
}
?>