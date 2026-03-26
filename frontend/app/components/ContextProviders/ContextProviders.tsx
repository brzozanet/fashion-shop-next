"use client";
import { CartContext } from "@/app/contexts/CartContext";
import { CurrencyContext } from "@/app/contexts/CurrencyContext";
import { useCart } from "@/app/hooks/useCart";
import { useCurrency } from "@/app/hooks/useCurrency";

type ContextProvidersProps = {
  children: React.ReactNode;
};

export default function ContextProviders({ children }: ContextProvidersProps) {
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
