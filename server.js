const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Можно изменить порт, если 3000 занят

// Middleware для имитации задержки на всех запросах (опционально)
// app.use((req, res, next) => {
//   const delay = Math.random() * 100 + 50; // Случайная задержка 50-150ms
//   setTimeout(next, delay);
// });

// 1. Быстрый эндпоинт (проверка доступности)
app.get('/ping', (req, res) => {
  res.status(200).send('Pong!');
});

// 2. Эндпоинт, возвращающий JSON данные
app.get('/api/data', (req, res) => {
  const data = {
    message: 'Это тестовые данные',
    timestamp: new Date(),
    items: Array.from({ length: 5 }, (_, i) => ({ id: i + 1, name: `Элемент ${i + 1}` }))
  };
  res.status(200).json(data);
});

// 3. Эндпоинт с имитацией более долгой обработки
app.get('/api/process', (req, res) => {
  const processingTime = 500; // Имитируем 500ms обработки
  setTimeout(() => {
    res.status(200).json({ message: `Обработка завершена за ${processingTime}ms` });
  }, processingTime);
});

// 4. Эндпоинт, который может иногда возвращать ошибку (например, 10% случаев)
app.get('/api/maybe-error', (req, res) => {
  if (Math.random() < 0.1) { 
    res.status(500).json({ error: 'Случайная ошибка сервера' });
  } else {
    res.status(200).json({ message: 'Запрос успешно обработан' });
  }
});

// 5. Базовый маршрут
app.get('/', (req, res) => {
  res.send('Привет! Это сервер-цель для практики k6.');
});

// Обработка 404 - Не найдено
app.use((req, res) => {
  res.status(404).send('404 - Ресурс не найден');
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Сервер-цель для k6 запущен на http://localhost:${port}`);
}); 