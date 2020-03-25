import {} from 'typeorm';
import {ShoppingList} from '../entities/ShoppingList';
import {Item} from '../entities/Item';

export const showAllShoppingList = async (req, res, next) => {
  try {
    const shoppinglists: ShoppingList[] = await ShoppingList.find()
    res.status(200).json({
       shoppinglists,
    })
  } catch (error) {
    next(error);
  }
}
export const showOneShoppingList = async (req, res, next) => {
  try {
    const shoppinglist: ShoppingList = await ShoppingList.findOne({ where: { id: req.params.id }, relations: ['items'] })

    if (!shoppinglist) {
      throw new Error(`Shopping List doesn't exist`);
    }
    res.status(200).json({
      shoppinglist
    })
  } catch (error) {
    next(error);
  }
}
export const createNewShoppingList = async (req, res, next) => {
  try {
    const shoppinglist: ShoppingList = await ShoppingList.create(req.body);
    await shoppinglist.save();
    res.status(201).json(shoppinglist);

  } catch (error) {
    next(error);
  }
}
export const updateShoppingList = async (req, res, next) => {
  try {
    const shoppinglist: ShoppingList = await ShoppingList.findOne({ where: {id: req.params.id }, relations: ['items']})
    shoppinglist.name = req.body.name;
    shoppinglist.save();
    res.status(200).json(shoppinglist);
  } catch (error) {
    next(error);
  }
}
export const deleteShoppingList = async (req, res, next) => {
  try {
    const shoppinglist: ShoppingList = await ShoppingList.findOne({ where: {id: req.parmas.id}, relations: ['items'] });
    await shoppinglist.remove();
    res.status(200).json(shoppinglist)
  } catch (error) {
    next(error);
  }
}