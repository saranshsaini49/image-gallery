import React from "react";
import { useAppContext } from "../../context/AppContext";
import ImagesCol from "./ImagesCol";

const Images = () => {
  const {
    state: { images },
  } = useAppContext();

  return (
    <div className="p-5 md:py-10 md:px-20 grid gap-10 lg:grid-cols-2 2xl:grid-cols-4">
      {images.map((images, index) => {
        return <ImagesCol key={index} images={images} />;
      })}
    </div>
  );
};

export default Images;
