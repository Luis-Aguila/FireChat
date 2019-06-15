<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
</head>
<body>
	<p align="center"><img src="" alt="Logo/Imagen Proyecto" width="150px" height="150px"></p>
	<h1 align="center">FireChat</h1>
	<h3>Introducción</h3>
  <p>FireChat, es un sistema de mensajeria en donde 2 personas previamente logeadas pueden interactuar o comunicarse a travez de mensajes.</p>
  <p>Para este sistema se utilizo el motor de base de datos que ofrece Firebase en su dirección web https://firebase.google.com/?hl=es-419, tanto en el sistema de autentificación, como para guardar la data de los mensajes enviados.</p>
  <p>Primero que todo, hay que autentificarse en la aplicación, esta autentificación puede ser mediante twitter o mediante una cuenta de google, una vez se a atutentificado, la base de datos de firebase registrara su inicio de sesión y se podra acceder al sistema de chat.</p>
  <p>Para el desarrollo de este sistema, se necesito instalar y exportar las directivas de firebase en consola y en app.module.ts, posteriormente se pocedio a crear los diferentes tipo de componentes (login, interface y chat), para el gusrdado de los mensajes y la autentificación se creo un servicio de nombre chat.service.ts, el cual es el encargado de generar la autentificación por parte de los usuarios y a su vez de guardar los mensajes en la base de datos de firebase.</p>
  <h3>Información del Proyecto</h3>
  <p>Proyecto desarrollado a modo de aprendizaje en cursos guiados.</p>
	<h3>Objetivo</h3>
  <ul>
    <li>Trabajar con sistema de Autentificación y guardado de datos en FireBase</li>
  </ul>
	<h3>Tecnologías</h3>
  <ul>
    <li>Angular 2+</li>
    <li>Firebase Auth</li>
    <li>FireBase Database</li>
    <li>Bootstrap</li>
  </ul>
	<h3>Componentes</h3>
  <ul>
    <li>Chat</li>
    <li>Login</li>
    <li>Interface</li>
  </ul>
	<h3>Servicios</h3>
  <ul>
    <li>Chat.services.ts</li>
  </ul>
  <p>Se utilizo para la autentificación y el guardado de los mensajes, FireBase.</p>
	<h3>Vistas del sistema</h3>
	<p>Imagenes</p>

	




</body>
</html>

# Firechat

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
