#!/bin/bash
# setup.sh

mkdir -p src/main/java/com/example/microservice/{controller,service,model}
mkdir -p src/main/resources/{static,templates}
mkdir -p src/main/resources/static/js
mkdir -p src/test/java/com/example/microservice

# Create empty files
touch src/main/java/com/example/microservice/Application.java
touch src/main/java/com/example/microservice/controller/ApiController.java
touch src/main/java/com/example/microservice/controller/WebController.java
touch src/main/java/com/example/microservice/service/MessageService.java
touch src/main/java/com/example/microservice/model/Message.java
touch src/main/resources/application.yml
touch src/main/resources/static/index.html
touch src/main/resources/static/js/app.js
touch src/main/resources/templates/home.html
touch Dockerfile
touch build.sh
touch pom.xml

chmod +x build.sh
echo "Project structure created!"
