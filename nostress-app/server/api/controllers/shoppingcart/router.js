import * as express from 'express';
import controller from './controller';

export default express
  .Router()
  .post('/', controller.create)
  .get('/', controller.all)
  .get('/:id', controller.byId)
  .post('/cart', controller.createCart)
  .post('/checkout',controller.checkout)
  .get('/cart/:id',controller.checkout)
  .post('/cartItem',controller.addItemToCart)

