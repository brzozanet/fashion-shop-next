"use client";
import { GENDERS_TEXT_MAPPING } from "@/app/constants/mappings";
import { CATEGORIES } from "@/app/constants/categories";
import { useParams } from "next/navigation";
import { nanoid } from "nanoid";
import Link from "next/link";
import css from "./Breadcrumbs.module.css";

export function Breadcrumbs({ name }) {
  const params = useParams();

  const genderText = GENDERS_TEXT_MAPPING.get(params.gender);

  const foundCategory = CATEGORIES.find(
    (category) => category.path === params.category
  );

  const breadcrumbs = [
    { name: `${genderText}`, path: `/${params.gender}` },
    {
      name: `${foundCategory?.name}`,
      path: `/${params.gender}/${params.category}`,
    },
  ];

  if (params.subcategory) {
    const foundSubcategory = foundCategory?.subcategories.find(
      (subcategory) => subcategory.path === params.subcategory
    );

    breadcrumbs.push({
      name: `${foundSubcategory?.name}`,
      path: `/${params.gender}/${params.category}/${params.subcategory}`,
    });
  }

  if (params.id) {
    breadcrumbs.push({
      name: name,
      path: "",
    });
  }

  return (
    <>
      <ul className={css.breadcrumbsList}>
        {breadcrumbs.map((breadcrumb) => {
          return (
            <li key={nanoid()} className={css.breadcrumbsItem}>
              <Link href={breadcrumb.path} className={css.breadcrumbsLink}>
                {breadcrumb.name}
                <img
                  src="/icons/arrow.svg"
                  alt="arrow"
                  className={css.breadcrumbsImage}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
