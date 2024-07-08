<?php
include_once './controllers/QuestionsController.php';
include_once './controllers/TestsController.php';

interface RequestHandler
{
	public function handle($request): array;
}

// GET https://localhost:5000?name=Test
class GetHandler implements RequestHandler
{
	private $controllers;
	public function __construct()
	{
		$this->controllers = [
			'questions' => new QuestionsController(),
			'tests' => new TestsController()
		];
	}
	public function handle($request): array
	{
		$type = $_GET['q'];
		if($type === 'questions'){
			$questions = $this->controllers['questions']->handle($request);
			return $questions;
		}
		else if($type === 'tests'){
			$questions = $this->controllers['tests']->handle($request);
			return $questions;
		}
		else
			return ['message' => 'GET request'];	
	}
}

// POST https://localhost:5000/questions 


class PostHandler implements RequestHandler
{
	private $controllers;
	// public function __construct() {
	// 	$this->controllers = [
	// 		'/user' => new ActionController()
	// 	];
	// }
	public function handle($request): array
	{

		$json = file_get_contents('php://input');
		$data = json_decode($json, true);

		$requestURI = $_SERVER['REQUEST_URI'];
		$data['uri'] = $requestURI;

		$data['message3'] = 'POST request';
		return $data;
	}
}

class PutHandler implements RequestHandler
{
	public function handle($request): array
	{
		$json = file_get_contents('php://input');
		$data = json_decode($json, true);
		$data['message'] = 'PUT request';
		return $data;
	}
}
