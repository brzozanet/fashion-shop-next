"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useContext } from "react";
import { CurrencyContext } from "../../contexts/CurrencyContext";
import { addToFavourites } from "@/app/actions/addToFavourites";
import css from "./Product.module.css";

export function Product({
  id,
  name,
  price,
  photo,
  category,
  subcategory,
  isProductInFavourites,
}) {
  const params = useParams();
  console.log(id);
  const [currency] = useContext(CurrencyContext);

  return (
    <div className={css.product}>
      <div className={css.productPhotoContainer}>
        <Link href={`/${params.gender}/${category}/${subcategory}/${id}`}>
          <img
            src={photo}
            alt={name}
            title={name}
            className={css.productPhotoImg}
          />
        </Link>
        <button
          type="submit"
          className={
            isProductInFavourites ? css.heartIconDisabled : css.heartIcon
          }
          disabled={false}
          onClick={() => addToFavourites(id)}
        />
      </div>
      <Link href={`/${params.gender}/${category}/${subcategory}/${id}`}>
        <h3 className={css.productTitle}>{name}</h3>
        <p className={css.productPrice}>
          {price} {currency}
        </p>
      </Link>
    </div>
  );
}
