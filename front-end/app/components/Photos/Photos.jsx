"use client";
import { nanoid } from "nanoid";
import { useState } from "react";
import css from "./Photos.module.css";

export function Photos({ photos, name }) {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  return (
    <>
      <div className={css.photos}>
        <div>
          {photos.map((photo, index) => {
            return (
              <li key={nanoid()}>
                <div
                  onClick={() => setSelectedPhotoIndex(index)}
                  className={css.photoThumbnailLink}
                >
                  <img
                    src={photo}
                    alt={name}
                    title={name}
                    className={
                      selectedPhotoIndex === index
                        ? `${css.photoThumbnailImg} ${css.photoThumbnailImgActive}`
                        : css.photoThumbnailImg
                    }
                  />
                </div>
              </li>
            );
          })}
        </div>
        <div className={css.photoBigContainer}>
          <img
            src={photos[selectedPhotoIndex]}
            className={css.photoBigImg}
            alt={name}
          />
        </div>
      </div>
    </>
  );
}
