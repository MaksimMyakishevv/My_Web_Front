import { User } from '../types/user';

export const addToCart = async (username: string, password: string) => {
  const cartData: Omit<User, 'id'> = {username, password};

  try {
    const response = await fetch('http://127.0.0.1:3001/api/auth/register', {
      mode: 'cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartData),
    });

    if (response.ok) {
      const createdCart = await response.json();
      return createdCart;
    } else {
      const error = await response.json();
      throw new Error(error.message);
    }
  } catch (error) {
    throw error;
  }
};