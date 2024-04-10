# Используем официальный образ Node в качестве базового образа с последней версией
FROM node:latest

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем package.json и package-lock.json в контейнер
COPY package.json package-lock.json ./

# Устанавливаем зависимости
RUN npm install --force

# Копируем все файлы проекта в контейнер
COPY . .

# Выполняем сборку приложения React
RUN npm run build

# Открываем порт 3000, который используется для приложения React
EXPOSE 3000

# Команда для запуска приложения
CMD ["npm", "start"]