# FORUM WORKSHOP 

This is an application like Kanban, where you and your team can store and manage your Tasks.
The system include all the Tasks which has to be resolved.

### Features

The application is a forum, where each registered user can create a theme or post a comment. 

### Used technologies

- Front-end built with Angular
- REST Api 
- MongoDB
- HTML & CSS


# Before you start with creating a new project in Angular you need to install MongoDB.

# After the successful installation the database will be empty, so you can load the provided from me initial data in it as follows:

![providing the data in the DB](https://github.com/kalinsky-dev/FORUM-WORKSHOP-Angular/blob/main/screenshots/1.png)

# Getting Started with Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.3.

## Development server

```
ng serve
```
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Server for my backend

```
cd REST-API && npm install && npm start
```
Runs the REST Api. 
Be careful to run the server from the REST-API folder in a separate terminal.
In order to fetch the themes, you will have to make a GET request on "localhost:3000/api/themes".

## Code scaffolding

```
ng generate component component-name
```
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

```
ng build
```
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

```
ng test
```
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

```
ng e2e
```
Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
