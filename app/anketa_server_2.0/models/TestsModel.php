<?php
//require 'C:\Users\Kekma\vendor\autoload.php';
require_once '/var/www/api/vendor/autoload.php';
require_once 'models/QuestionsModel.php';
use MongoDB\Client as Mongo;

class TestsModel {
	private $mongo;
	private $tests;
	private $qm;
	private $test;
	private $quest;

	public function __construct(){

		$this->qm = new QuestionsModel();
		$server = "mongodb://admin:123@mongodb:27017/";
		$this->mongo = new Mongo($server);
		$database = $this->mongo->questionnaire;
		$this->tests = $database->tests;
	}

	public function findTest($pos){
		$this->test = $this->tests->findOne(['position'=> (int)$pos]);
		$this->quest = $this->qm->findQuestions();

		$this->test = iterator_to_array($this->test);
		$this->quest = iterator_to_array($this->quest);

		$res = array_filter($this->quest, function ($el) {
			return in_array($el['_id'], iterator_to_array($this->test['questions']));
		});

		return $res;
	}
}
?>