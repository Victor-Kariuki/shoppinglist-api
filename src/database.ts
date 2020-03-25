import {createConnection} from 'typeorm';

export const initDb = async () => {
  try {
    await createConnection();
  } catch (error) {
    throw new Error(error);
  }
}