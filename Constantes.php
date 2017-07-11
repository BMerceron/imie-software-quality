<?php
/**
 * 
 *Classe definissant les constantes de l'application
 * @author pascal LAMY
 *
 */
 class Constantes {

	
	const PATH_SEPARATOR ="\\";
/**
 * constante de connexion a la base de donnée
 */
	 const HOST="localhost";
	 const USER="root";
	 const PASSWORD="toor";
	 const BASE="database";
	 const TYPE="mysql";
	 
	 //gestion des exceptions
	 //exception PDO
	 const EXCEPTION_DB_PERSONNE="RECORD PERSONNE not present in DATABASE";
	 const EXCEPTION_DB_ADRESSE="RECORD ADRESSE pas present in DATABASE";
         const EXCEPTION_DB_LIVRE="RECORD LIVRE not present in DATABASE";
	 const EXCEPTION_DB_CONVERT_ADR="ERROR CONVERT AdressePDO to Adresse";
         const EXCEPTION_DB_CONVERT_PERS="ERROR CONVERT PersonnePDO to Personne";
         const EXCEPTION_DB_CONVERT_LIVR="ERROR CONVERT LivrePDO to Livre";
         
	 //exception PDO update
	 const EXCEPTION_DB_PERS_UP="RECORD PERSONNE not update in DATABASE";
	
	
	 
     //connexion PDO
	const STR_CONNEXION = "Constantes::TYPE.':host='.Constantes::HOST.';dbname='.Constantes::BASE"; 
    const ARR_EXTRA_PARAMETER ="array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'";

}


