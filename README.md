# Установка Docker
## Windows
Скачать [Docker Desktop](https://docs.docker.com/desktop/install/windows-install/)
## Linux
Скачать [Docker Engine](https://docs.docker.com/engine/install/) в зависимости от дистрибутива
# Запуск приложения
## Windows
В командной строке в корне проекта команда: `docker-compose up`
## Linux
В терминале в корне проекта: `sudo docker-compose up`
# Доступ к приложению
Vue располагается по адресу http://localhost:8080

PHP располагается по адресу http://localhost:5000

Для проверки работы MongoDB можно перейти на админ-панель по адресу http://localhost:8081
# Остановка приложения
После остановки через Ctrl+C, необходимо прописать `docker-compose down --rmi all --volumes`, чтобы удалить контейнеры, образы и хранилища
