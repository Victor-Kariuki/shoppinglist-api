import {Router} from 'express';
import { router as itemsRouter } from './item.routes';


import {
  showAllShoppingList,
  showOneShoppingList,
  createNewShoppingList,
  updateShoppingList,
  deleteShoppingList
} from '../controllers/shoppinglist.controller';

export const router = Router();

router.route('/')
  .get(showAllShoppingList)
  .post(createNewShoppingList);

router.route('/:id')
  .get(showOneShoppingList)
  .put(updateShoppingList)
  .delete(deleteShoppingList);

  router.use('/:id/items', itemsRouter);
