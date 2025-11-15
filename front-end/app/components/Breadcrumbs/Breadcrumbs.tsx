"use client";
import { GENDERS_TEXT_MAPPING } from "@/app/constants/mappings";
import { CATEGORIES } from "@/app/constants/categories";
import { useParams } from "next/navigation";
import { nanoid } from "nanoid";
import { getStringParam } from "@/app/utils/getStringParam";
import Link from "next/link";
import css from "./Breadcrumbs.module.css";

type BreadcrumbsProps = {
  name: string;
};

export function Breadcrumbs({ name }: BreadcrumbsProps) {
  const params = useParams();

  const gender = getStringParam(params.gender);
  const category = getStringParam(params.category);
  const subcategory = getStringParam(params.subcategory);
  const id = getStringParam(params.id);

  const genderText = GENDERS_TEXT_MAPPING.get(gender);

  const foundCategory = CATEGORIES.find((cat) => cat.path === category);

  const breadcrumbs = [
    { name: `${genderText}`, path: `/${gender}` },
    {
      name: `${foundCategory?.name}`,
      path: `/${gender}/${category}`,
    },
  ];

  if (subcategory) {
    const foundSubcategory = foundCategory?.subcategories.find(
      (subcat) => subcat.path === subcategory
    );

    breadcrumbs.push({
      name: `${foundSubcategory?.name}`,
      path: `/${gender}/${category}/${subcategory}`,
    });
  }

  if (id) {
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
