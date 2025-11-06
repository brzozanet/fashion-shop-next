"use client";
import { GENDERS_TEXT_MAPPING } from "@/app/constants/mappings";
import { CATEGORIES } from "@/app/constants/categories";
import { useParams } from "next/navigation";
import { nanoid } from "nanoid";
import Link from "next/link";
import css from "./ExpandableMenu.module.css";

export function ExpandableMenu() {
  const params = useParams();
  const activeGenderText = GENDERS_TEXT_MAPPING.get(params.gender);
  const activeCategory = params.category;

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
                    href={`/${params.gender}/${category.path}`}
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
                      {category.subcategories.map((subcategory) => {
                        return (
                          <li
                            key={nanoid()}
                            className={`${css.subCategoriesItem} ${
                              params.subcategory === subcategory.path &&
                              css.subCategoriesItemActive
                            }`}
                          >
                            <Link
                              href={`/${params.gender}/${category.path}/${subcategory.path}`}
                              className={css.subCategoriesLink}
                            >
                              {subcategory.name}
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
