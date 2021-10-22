FROM adoptopenjdk/openjdk11:jdk-11.0.9_11.1-alpine-slim AS base
FROM base as builder

WORKDIR /project

COPY .mvn /project/.mvn
COPY mvnw /project/
COPY pom.xml /project/pom.xml

RUN ./mvnw dependency:go-offline

COPY src/ /project/src/
COPY frontend/ /project/frontend/

RUN ./mvnw package -DskipTests

FROM base as app

WORKDIR /app
EXPOSE 8080

COPY --from=builder project/target/junction-0.0.1-SNAPSHOT.jar  /app/junction-0.0.1-SNAPSHOT.jar
CMD ["/bin/sh", "-c", "java $JAVA_OPTS -jar junction-0.0.1-SNAPSHOT.jar"]
