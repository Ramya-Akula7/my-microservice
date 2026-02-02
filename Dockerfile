FROM eclipse-temurin:11-jre
WORKDIR /app
COPY target/my-microservice.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/app/app.jar"]

