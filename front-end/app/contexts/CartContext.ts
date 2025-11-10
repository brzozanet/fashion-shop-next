import { createContext } from "react";
import { CartContextType } from "../types/cartContext";

export const CartContext = createContext<CartContextType | null>(null);
