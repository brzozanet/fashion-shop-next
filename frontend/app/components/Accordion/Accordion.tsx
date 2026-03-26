"use client";
import { useState } from "react";
import { nanoid } from "nanoid";
import css from "./Accordion.module.css";

type AccordionProps = {
  description: string;
  maintenanceInfo: string;
};

export function Accordion({ description, maintenanceInfo }: AccordionProps) {
  // NOTE: accordion mode
  const [accordionVisibleIndex, setAccordionVisibleIndex] = useState(0);

  const accordionContent = [
    { name: "Opis produktu", text: description },
    { name: "Wskazówki pielęgnacyjne", text: maintenanceInfo },
  ];

  return (
    <>
      <ul>
        {accordionContent.map((accordion, index) => {
          return (
            <li key={nanoid()}>
              <div
                className={css.accordionContainer}
                onClick={() => setAccordionVisibleIndex(index)}
              >
                <p className={css.accordionTitle}>{accordion.name}</p>
                <img
                  src="/icons/arrow.svg"
                  alt="arrow"
                  className={
                    accordionVisibleIndex === index
                      ? css.accordionImg
                      : css.accordionImgReverse
                  }
                />
              </div>
              {accordionVisibleIndex === index && (
                <p className={css.accordionText}>{accordion.text}</p>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
}

// NOTE: toggle visibility
// const [descriptionVisilbe, setDescriptionVisilbe] = useState(true);
// const [maintenanceInfoVisilbe, setMaintenanceInfoVisilbe] = useState(true);
// const toggleState = (state) => {
//   return (state = !state);
// };

//return (
// <>
//   <div>
//     <Link
//       onClick={() => setDescriptionVisilbe(toggleState)}
//       className={css.accordionContainer}
//     >
//       <p className={css.accordionTitle}>Opis produktu</p>
//       <img
//         src={ICON_ARROW}
//         alt="arrow"
//         className={
//           descriptionVisilbe ? css.accordionImg : css.accordionImgReverse
//         }
//       />
//     </Link>
//     {descriptionVisilbe && (
//       <p className={css.accordionText}>{description}</p>
//     )}
//     <Link
//       onClick={() => setMaintenanceInfoVisilbe(toggleState)}
//       className={css.accordionContainer}
//     >
//       <p className={css.accordionTitle}>Wskazówki pielęgnacyjne</p>
//       <img
//         src={ICON_ARROW}
//         alt="arrow"
//         className={
//           descriptionVisilbe ? css.accordionImg : css.accordionImgReverse
//         }
//       />
//     </Link>
//     {maintenanceInfoVisilbe && (
//       <p className={css.accordionText}>{maintenanceInfo}</p>
//     )}
//   </div>
// </>
