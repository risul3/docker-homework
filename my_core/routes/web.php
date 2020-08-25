<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->get('/api/v1/login', function () use ($router) {
    return response()->json(['status' => true], 200);
});

$router->get('/api/v1/products', function () use ($router) {
    return response()->json(['status' => true, 'products' => ['Apple', 'Banan', 'Mango']], 200);
});
