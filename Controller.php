<?php

class Controller {

    public function auth() {
        if (isset($_SESSION['token']) && isset($_SESSION['token_time']) && isset($_GET['id'])) {

            if ($_SESSION['token'] == $_GET['id']) {
                //On stocke le timestamp il y a 30 minutes
                $timestamp_ancien = time() - (30 * 60);
                //Si le jeton n'est pas expir�
                if ($_SESSION['token_time'] >= $timestamp_ancien) {
                    //insertion cookies du token
                    setcookie("Nantes", $_SESSION['token'], time() + 1800);
                    return true;
                }
                return false;
            }
            return false;
        }
        return false;
    }

    public function getAllLivre() {

        include "Constantes.php";
        include "PDO/LivreDB.php";
        include "PDO/connectionPDO.php";

        try {
            //recup�ration du modele a partir de pdo

            $livreBDD = new LivreDB($pdo);
            $res = $livreBDD->selectAll();

            //encodage au format json

            echo json_encode($res);
        }
        //lev�e d'exception si probleme acces bdd
        catch (Exception $e) {
            throw new Exception(Constantes::EXCEPTION_DB_LIVRE);
        }
    }

    public function authentif($l,$p,$pdo) {
       
   
 try {
      
        include_once "./PDO/PersonneDB.php";
   
        //connexion a la bdd
        $accesPersBDD = new PersonneDB($pdo);
        $result = $accesPersBDD->authentification($l,$p);
        return $result;
    }
     //lev�e d'exception si probleme acces bdd
        catch (Exception $e) {
            throw new Exception(Constantes::EXCEPTION_DB_PERSONNE);
        }

}
}
