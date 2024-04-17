export interface Product {
  id: number;
  name: string;
  brand: string;
  description: string;
  price: number;
  photo: string;
  
};

export interface ProductInCart extends Product {
  quantity: number
}