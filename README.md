<p align="center">
  <h1 align='center'>Coffee Shop Mobile Backend</h1>
</p>

## About The Project

Coffee for everyone

## Built With

![nodejs](https://img.shields.io/badge/nodejs-18.15-brightgreen)
![expressjs](https://img.shields.io/badge/expressjs-4-lightgrey)
![postgreSQL](https://img.shields.io/badge/postgreSQL-11-blue)
![Bcrypt](https://img.shields.io/badge/bcrypt-5.1-orange)

![Jsonwebtoken](https://img.shields.io/badge/jwt-9.0.0-cyan)

## Features

1. Authentication system Login,Register with JWT
2. Form input Validation, hash password with bycript.
3. Searching and Sorting with Pagination.
4. Page Navigation Handling.
5. Create products with upload image.

## Getting Started

1. Clone this repository

```sh
$ https://github.com/raynoalief/coffeshop_fe_second.git
```

2. Install NPM packages

```sh
$ npm install
```

3. Starting client

```sh
$ npm start
```

4. Coffeshop is Running

## ENDPOINT DETAILS

| Endpoint     |            Method             | Info         |
| ------------ | :---------------------------: | :----------- |
| /auth        |            `POST`             | Auth         |
| /user        | `POST` `GET` `PATCH` `DELETE` | Users        |
| /userProfile |     `POST` `GET` `PATCH`      | userProfiles |
| /products    | `POST` `GET` `PATCH` `DELETE` | Products     |
| /cart        |         `POST` `GET`          | Cart         |
| /history     |     `POST` `GET` `DELETE`     | History      |
