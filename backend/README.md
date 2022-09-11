# Описание

Backend конвертера. Размещен на **heroku**.

Используемые технологии:

- Spring Boot

- Liquibase

- GraphQL

# Сборка и запуск проекта

Для работы приложения требуется **JDK** версии 8 или выше.

Сейчас в проекте указана версия JDK 11. Если будет использоваться более низкая версия, нужно указать ее в параметре `java.version` в файле `pom.xml`.

Перед запуском приложения необходимо создать базу данных **Postgres** с именем **curr_conv2**, пользователем **postgres** и паролем **postgres**.

- Клонировать проект

  `git clone https://github.com/ignal1/converter_with_graphql.git`

- В терминале перейти в директорию *backend* и выполнить команду

  `./mvnw spring-boot:run` (для Linux)
  
  или
  
  `mvnw spring-boot:run` (для Windows)