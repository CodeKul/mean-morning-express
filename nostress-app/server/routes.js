import examplesRouter from './api/controllers/examples/router';
import carRouter from './api/controllers/car/router';
import cartRouter from './api/controllers/shoppingcart/router'

export default function routes(app) {
  app.use('/api/v1/examples', examplesRouter);
  app.use('/api/v1/car', carRouter);
  app.use('/api/v1/cart', cartRouter);
}
