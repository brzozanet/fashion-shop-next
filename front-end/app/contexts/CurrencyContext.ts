import { createContext } from "react";
import { CurrencyContextType } from "../types/currencyContext";

export const CurrencyContext = createContext<CurrencyContextType | null>(null);
