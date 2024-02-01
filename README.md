# Book Reviews API

<p align="end">January 2024</p>

**Project developed during [balta.io](https://balta.io) node API course.**

## Description

This RESTful web API provides services for registering and updating book reviews using mongoDB.

<img src="https://github.com/MauroImamura/images/blob/main/BookReviewAPI.jpg"/>

## Requirements

* node 18.18.2
* mongoDB (in this project I used <a href="cloud.mongodb.com">Atlas solution</a>)

## Install

* Clone this repository:

      git clone https://github.com/MauroImamura/book-reviews-api.git

* Dependencies:

  Inside NODEAPI folder, where package.json is located, run package install:

       npm install

* Connect to DB:

  On ./src/config.js, insert connection strings for mongoDB and <a href="https://sendgrid.com/en-us">Sendgrid</a> connections. Also set SALT_KEY for your personal encryptation secret:

      global.SALT_KEY = '<INSERT YOUR KEY>';
      global.EMAIL_TMPL = '<strong>{0}</strong>, boas vindas ao Book Reviews!';
      
      module.exports = {
          connectionString: '<INSERT YOUR CONNECTIONSTRING>',
          sendgridKey: '<INSERT YOUR TOKEN>'
      }

## Execute

* Run the Project:

      node ./bin/server
