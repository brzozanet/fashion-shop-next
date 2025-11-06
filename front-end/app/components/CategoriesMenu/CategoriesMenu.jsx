import Link from "next/link";
import { CATEGORIES } from "@/app/constants/categories";
import { useParams } from "next/navigation";
import { nanoid } from "nanoid";
import css from "./CategoriesMenu.module.css";

export function CategoriesMenu() {
  const params = useParams();

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
                <Link href={`/${params.gender}/${category.path}`}>
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
