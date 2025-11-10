"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useContext, useState } from "react";
import { CurrencyContext } from "../../contexts/CurrencyContext";
import { addToFavourites } from "@/app/actions/addToFavourites";
import css from "./Product.module.css";
import { Notify } from "notiflix";
import Image from "next/image";

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
  const [productInFavourites, setProductInFavourites] = useState(
    isProductInFavourites
  );

  const handleAddToFavouritesButton = async () => {
    const result = await addToFavourites(id);
    if (result.success) {
      setProductInFavourites(true);
      Notify.success("Produkt został dodany do ulubionych");
    } else {
      Notify.failure("Błąd dodawania do ulubionych");
    }
  };

  return (
    <div className={css.product}>
      <div className={css.productPhotoContainer}>
        <Link href={`/${params.gender}/${category}/${subcategory}/${id}`}>
          <Image
            src={photo}
            width={255}
            height={400}
            alt={name}
            title={name}
            className={css.productPhotoImg}
          />
        </Link>
        <button
          type="button"
          className={
            productInFavourites ? css.heartIconDisabled : css.heartIcon
          }
          disabled={productInFavourites}
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
