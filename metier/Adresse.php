<?php
require_once "Mediatheque.php";
/**
 * 
 * Classe permettant de definir une adresse
 * @author Pascal Lamy
 *
 */
class Adresse extends Mediatheque{
	
	private $id;
	private $numero;
	private $rue;
	private $codePostal;
	private $ville;
	
	function __construct($numero, $rue, $codePostal, $ville) {
            $this->numero = $numero;
            $this->rue = $rue;
            $this->codePostal = $codePostal;
            $this->ville = $ville;
        }

        function getId() {
            return $this->id;
        }

        function getNumero() {
            return $this->numero;
        }

        function getRue() {
            return $this->rue;
        }

        function getCodePostal() {
            return $this->codePostal;
        }

        function getVille() {
            return $this->ville;
        }

        function setId($id) {
            $this->id = $id;
        }

        function setNumero($numero) {
            $this->numero = $numero;
        }

        function setRue($rue) {
            $this->rue = $rue;
        }

        function setCodePostal($codePostal) {
            $this->codePostal = $codePostal;
        }

        function setVille($ville) {
            $this->ville = $ville;
        }


}