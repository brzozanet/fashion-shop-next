"use client";
import Link from "next/link";
import { CATEGORIES } from "@/app/constants/categories";
import { useParams } from "next/navigation";
import { nanoid } from "nanoid";
import css from "./CategoriesMenu.module.css";

export function CategoriesMenu() {
  const params = useParams();

  // Krótsza wersja używająca operatora || (logiczne OR zwraca pierwszą wartość truthy lub ostatnią falsy)
  const gender = params.gender || "kobieta";

  // Dłuższa wersja - równoważna powyższej:
  // let gender;
  // if (params.gender) {
  //   gender = params.gender;
  // } else {
  //   gender = "kobieta";
  // }

  return (
    <>
      <div className={css.categoriesMenu}>
        <ul className={css.categoryList}>
          {CATEGORIES.map((category) => {
            return (
              <li
                className={`${css.categoryItem} ${
                  params.category === category.path && css.categoryItemActive
                }`}
                key={nanoid()}
              >
                <Link href={`/${gender}/${category.path}`}>
                  {category.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
