	<script type="text/javascript">

	var ok=0;
		$(function(){
		
		
			$('#dg').datagrid({
			
				onSelect: function(index,row){
				
				 $('#cc').html(row.texte_message);  
				 $('#print').linkbutton('enable');
				
				
					// $('#cc').html("<p>"+row.texte_message +"</p>");
				},
				onDblClickCell:function(field,row){
				
					consultMessage();
					  },
				onLoadSuccess:function(data){
						  $('#print').linkbutton('disable');
							if(ok==0){
						 ok=1;
						  $.messager.show({
						  title:'Info',
						  msg:'Vous avez '+data.total+' message(s) non lu(s)'
						  });
							}
				
				}
			
				
			});
			$('#expediteurbt').combogrid({
				onSelect: function(index,row){
				var string=row.raisonSociale+"\n"+row.adresse1+"\n"+row.adresse2+"\n"+row.codePostal+"\n"+row.ville;
				$('#expbt').val(string);
			}
			});
			$('#adressebt').combogrid({
				onSelect: function(index,row){
				var string=row.raisonSociale+"\n"+row.adresse1+"\n"+row.adresse2+"\n"+row.codePostal+"\n"+row.ville;
				$('#adrbt').val(string);
			}
			});
			$('#expediteurble').combogrid({
				onSelect: function(index,row){
				var string=row.raisonSociale+"\n"+row.adresse1+"\n"+row.adresse2+"\n"+row.codePostal+"\n"+row.ville;
				$('#expble').val(string);
			}
			});
			$('#adresseble').combogrid({
				onSelect: function(index,row){
				var string=row.raisonSociale+"\n"+row.adresse1+"\n"+row.adresse2+"\n"+row.codePostal+"\n"+row.ville;
				$('#adrble').val(string);
			}
			});
			$('#dossier').tree({
				onSelect: function(node){
				if(node.id==22 ||node.id==2.1 || node.id==2.2 || node.id==2.3){
					$('#dg').datagrid('hideColumn','raisonSociale');
					
					$('#dg').datagrid('showColumn','raisonSocialeE');
					 $('#cc').html('');  		
				}
				else {
					$('#dg').datagrid('hideColumn','raisonSocialeE');
					$('#dg').datagrid('showColumn','raisonSociale');	
					 $('#cc').html('');  

				}
				
					doSearch(node.id);
					$('#dg').datagrid('reload');  
					$('#print').linkbutton('disable');
					
						
					
				},
				onLoadSuccess:function(node,data){
					$('#dg').datagrid('hideColumn','raisonSocialeE');
					$('#dg').datagrid('showColumn','raisonSociale');	
				}
			});
			
		});
		// formulaire de reapro
		
		function doSearch(val){
			idclient = $('#client').val();
			// alert("op="+val.id+"idclient="+idclient);
			$('#dg').datagrid('loadData', {"total":0,"rows":[]});
			$('#dg').datagrid('load',{
				idop: val,
				id: idclient
			})
			$('#dg').datagrid('reload');
		}
		
		function formatStatut(val,row){
			if(row.lu==0){
			res='<img src=\"images/mail-nonlu.png\" border=\"0\">';
			}
			else {
				res='<img src=\"images/mail-lu.png\" border=\"0\">';
			}
				return res;	
				}
		function formatDateR(val,row){
			if(row){
				strDate=row.date_message;
				  year = strDate.substring(0,4);
					month = strDate.substring(5,7);
					day = strDate.substring(8,10);
					heure=strDate.substring(11,13);
					min=strDate.substring(14,16);
				
		var res=day+'/'+month+'/'+year+' '+heure+':'+min;
			
			return res;
			}

				}
		function formatDetail(val,row) {
			var node=$('#dossier').tree('getSelected');
			var $res3="";
			if(!node){
				var node = [{
					"id":1,
					"text":"R&eacute;approvisionnement"
					}];
			}
			if(node.id==7 || node.id==22 || node.id==2.1 || node.id==2.2|| node.id==2.3){
				$res2="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
			}

			else {
			$res2="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
			if(row.id_typeMessage==3 ||row.id_typeMessage==5 ||row.id_typeMessage==6|| row.id_typeMessage==8){
			$res2 = "<a title='R&eacute;pondre' href=\"#\" onclick=\"repondreMessage()\"><img src=\"images/redo.png\" border=\"0\"></a> ";
			}
			}
			$res3 = "<a title='Supprimer' href=\"#\" onclick=\"delMessage()\"><img src=\"images/cancel.png\" border=\"0\"></a>";
			
		return  $res2 + $res3;

				}

		function consultMessage(){
		
			var row = $('#dg').datagrid('getSelected');
			if (row){
				var lu=0;
				$('#dlc').dialog('open').dialog('setTitle','Consultation du message de '+row.raisonSociale);
				$('#fmc').form('load',row);		
				$("#infomessage").html(row.texte_message);
				// bascule de non-lu en lu
				var node=$('#dossier').tree('getSelected');
				
				if(node==null){
				lu=1;
				}
				if(lu==1||node.id==1.1 ||node.id==1 || node.id==2 || node.id==3){
				 $.getJSON("datagrid_getlu.php?id=" +row.idm, function(data){
			       })
				}
			       $('#dg').datagrid('reload');
				
				
			}
		}
		function closeWindow(){


			$('#dlc').dialog('close');	
			$('#dldr').dialog('close');	
			$('#dlabl').dialog('close');
			$('#dlbt').dialog('close');	
			$('#dlabt').dialog('close');	
			$('#dlde').dialog('close');
			$('#dlble').dialog('close');
			
		
	}	
		function doForm(){

			var row = $('#dg').datagrid('getSelected');
			var val = $('#formselect').val();
			// alert("val="+val+"row="+row.id_typeMessage);
		if(val==1){
				$('#dldr').dialog('open').dialog('setTitle','Demande de R&eacute;approvisionnement');
				$('#cartcontent').datagrid('loadData', {"total":0,"rows":[]});
				$('#produit').combogrid('loadData', {"total":0,"rows":[]});
				data = {"total":0,"rows":[]};
		}
		else if(val==5){
	
			$('#dlbt').dialog('open').dialog('setTitle','Bordereau de Transfert');
			
		}
		else if(val==7){
			
			$('#dlde').dialog('open').dialog('setTitle','Demande d\'enlevement');
			$('#numde').html("<p>"+row.objet+"</p>");
			
			var res=row.texte_message;
			
			var nb=res.length;
			var oc=res.indexOf("<table style", 0);
			var ocf=res.indexOf("</table>", 0);
			var nu= ocf-oc;
			var demandeur=row.raisonSociale;
			$('#dem').html("<table><tr><td><label>Demandeur:</label></td><td><label>"+demandeur+"</label></td></tr></table>");
			$('#comde').html(res.substr(oc,ocf));
		
		}
		
		}	
		var data = {"total":0,"rows":[]};
		function addProduct(name,quant){
			var numquant=parseInt(quant);
			
			function add(){
				for(var i=0; i<data.total; i++){
					var row = data.rows[i];
					
					if (row.name == name){
						var temp=parseInt(row.quantite);
						temp += numquant;
						row.quantite=temp;
						return;
					}
				}
				
				data.total += 1;
				data.rows.push({
					name:name,
					quantite:quant,
					remove: '<a href="#" class="remove" onclick="removeProduct(this, event)"><img src="images/cancel.png"></a>'
				});
			}
			if(numquant>0){
			add();
			}
			
			$('#cartcontent').datagrid('loadData', data);
		
		}
		function addProductTr(name,quant){
			var numquant=parseInt(quant);
			
			function add(){
				for(var i=0; i<data.total; i++){
					var row = data.rows[i];
					
					if (row.name == name){
						var temp=parseInt(row.quantite);
						temp += numquant;
						row.quantite=temp;
						return;
					}
				}
				
				data.total += 1;
				data.rows.push({
					name:name,
					quantite:quant,
					remove: '<a href="#" class="remove" onclick="removeProductTr(this, event)"><img src="images/cancel.png"></a>'
				});
			}
			if(numquant>0){
			add();
			}
			
			$('#cartcontentTr').datagrid('loadData', data);
		
		}
		function addProductDe(name,quant){
			var numquant=parseInt(quant);
			
			function add(){
				for(var i=0; i<data.total; i++){
					var row = data.rows[i];
					
					if (row.name == name){
						var temp=parseInt(row.quantite);
						temp += numquant;
						row.quantite=temp;
						return;
					}
				}
				
				data.total += 1;
				data.rows.push({
					name:name,
					quantite:quant,
					remove: '<a href="#" class="remove" onclick="removeProductDe(this, event)"><img src="images/cancel.png"></a>'
				});
			}
			if(numquant>0){
			add();
			}
			
			$('#cartcontentDe').datagrid('loadData', data);
		
		}
		function removeProduct(el, event) {
		    var tr = $(el).closest('tr');
		    var name = tr.find('td[field=name]').text();
		    var quantite = tr.find('td[field=quantite]').text();
		    for (var i = 0; i < data.total; i++) {
		        var row = data.rows[i];
		        if (row.name == name) {
		            data.rows.splice(i, 1);
		            data.total--;
		            break;
		        }
		    }
		   
		    $('#cartcontent').datagrid('loadData', data);
	
		}
		function removeProductTr(el, event) {
		    var tr = $(el).closest('tr');
		    var name = tr.find('td[field=name]').text();
		    var quantite = tr.find('td[field=quantite]').text();
		    for (var i = 0; i < data.total; i++) {
		        var row = data.rows[i];
		        if (row.name == name) {
		            data.rows.splice(i, 1);
		            data.total--;
		            break;
		        }
		    }
		   
		    $('#cartcontentTr').datagrid('loadData', data);
	
		}
		function removeProductDe(el, event) {
		    var tr = $(el).closest('tr');
		    var name = tr.find('td[field=name]').text();
		    var quantite = tr.find('td[field=quantite]').text();
		    for (var i = 0; i < data.total; i++) {
		        var row = data.rows[i];
		        if (row.name == name) {
		            data.rows.splice(i, 1);
		            data.total--;
		            break;
		        }
		    }
		   
		    $('#cartcontentDe').datagrid('loadData', data);
	
		}
		function addForm(){
	
		 var val = $('#produit').combogrid('getValue');
		 var quant=$('#qu').numberspinner('getValue');
			addProduct(val,quant);
		}	
		function addFormTr(){
			
			 var val = $('#produitTr').combogrid('getValue');
			 var quant=$('#quTr').numberspinner('getValue');
				addProductTr(val,quant);
			}	
		function addFormDe(){
			
			 var val = $('#produitDe').combogrid('getValue');
			 var quant=$('#quDe').numberspinner('getValue');
				addProductDe(val,quant);
			}	

		function validForm(){
			

					  var rowsi = $('#cartcontent').datagrid('getRows');
					  var dateR =$('#dateRe').datebox('getValue');
					  var iduser=$('#iduser').val();
					  var typemes=$('#formselect').val();
			
					if(dateR!='' && rowsi!=null){
					  jQuery.post("validMessage.php?datea="+dateR+"&iduser="+iduser+"&typemes="+typemes,  {json: JSON.stringify(rowsi)}, function(data){ alert(data); });
					}
					else {
						alert("Vous n'avez pas saisi tous les champs!");
						exit;
					}
					
					closeWindow();

					$('#dg').datagrid('reload'); 
					
				}
		function reload(){
			$('#dg').datagrid('reload');  
		}
		function repondreMessage(){

			var row = $('#dg').datagrid('getSelected');
			if (row.id_typeMessage==3){
				$('#dlabl').dialog('open').dialog('setTitle','Accuse reception BL n&deg;'+row.id_commande);
				$('#numabl').html("<p>"+row.objet+"</p>");
				$('#comabl').html(row.texte_message +"<hr><table><tr><td>Destinataire:</td><td>"+row.raisonSociale+"</td></tr></table>" );	
			}
			else if (row.id_typeMessage==5){
				$('#dlabt').dialog('open').dialog('setTitle','Accuse reception BT de la '+row.objet);
				$('#numabt').html("<p>"+row.objet+"</p>");
				$('#comabt').html(row.texte_message +"<hr>" );	
			}
			else if(row.id_typeMessage==8){
				$('#dlble').dialog('open').dialog('setTitle','Bon de Livraison enlevement');
				$('#numble').html("<p>"+row.objet+"</p>");
				
				var res=row.texte_message;
				
				var nb=res.length;
				var oc=res.indexOf("<table style", 0);
				var ocf=res.indexOf("</table>", 0);
				var nu= ocf-oc;
				var resok=res.substr(oc,nu)+"</table>";
				// alert(resok);
				// var demandeur=row.raisonSociale;
				// $('#dem').html("<table><tr><td><label>Demandeur:</label></td><td><label>"+demandeur+"</label></td></tr></table>");
				$('#comble').html(resok);	
				
			}	
				   

		}
		function validFormABl(){
			  
			  var row = $('#dg').datagrid('getSelected');
			  var iduser=$('#iduserabl').val();
			  var dest=row.id_expediteur;
			  var message=$('#messageabl').val();
			  var objet=row.objet;
			 var datas=row.texte_message;
			
			  jQuery.post("validMessageABl.php?dest="+dest+"&typemes=4&mes="+message+"&objet="+objet+"&iduser="+iduser+"&idc="+row.id_commande,  {json: datas}, function(data){ alert(data); });
			
			  // $.post("validMessage.php?datea="+dateR+"&iduser="+iduser+"&typemes="+typemes,myJSONText);
			closeWindow();
			// $.messager.alert('Information', data, 'info');
			$('#dg').datagrid('reload'); 
			
		}
		function validFormABt(){
			  
			  var row = $('#dg').datagrid('getSelected');
			  var idc=row.id_commande;
			  var iduser=$('#iduserabt').val();
			  var dest=row.id_expediteur;
			  var message=$('#messageabt').val();
			  var objet=row.objet;
			 var datas=row.texte_message;
			
			  jQuery.post("validMessageABt.php?typemes=6&mes="+message+"&objet="+objet+"&iduser="+iduser+"&dest="+dest+"&idc="+idc,  {json: datas}, function(data){ alert(data); });
			
			
			closeWindow();
			// $.messager.alert('Information', data, 'info');
			$('#dg').datagrid('reload'); 
			
		}
		function validFormDE(){
			  
			  var row = $('#dg').datagrid('getSelected');
			  var iduser=$('#iduserde').val();
			  var objet=row.objet;
			 var message=$('#messagede').val();
			  var tm=row.texte_message;
				var nb=tm.length -1;
				var oc=tm.indexOf("<table style", 0);
				var ocf=tm.indexOf("</table>", 0);
				var nu= ocf-oc;
				var datas=tm.substr(oc,nb)+"</table>";
			
			  jQuery.post("validMessageDE.php?typemes=7&objet="+objet+"&iduser="+iduser+"&dem="+dem +"&mes="+message,  {json: datas}, function(data){ alert(data); });
			
			
			closeWindow();
			// $.messager.alert('Information', data, 'info');
			$('#dg').datagrid('reload'); 
			
		}
		function validFormBt(){
			
			  var r = $('#expediteurbt').combogrid('grid');
			  var rowexp=r.datagrid('getSelected');
			 var rowsi = $('#cartcontentTr').datagrid('getRows');
			 var a = $('#adressebt').combogrid('grid');
		     var adrlii=a.datagrid('getSelected');
			var adrbti=adrlii.ref;
			  var iduser=$('#iduserbt').val();
			
			  var expbt=rowexp.id;
 
			  var message=$('#messagebt').val();
			  var expediteur=$('#expbt').val();
			var adrli=$('#adrbt').val();
			  if(rowexp==null || expediteur==""){
			alert("Vous devez saisir le champ expediteur!");
			exit;
			  }
			  else if(adrli==""){
				  alert("Vous devez saisir le champ Destinataire!");
					exit;
			  }
			  
			  var res="<table><tr><td>Expediteur:</td><td><textarea  style=\"width:250px;border:1px solid #ccc;padding:2px;;height:80px;\">"+expediteur+
			  "</textarea></td></tr><tr><td>Adresse de livraison</td><td><textarea  style=\"width:250px;border:1px solid #ccc;padding:2px;;height:80px;\">"+adrli+
			  "</textarea></td></tr><tr><td>Message:</td><td><textarea  style=\"width:250px;border:1px solid #ccc;padding:2px;;height:80px;\">"
			  +message+"</textarea></td></tr></table>";
	
			  jQuery.post("validMessageBt.php?iduser="+iduser+"&expbt="+expbt+"&idbt="+adrbti,  {json: res, com: rowsi,dest: adrli}, function(data){ alert(data); });
			
	
			closeWindow();
		
			$('#dg').datagrid('reload'); 
			
		}
		function validFormBLe(){
			  var row = $('#dg').datagrid('getSelected');
			  var r = $('#expediteurble').combogrid('grid');
			  var rowexp=r.datagrid('getSelected');
			
			  var a = $('#adresseble').combogrid('grid');
			  var adrli=a.datagrid('getSelected');
			  var iduser=$('#iduserbt').val();
			  var dest=row.id_expediteur;
			  var expbt=rowexp.id;
			  var adrbt=adrli.ref;
			  var objet=row.objet;
			  
			  var message=$('#messageble').val();
			  var expediteur=$('#expble').val();
			  var adrli=$('#adrble').val();
		
			  var tm=row.texte_message;
				var nb=tm.length;
				var oc=tm.indexOf("<table style", 0);
				var ocf=tm.indexOf("</table>", 0);
				var nu= ocf-oc;
				var detailC=tm.substr(oc,nu);
			  
			  var res="<table><tr><td>Expediteur:</td><td><textarea  style=\"width:250px;border:1px solid #ccc;padding:2px;;height:80px;\">"+expediteur+
			  "</textarea></td></tr><tr><td>Adresse de livraison</td><td><textarea  style=\"width:250px;border:1px solid #ccc;padding:2px;;height:80px;\">"+adrli+
			  "</textarea></td></tr><tr><td>Message:</td><td><textarea  style=\"width:250px;border:1px solid #ccc;padding:2px;;height:80px;\">"
			  +message+"</textarea></td></tr></table>"+detailC;
			// var datas=row.texte_message;
			// alert("dest1="+dest+"desr2="+adrbt+"exped="+expbt+"iduser="+iduser);
			  jQuery.post("validMessageBLe.php?dest="+dest+"&adrbt="+adrbt+"&objet="+objet+"&iduser="+iduser+"&expbt="+expbt,  {json: res}, function(data){ alert(data); });
			
			  // $.post("validMessage.php?datea="+dateR+"&iduser="+iduser+"&typemes="+typemes,myJSONText);
			closeWindow();
			// $.messager.alert('Information', data, 'info');
			$('#dg').datagrid('reload'); 
			
		}
		function delMessage(){
			  
			  var row = $('#dg').datagrid('getSelected');

			  var id_message=row.idm;

				var node=$('#dossier').tree('getSelected');
				if(!node){
					var node = [{
						"id":1,
						"text":"R&eacute;approvisionnement"
						}];
				}
				if(node.id==7 || node.id==22 || node.id==2.1 || node.id==2.2|| node.id==2.3){
					jQuery.post("delMessageE.php",  {json: id_message}, function(data){});
				}
				else {

			  jQuery.post("delMessage.php",  {json: id_message}, function(data){});
				}
				$('#dg').datagrid('reload'); 
		}
	</script>