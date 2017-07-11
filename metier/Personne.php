<?php

require_once "Adresse.php";
require_once "Mediatheque.php";
/**
 *classe personne designant les carateristiques d'une personne
 * @author lamy pascal
 *
 */

class Personne extends mediatheque{

	/**id de la personne*/
	private $id;
	/**nom de la personne*/
	private $nom;
	/**prenom de la personne*/
	private $prenom;
	/**Date de naissance*/
	private $datenaiss;
	/**T�l�phone de la personne */
	private $telephone;
	/**email de la personne**/
	private $email;
        



	/**constructeur permettant de creer une personne en passant en parametre les valeurs  de ces attributs
	 * nom , prenom ,login ,date de naissance ,telephone, email **/
        /**
         * 
         * @param type $n
         * @param type $p
         * @param type $d
         * @param type $t
         * @param type $e
         */
	
        /**
         * 
         * @assert ("Hollande","Francois","1969-01-20","0656463524","fhollande@free.fr")
         * @assert ("Moulin","Jean","1969-01-20","0656463524","fhollande@free.fr")
         */
	/**public function __construct($n,$p,$d,$t,$e,Adresse $adr){

		$this->nom=$n;
		$this->prenom=$p;
		$this->datenaiss=$d;
		$this->telephone=$t;
		$this->email=$e;
                $this->adresse=$adr;
		
	}*/
public function __construct($n,$p,$d,$t,$e){

		$this->nom=$n;
		$this->prenom=$p;
		$this->datenaiss=$d;
		$this->telephone=$t;
		$this->email=$e;
                
		
	}
	/**
	 * Methodes getter pour r�cup�rer les valeurs des  aux attributs de l'objet
         * @assertClass
	 */
	public function getId(){
		return $this->id;
	}
	public function getNom(){
		return $this->nom;
	}
	public function getPrenom(){
		return $this->prenom;
	}
	public function getDatenaissance(){
		return $this->datenaiss;
	}
	public function getTelephone(){
		return $this->telephone;
	}
	public function getEmail(){
		return $this->email;
	}

	/**
	 * Methodes setter pour avoir affecter des valeurs  aux attributs de l'objet
	 */

	public function setId($id){
		if($id!=null){
			$this->id=$id;
		}
	}
	public function setNom($n){
		if($n!=null && is_string($n)){
			$this->nom=$n;
		}
	}
	public function setPrenom($pre){
		if($pre!=null && is_string($pre)){
			$this->prenom=$pre;
		}
	}
	public function setDateNaissance($dateNais){
		if($dateNais!=null && is_string($dateNais)){
			$this->datenaiss=$dateNais;
		}
	}
	public function setTelephone($tel){
		if($tel!=null && is_string($tel)){
			$this->telephone=$tel;
		}
	}
	public function setEmail($mail){
		if($mail!=null && is_string($mail)){
			$this->email=$mail;
		}
	}
	
	
	/**
	 *
	 * renvoie sous forme de chaine de caracteres l'objet personne en appelant echo ou print
	 */

	public function __toString(){
		return '[' .$this->getNom().', '
		.$this->getPrenom(). ','
		.$this->getDatenaissance(). ','
		.$this->getTelephone(). ','
		.$this->getEmail(). ']';

	}

}