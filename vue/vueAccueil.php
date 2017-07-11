<?php
include_once "vue/Vue.php";
class vueAccueil extends Vue {
	
function affiche(){

include "header.html";
echo "<article>";
echo"<section>";
echo"<p>Bienvenue ".$_SESSION['nom']."</p>";
echo'<p><a href="ajoutLivre.php?id='.$_SESSION['token'].'" id="addLivre" class="easyui-linkbutton">Ajouter un livre </a>';
echo'<a href="allLivre.php?id='.$_SESSION['token'].'" id="allLivre" class="easyui-linkbutton"> Liste des Livres </a>';	
echo'<a href="deleteLivre.php?id='.$_SESSION['token'].'" id="delLivre" class="easyui-linkbutton"> Supprimer un livre</a>';
echo'<a href="accueil.php" class="easyui-linkbutton">Déconnexion </a></p>';
echo"</section>";
echo"</article>";
	


include "footer.html";
        }
}