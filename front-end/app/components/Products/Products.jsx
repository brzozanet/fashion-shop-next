"use client";
import { CATEGORIES } from "@/app/constants/categories";
import { useParams } from "next/navigation";
import { useContext } from "react";
import { CurrencyContext } from "@/app/contexts/CurrencyContext";
import { Product } from "../Product/Product";
import css from "./Products.module.css";

export function Products({ products, favourites }) {
  const params = useParams();
  const [currency] = useContext(CurrencyContext);

  let productsTitle;

  const activeCategory = CATEGORIES.find(
    (category) => params.category === category.path
  );

  productsTitle = activeCategory.name;

  if (params.subcategory) {
    const activeSubcategory = activeCategory.subcategories.find(
      (subcategory) => params.subcategory === subcategory.path
    );

    productsTitle = activeSubcategory.name;
  }

  const allFavouritesIds = favourites.map((favourite) => favourite.productId);

  const isProductInFavourites = (productId) => {
    return allFavouritesIds.includes(productId);
  };

  return (
    <>
      <h2 className={css.productsTitle}>{productsTitle}</h2>
      <div className={css.products}>
        {products.map((product) => {
          return (
            <Product
              id={product.id}
              name={product.name}
              // NOTE: dynamic access
              price={`${product[`price${currency}`]}`}
              photo={product.photos[0]}
              category={product.category}
              subcategory={product.subcategory}
              key={product.id}
              isProductInFavourites={isProductInFavourites(product.id)}
            />
          );
        })}
      </div>
    </>
  );
}
