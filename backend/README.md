<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>

## Description

User Management API project built with Nest Js.

## Before You Begin

Before you begin check and install the basic building blocks that assemble this application:

- [Git](https://git-scm.com/downloads). OSX and Linux machines typically have this already installed.
- [Node.js](https://nodejs.org/en/download/) - Install with npm packager.
- [Nest](https://docs.nestjs.com/) - Node.js framework repository.
- [Postgres](https://www.postgresql.org/) - PostgreSQL: Open Source Database.

## Installation

Create Postgres DB and connect it to API using the .env file in the project. Update the envs according to your DB credentials.

Install dependencies using npm (package manager for JavaScript)

```bash
$ npm install
```

We are using [TypeORM](https://typeorm.io/#/) to connect and manage the database migrations. All migrations run automatically after starting the server.

## Running the app

```bash
# development
$ npm run start


# watch mode
$ npm run start:dev

```

The application runs on port 3331.

## Migration

We are using [TypeORM](https://typeorm.io/#/) to manage all migrations. It doesn't need any other commands.

## Linting

This app includes a static code analysis setup with [ESLint](https://eslint.org/). We recommend that you install the relevant IDE extensions for ESLint. Once you do, every time you press save, all your code will be formatted and reviewed for quality automatically. We also set up a git hook to automatically analyze your code before it is committed.

### Swagger

For API documentantion this project uses [Swagger](https://swagger.io/). On development mode you can check http://localhost:3331/swagger

We have also generated swagger.json file, wich you can check on [Swagger UI](https://editor.swagger.io/).

### Postman

[Postman](https://www.postman.com/) is an API platform for building and using APIs. Import test/api.postman_collection.json to test and check the API.

```

```
