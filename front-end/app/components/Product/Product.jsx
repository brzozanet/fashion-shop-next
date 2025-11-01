"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useContext } from "react";
import { CurrencyContext } from "../../contexts/CurrencyContext";
import { addToFavourites } from "@/app/actions/addToFavourites";
import { Notify } from "notiflix";
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
  const [currency] = useContext(CurrencyContext);

  const handleAddToFavouritesButton = async () => {
    const result = await addToFavourites(id);
    console.log(result.success);

    if (result.success) {
      Notify.success("Produkt został dodany do ulubionych");
    } else {
      Notify.failure("Błąd dodawania do ulubionych");
    }
  };

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
          type="button"
          className={
            isProductInFavourites ? css.heartIconDisabled : css.heartIcon
          }
          disabled={false}
          // onClick={() => addToFavourites(id)}
          onClick={handleAddToFavouritesButton}
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
