<?php
include './models/QuestionsModel.php';
interface Controller {
	public function handle($request): array;
}

class QuestionsController implements Controller {
	public function handle($request): array {
        //  тут подключаем модель
        $questionsModel = new QuestionsModel();
        $questions = $questionsModel->findQuestions();
        $data = iterator_to_array($questions);

		// if (!isset($data['title']) || empty($data['title']) || !is_string($data['title']) ) {
		// 	http_response_code(400);
		// 	return ['message' => 'Invalid input'];
		// }

		// # Sanitization
		// $title = strip_tags($data['title']);

		return $data;;
	}
}