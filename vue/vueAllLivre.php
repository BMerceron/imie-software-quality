<?php
include_once "vue/Vue.php";
class vueAllLivre extends Vue {
	
function affiche(){

	include "headerJeasyui.html";
		
		
		echo "<article>";
		echo"<section>";
		echo '<p><a href="accueil.php?id='.$_SESSION['token'].'"  class="easyui-linkbutton">Retour Accueil </a>&nbsp;';
                echo '<div title="Liste des Livres" style="padding: 10px;">';
echo '<table  id="dg" class="easyui-datagrid"
	style="width: 600px; height: 400px" url="JSONgetAllLivre.php?id='.$_SESSION['token'].'"
	title="Liste des Livres"
	loadMsg="Chargement en Cours,Veuillez patienter..." singleSelect="true"
	rownumbers="false" pagination="false"  fitColumns="true" striped="true">';
		
		echo	'<thead>';
		echo'	<tr>';
		echo '<th field="id" width="40" sortable="true">ID</th>'; 
		echo '<th field="titre" width="80" sortable="true">Titre</th>';
echo '<th field="auteur" width="80" sortable="true">Auteur</th>';
echo '<th field="edition" width="80" sortable="true">Edition</th>';
echo '<th field="information" width="80" sortable="true">Information</th>';
echo '<th field="detail" width="80" align="center" sortable="false"
				formatter="formatDetail">D&eacute;tail</th>';

		
		echo '	</tr>';
		echo '</thead>';
	echo '</table></div>';
		echo"</section>";
		echo"</article>";
// boite de dialogue appel�e pour afficher le detail du livre
//formulaire consult livre

echo '<div id="dlc" class="easyui-dialog"
	style="width: 350px; height: 350px; padding: 10px 20px" closed="true">';

echo '<form id="fmc">
<table>
	<tr>
		<td class=\'dv-label\'>Id:</td>
		<td><input name="id" type="text" class="easyui-validatebox"></td>
	</tr>
	<tr>
		<td class=\'dv-label\'>Titre:</td>
		<td><input name="titre" type="text" class="easyui-validatebox"></td>
	</tr>
	<tr>';
echo '	<td class=\'dv-label\'>Auteur:</td>
		<td><input name="auteur" type="text" class="easyui-validatebox"></td>
	</tr>
	<tr>
		<td class=\'dv-label\'>Edition:</td>
		<td><input name="edition" type="text" class="easyui-validatebox">
</td>
	</tr>
	<tr>
		<td class=\'dv-label\'>Information:</td>
		<td><textarea name="information"  class="easyui-validatebox"></textarea></td>
	</tr>

	
</table>
<table>
	<tr>

		<td><input type="button" value="Fermer" onclick="closeWindow()"></td>
	</tr>
</table>


</form>
</div>';
//formulaire suppression livre
echo '
<div id="dld" class="easyui-dialog"
	style="width: 500px; height: 200px; padding: 10px 20px" closed="true">

<form id="fmd" method="post">
<table>
	<tr>
		<td colspan="2" class=\'dv-label\'>Etes vous sur de vouloir supprimer
		ce livre?</td>
	</tr>
	<tr>
		<td>&nbsp;</td>
	</tr>
</table>

<table>
	<input type="hidden" name="id"/>
	<tr>
	
		<td>&nbsp;</td>
	</tr>
	<tr>
		<td>&nbsp;</td>
	</tr>
	<tr>
		<td><input type="submit" value="Supprimer"></td>
		<td><input type="button" value="Annuler" onclick="closeWindow()"></td>
	</tr>
</table>

</form>
</div>';


include "footer.html";
        }
}
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

