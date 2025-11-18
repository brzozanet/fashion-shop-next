"use client";
import { CATEGORIES } from "@/app/constants/categories";
import { useParams } from "next/navigation";
import { useContext } from "react";
import { CurrencyContext } from "@/app/contexts/CurrencyContext";
import { CurrencyContextType } from "@/app/types/currencyContext";
import { Favourites } from "@/app/types/favourites";
import { Product as ProductType } from "@/app/types/product";
import { Product } from "../Product/Product";
import { getProductPrice } from "@/app/utils/getProductPrice";
import css from "./Products.module.css";

type ProductsProps = {
  products: ProductType[];
  favourites: Favourites[];
};

export function Products({ products, favourites }: ProductsProps) {
  const params = useParams();
  const [currency] = useContext(CurrencyContext) as CurrencyContextType;

  let productsTitle;

  const activeCategory = CATEGORIES.find(
    (category) => params.category === category.path
  );

  productsTitle = activeCategory?.name;

  if (params.subcategory) {
    const activeSubcategory = activeCategory?.subcategories.find(
      (subcategory) => params.subcategory === subcategory.path
    );

    productsTitle = activeSubcategory?.name;
  }

  const allFavouritesIds = favourites.map((favourite) => favourite.productId);

  const isProductInFavourites = (productId: number) => {
    return allFavouritesIds.includes(productId);
  };

  return (
    <>
      <h2 className={css.productsTitle}>{productsTitle}</h2>

      {products.length ? (
        <div className={css.products}>
          {products.map((product) => {
            return (
              <Product
                id={product.id}
                name={product.name}
                // NOTE: dynamic access
                // price={`${product[`price${currency}`]}`}
                price={getProductPrice(currency, product)}
                photo={product.photos[0]}
                category={product.category}
                subcategory={product.subcategory}
                key={product.id}
                isProductInFavourites={isProductInFavourites(product.id)}
              />
            );
          })}
        </div>
      ) : (
        <div className={css.noProductsContainer}>
          <img src="/images/empty-cart.png" width="200" />
          <h2 className={css.productsSubtitle}>
            Niestety, nie mamy żadnych produktów w tej kategorii
          </h2>
        </div>
      )}
    </>
  );
}
