<?php
//require 'C:\Users\Kekma\vendor\autoload.php';
require_once '/var/www/api/vendor/autoload.php';
use MongoDB\Client as Mongo;

class QuestionsModel {
	private $mongo;
	private $questions;

	public function __construct(){

		$server = "mongodb://admin:123@mongodb:27017/";
		$this->mongo = new Mongo($server);
		$database = $this->mongo->questionnaire;
		$this->questions = $database->questions;
	}

	public function findQuestions(){
		//$result = $this->questions->find();
		$aggregate = array(
			array(
				'$lookup' => array(
					'from' => 'categories',
					'localField' => 'categoryId',
					'foreignField' => '_id',
					'as' => 'category'
				)
			),
		);
		$result = $this->questions->aggregate($aggregate);
		return $result;
	}
}
?>

