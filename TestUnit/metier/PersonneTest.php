<?php

include_once "../metier/Personne.php";


class PersonneTest extends PHPUnit_Framework_TestCase
{
    /**
     * @var Personne
     */
    protected $objects;

    /**
     * Sets up the fixture, for example, opens a network connection.
     * This method is called before a test is executed.
     */
    protected function setUp()
    {
        $adr=new Adresse("1","2", "rue de paris", "44000", "Nantes");
        $this->objects = new Personne("Hollande","Francois","1969-01-20","0656463524","fhollande@free.fr",$adr);
        $this->objects->setId("49");
    }

    /**
     * Tears down the fixture, for example, closes a network connection.
     * This method is called after a test is executed.
     */
    protected function tearDown()
    {
    }

    /**
     * @covers Personne::getId
     */
    public function testGetId()
    {
        // Remove the following lines when you implement this test.
        $this->assertEquals("49",$this->objects->getId());
       
    }

    /**
     * @covers Personne::getNom
     * 
     */
    public function testGetNom()
    {
        
        $this->assertEquals("Hollande",$this->objects->getNom());
    }

    /**
     * @covers Personne::getPrenom
     */
    public function testGetPrenom()
    {
           $this->assertEquals("Francois",$this->objects->getPrenom());
    }

    /**
     * @covers Personne::getDatenaissance
     * 
     */
    public function testGetDatenaissance()
    {
    
        $this->assertEquals("1969-01-20",$this->objects->getDatenaissance());
    }

    /**
     * @covers Personne::getTelephone
     * 
     */
    public function testGetTelephone()
    {
    
              $this->assertEquals("0656463524",$this->objects->getTelephone());
        
    }

    /**
     * @covers Personne::getEmail
     * 
     */
    public function testGetEmail()
    {
       $this->assertEquals("fhollande@free.fr",$this->objects->getEmail());
    }

    /**
     * @covers Personne::setId
     */
    public function testSetId()
    {
     $this->objects->setId("145");
      $this->assertEquals("145",$this->objects->getId());
    }

    /**
     * @covers Personne::setNom
     * 
     */
    public function testSetNom()
    {
        $this->objects->setNom("Jupé");
        $this->assertEquals("Jupé",$this->objects->getNom());
    }

    /**
     * @covers Personne::setPrenom
     * 
     */
    public function testSetPrenom()
    {
        $this->objects->setPrenom("Alain");
        $this->assertEquals("Alain",$this->objects->getPrenom());
    }

    /**
     * @covers Personne::setDateNaissance
     * 
     */
    public function testSetDateNaissance()
    {
         $this->objects->setDateNaissance("1973-01-28");
        $this->assertEquals("1973-01-28",$this->objects->getDatenaissance());
    }

    /**
     * @covers Personne::setTelephone
     * 
     */
    public function testSetTelephone()
    {
         $this->objects->setTelephone("0734233434");
        $this->assertEquals("0734233434",$this->objects->getTelephone());
    }

    /**
     * @covers Personne::setEmail
     * 
     */
    public function testSetEmail()
    {
        $this->objects->setEmail("ajuppe@gouv.fr");
        $this->assertEquals("ajuppe@gouv.fr",$this->objects->getEmail());
    }

   
}
