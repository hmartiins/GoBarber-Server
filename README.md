<h1 align="center">
  <img alt="logo-gobarber" src="https://res.cloudinary.com/hmartiins/image/upload/v1612449203/logoGobarber_kdtoo8.svg" width="200px">
</h1>

<h3 align="center">
  💈 GoBarber Application Server 💈
</h3>

<p align="center">The best way to schedule your service !</p>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/hmartiins/GoBarber-Server?color=%23FF9000">

  <a href="https://www.linkedin.com/in/henrique-martins-5b2bb71a5/" target="_blank" rel="noopener noreferrer">
    <img alt="Made by" src="https://img.shields.io/badge/made%20by-henrique%20martins-%23FF9000">
  </a>

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/hmartiins/GoBarber-Server?color=%23FF9000">

  <a href="https://github.com/hmartiins/GoBarber-Server/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/hmartiins/GoBarber-Server?color=%23FF9000">
  </a>

  <a href="https://github.com/hmartiins/GoBarber-Server/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/hmartiins/GoBarber-Server?color=%23FF9000">
  </a>

  <img alt="GitHub" src="https://img.shields.io/github/license/hmartiins/GoBarber-Server?color=%23FF9000">
</p>

<p align="center">
  <a href="#-about-the-project">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-contribute">How to contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">License</a>
</p>

## 💇🏻‍♂️ About the project

This api provides everything needed to organize appointments between the barbers and customers.

Customers can choose the best time available to them.

Providers can view all of their appointments, manage schedules, view appointment history, and also see if a customer has canceled the schedule.

## 🚀 Technologies

The main technologies used in this API are:

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [Multer](https://github.com/expressjs/multer)
- [TypeORM](https://typeorm.io/#/)
- [JWT-token](https://jwt.io/)
- [uuid-v4](https://github.com/thenativeweb/uuidv4/)
- [PostgreSQL](https://www.postgresql.org/)
- [Date-fns](https://date-fns.org/)
- [Jest](https://jestjs.io/)
- [SuperTest](https://github.com/visionmedia/supertest)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [EditorConfig](https://editorconfig.org/)

## 💻 Getting started

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [NPM](https://www.npmjs.com/)
- One instance of [PostgreSQL](https://www.postgresql.org/)

> Fyi.: I recommend using the docker

**Clone the project and access the folder**

```bash
$ git clone https://github.com/hmartiins/GoBarber-Server && cd GoBarber-Server
```

**Follow the steps below**

```bash
# Install the dependencies
$ yarn install

# Make a copy of '.env.example' to '.env'
# and set with YOUR environment variables.
# The aws variables do not need to be filled for dev environment
$ cp .env.example .env

# Create the instance of postgreSQL using docker
$ docker run --name gobarber-postgres -e POSTGRES_USER=docker \
              -e POSTGRES_DB=gobarber -e POSTGRES_PASSWORD=docker \
              -p 5432:5432 -d postgres

# Create the instance of mongoDB using docker
$ docker run --name gobarber-mongodb -p 27017:27017 -d -t mongo

# Create the instance of redis using docker
$ docker run --name gobarber-redis -p 6379:6379 -d -t redis:alpine

# Once the services are running, run the migrations
$ yarn typeorm migration:run

# Finally, run the api service in a development environment :)
$ yarn dev:server

# Well done, project is started!
```

## 🤔 How to contribute

**Make a fork of this repository**

```bash
# Fork using GitHub official command line
# If you don't have the GitHub CLI, use the web site to do that.

$ gh repo fork hmartiins/GoBarber-Server
```

**Follow the steps below**

```bash
# Clone your fork
$ git clone your-fork-url && cd GoBarber-Server

# Create a branch with your feature
$ git checkout -b my-awesome-feature

# Make the commit with your changes
$ git commit -m 'my new feature'

# Send the code to your remote branch
$ git push origin my-feature
```

After your pull request is merged, you can delete your branch

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<h3 align="center">
  <img src="https://emojis.slackmojis.com/emojis/images/1611852306/12254/stockrocket.gif?1611852306" width="20" style="-moz-transform: scaleX(-1)/-o-transform: scaleX(-1);-webkit-transform: scaleX(-1);transform: scaleX(-1);"/>
  &nbsp Made by Henrique Martins &nbsp | &nbsp
  <a href="https://www.linkedin.com/in/henrique-martins-5b2bb71a5/"> See my linkedin &nbsp</a>
  <img src="https://emojis.slackmojis.com/emojis/images/1611852306/12254/stockrocket.gif?1611852306" width="20"/>
</h3>
