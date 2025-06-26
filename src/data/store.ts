
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'Admin' | 'User';
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Headphones',
    description: 'Premium quality wireless headphones with noise cancellation and 30-hour battery life.',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop'
  },
  {
    id: '2',
    name: 'Smart Watch',
    description: 'Advanced fitness tracking smartwatch with heart rate monitor and GPS.',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop'
  },
  {
    id: '3',
    name: 'Laptop Stand',
    description: 'Ergonomic aluminum laptop stand with adjustable height and cooling design.',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop'
  },
  {
    id: '4',
    name: 'Bluetooth Speaker',
    description: 'Portable waterproof Bluetooth speaker with 360-degree sound and 12-hour battery.',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop'
  },
  {
    id: '5',
    name: 'Wireless Mouse',
    description: 'Precision wireless mouse with ergonomic design and long-lasting battery.',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop'
  },
  {
    id: '6',
    name: 'USB-C Hub',
    description: 'Multi-port USB-C hub with HDMI, USB 3.0, and fast charging support.',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop'
  }
];

export const users: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'User'
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'User'
  },
  {
    id: '3',
    name: 'Admin User',
    email: 'admin@example.com',
    role: 'Admin'
  }
];


export const adminCredentials = {
  username: 'admin',
  password: 'admin123'
};

export const getStoredUsers = (): User[] => {
  const stored = localStorage.getItem('ecommerce-users');
  return stored ? JSON.parse(stored) : users;
};

export const saveUsers = (updatedUsers: User[]) => {
  localStorage.setItem('ecommerce-users', JSON.stringify(updatedUsers));
};

export const getStoredCart = (): CartItem[] => {
  const stored = localStorage.getItem('ecommerce-cart');
  return stored ? JSON.parse(stored) : [];
};

export const saveCart = (cartItems: CartItem[]) => {
  localStorage.setItem('ecommerce-cart', JSON.stringify(cartItems));
};
