import { nanoid } from "nanoid";
import Link from "next/link";
import css from "./Pagination.module.css";

export function Pagination() {
  const numberOfPagesMockup = 5;
  const pagination = Array(numberOfPagesMockup).fill(null);

  return (
    <>
      <ul className={css.pagination}>
        {pagination.map((page, index) => {
          return (
            <li key={nanoid()}>
              <Link href="" className={css.paginationLink}>
                {index + 1}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
