const { Router } = require('express');
const {
  accountController,
  userController,
  resturantController,
} = require('./controller');

const restaurantRouter = new Router();
const userRouter = new Router();
const accountRouter = new Router();

restaurantRouter.get('/all', resturantController.get);
restaurantRouter.get('/:id', resturantController.get);
restaurantRouter.post('/add', resturantController.post);
restaurantRouter.put('/review/:id', resturantController.put);

userRouter.get('/me', userController.get);
userRouter.post('/', userController.post);
userRouter.put('/update/:id', userController.put);

accountRouter.get('/', accountController.get);
accountRouter.post('/new', accountController.post);
accountRouter.delete('/:id', accountController.delete);

module.exports = {
  restaurantRouter,
  userRouter,
  accountRouter,
};
