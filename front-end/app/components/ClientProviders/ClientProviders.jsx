"use client";
import { CartContext } from "@/app/contexts/CartContext";
import { CurrencyContext } from "@/app/contexts/CurrencyContext";
import { useCart } from "@/app/hooks/useCart";
import { useCurrency } from "@/app/hooks/useCurrency";

export default function ClientProviders({ children }) {
  const [currency, setCurrency] = useCurrency();
  const [shoppingCart, setShoppingCart] = useCart();

  return (
    <>
      <CurrencyContext.Provider value={[currency, setCurrency]}>
        <CartContext.Provider value={[shoppingCart, setShoppingCart]}>
          {children}
        </CartContext.Provider>
      </CurrencyContext.Provider>
    </>
  );
}
