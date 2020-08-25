Here is the development part of the first docker homework.

#### System Architecture

- My React: Front end using react. Built with create-react-app
- My Core: Core app using Lumen. This acts as the middleware between front end and micro services
- Auth Service: Micro service for authentication
- Product Service: Micro service for products

#### My_react

To run `my_react` run following command from inside `my_react` folder-

```shell
npm install
npm start
```

### My_core

To run `my_core` run following command from inside `My_core` folder

```shell
php -S localhost:8000 -t public
```
