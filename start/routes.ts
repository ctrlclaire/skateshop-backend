/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
/*
SIZE ROUTES
*/
Route.group(() => {
    Route.get('/', 'SizesController.index')
    Route.post('/posts', 'SizesController.store')
    // Route.get('/:id', 'SizesController.show')
    // Route.put('/:id', 'SizesController.update')
    // Route.delete('/:id', 'SizesController.destroy')
}
).prefix('/size')

/*
CATEGORY ROUTES
*/
Route.group(() => {
    Route.get('/', 'CategoriesController.index')
    Route.post('/posts', 'CategoriesController.store')
}
).prefix('/category')

/*
OTHER ROUTES
*/
Route.get('*', async ({ response }) => {
  response.notFound({error: 'This route does not exist'})
 })
