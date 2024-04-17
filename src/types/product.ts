export interface Product {
  id: number;
  name: string;
  brand: string;
  description: string;
  price: number;
  photo: string;
  createdAt?: string
  updatedAt?:  string
};

export interface ProductInCart extends Product {
  quantity: number
}