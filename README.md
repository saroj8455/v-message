# VMessage

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Convert angular app to mobile app
https://capacitorjs.com/docs/getting-started


## GithubPages https://saroj8455.github.io/v-message/

## Fix refresh issue 404 not found
ng build  --base-href "https://saroj8455.github.io/v-message/index.html" <br/>
npx angular-cli-ghpages --dir=dist/v-message

## After that check the latest build and navigate to url


## Deployee angular app into hostinger shared hosting
https://www.hostinger.in/tutorials/how-to-deploy-angular-app-on-shared-hosting <br>
https://www.youtube.com/watch?v=-7s_dR9hYqU&t=2s<br>
https://medium.com/@shahidhkhan/create-a-new-angular-project-and-publish-it-to-


## npm run build , copy the assets to root of the domain e.g.

https://ocembalangir.in/v-message/ to https://ocembalangir.in/v-message/assets/ <br>


## Don't edit the base href in index.html

## .htaccess

RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_METHOD} !OPTIONS
RewriteRule ^(.*)$ index.html [L]
