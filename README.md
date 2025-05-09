# Эталонное Приложение для Практики k6 (DemoQA)

Это простое веб-приложение на Node.js и Express, предназначенное для использования в качестве цели при выполнении практических заданий по нагрузочному тестированию с помощью k6 на платформе DemoQA.

## Доступные Эндпоинты

*   `GET /` - Базовая страница приветствия.
*   `GET /ping` - Быстрый ответ "Pong!" для проверки доступности.
*   `GET /api/data` - Возвращает небольшой JSON с тестовыми данными.
*   `GET /api/process` - Имитирует обработку запроса с задержкой (~500ms) и возвращает JSON.
*   `GET /api/maybe-error` - С вероятностью ~10% возвращает ошибку 500, иначе - успешный JSON ответ.

## Установка и Запуск

1.  **Убедитесь, что у вас установлен Node.js и npm.**
    Вы можете скачать их с [официального сайта Node.js](https://nodejs.org/).

2.  **Склонируйте репозиторий или скопируйте эту папку.**

3.  **Перейдите в директорию приложения:**
    ```bash
    cd path/to/k6-practice-target-app
    ```

4.  **Установите зависимости:**
    ```bash
    npm install
    ```

5.  **Запустите сервер:**
    ```bash
    npm start
    ```
    Или напрямую:
    ```bash
    node server.js
    ```

6.  Сервер будет запущен по умолчанию на `http://localhost:3000`.
    Если порт 3000 занят, вы можете изменить его в файле `server.js` или установить переменную окружения `PORT` перед запуском.

Теперь вы можете использовать `http://localhost:3000` в качестве базового URL в ваших скриптах k6. 