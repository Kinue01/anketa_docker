<?php
include './models/TestsModel.php';
// interface Controller {
// 	public function handle($request): array;
// }

class TestsController implements Controller {
	public function handle($request): array {
        //  тут подключаем модель
        $testsModel = new TestsModel();
        $tests = $testsModel->findTest($_GET['p']);
        $data = iterator_to_array($tests);

		// if (!isset($data['title']) || empty($data['title']) || !is_string($data['title']) ) {
		// 	http_response_code(400);
		// 	return ['message' => 'Invalid input'];
		// }

		// # Sanitization
		// $title = strip_tags($data['title']);

		return $data;;
	}
}