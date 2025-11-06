import Link from "next/link";
import { GENDERS } from "@/app/constants/genders";
import { nanoid } from "nanoid";
import css from "./MainMenu.module.css";

export function MainMenu() {
  return (
    <>
      <ul className={css.mainMenuList}>
        {GENDERS.map((category) => {
          return (
            <li key={nanoid()} className={css.mainMenuItem}>
              <Link href={`/${category.path}`}>{category.name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
