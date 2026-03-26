"use client";
import { nanoid } from "nanoid";
import { useState } from "react";
import Image from "next/image";
import css from "./Photos.module.css";

type PhotosProps = {
  photos: string[];
  name: string;
};

export function Photos({ photos, name }: PhotosProps) {
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
                  <Image
                    src={photo}
                    width={81}
                    height={120}
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
          <Image
            src={photos[selectedPhotoIndex]}
            className={css.photoBigImg}
            width={500}
            height={700}
            alt={name}
          />
        </div>
      </div>
    </>
  );
}
