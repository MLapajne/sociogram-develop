# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Run project like that:

Rebuild and Start Docker Containers:
docker-compose up --build

or other times:
docker-compose up

Stop and Remove Containers:
docker-compose down

#optinal
Remove Docker Images:
docker rmi $(docker images -q)

url for frontend:
http://localhost:5173/

# Django backend - optional

Creates new migration files based on the changes detected in your models.
python .\manage.py makemigrations

Applies the migrations to the database, updating its schema.
python .\manage.py migrate

Starts the Django development server, allowing you to view your project in a web browser.
python .\manage.py runserver

OpenAPI Swagger is located on page:
http://localhost:8000/api/schema/swagger-ui/
