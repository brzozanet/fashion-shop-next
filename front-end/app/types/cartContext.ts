import { Product } from "./product";

export type CartContextType = [
  Product[],
  React.Dispatch<React.SetStateAction<Product[]>>
];
