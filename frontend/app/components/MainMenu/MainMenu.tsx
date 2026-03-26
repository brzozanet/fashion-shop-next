"use client";
import Link from "next/link";
import { GENDERS } from "@/app/constants/genders";
import { nanoid } from "nanoid";
import { useParams } from "next/navigation";
import css from "./MainMenu.module.css";

export function MainMenu() {
  const params = useParams();

  return (
    <>
      <ul className={css.mainMenuList}>
        {GENDERS.map((category) => {
          return (
            <li
              key={nanoid()}
              className={` ${css.mainMenuItem}
                ${params.gender === category.path && css.mainMenuItemActive}
              `}
            >
              <Link href={`/${category.path}`}>{category.name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
