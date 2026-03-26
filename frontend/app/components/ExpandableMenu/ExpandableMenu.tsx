"use client";
import { GENDERS_TEXT_MAPPING } from "@/app/constants/mappings";
import { CATEGORIES } from "@/app/constants/categories";
import { useParams } from "next/navigation";
import { nanoid } from "nanoid";
import { getStringParam } from "@/app/utils/getStringParam";
import Link from "next/link";
import css from "./ExpandableMenu.module.css";

export function ExpandableMenu() {
  const params = useParams();

  const gender = getStringParam(params.gender);
  const category = getStringParam(params.category);
  const subcategory = getStringParam(params.subcategory);

  const activeGenderText = GENDERS_TEXT_MAPPING.get(gender);
  const activeCategory = category;

  return (
    <>
      <div className={css.expandableMenu}>
        <p className={css.genderTitle}>{activeGenderText}</p>
        <div>
          <ul>
            {CATEGORIES.map((category) => {
              return (
                <li key={nanoid()} className={css.categoriesItem}>
                  <Link
                    href={`/${gender}/${category.path}`}
                    className={css.categoriesLink}
                  >
                    {category.name}
                    <img
                      src="/icons/arrow.svg"
                      alt="arrow"
                      className={
                        activeCategory === category.path
                          ? css.categoriesIconActive
                          : ""
                      }
                    />
                  </Link>
                  {activeCategory === category.path ? (
                    <ul>
                      {category.subcategories.map((subcat) => {
                        return (
                          <li
                            key={nanoid()}
                            className={`${css.subCategoriesItem} ${
                              subcategory === subcat.path &&
                              css.subCategoriesItemActive
                            }`}
                          >
                            <Link
                              href={`/${gender}/${category.path}/${subcat.path}`}
                              className={css.subCategoriesLink}
                            >
                              {subcat.name}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  ) : (
                    ""
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
