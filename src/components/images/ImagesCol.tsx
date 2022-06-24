import React, { FC } from "react";
import { ImagesType, UserType } from "../../types";
import ImageCard from "./ImageCard";

const ImagesCol: FC<{ images: ImagesType }> = ({ images }) => {
  return (
    <section className="flex flex-col gap-y-10">
      {images.map(({ id, likes, links, user, description, urls }) => {
        const userObject: UserType = {
          name: user.name,
          instagram_username: user.instagram_username || "",
          username: user.username,
          twitter_username: user.twitter_username || "",
          profile_img: user.profile_image.medium,
        };
        return (
          <ImageCard
            key={id}
            user={userObject}
            description={description || ""}
            likes={likes}
            img_url={urls.regular}
            download_url={links.download}
          />
        );
      })}
    </section>
  );
};

export default ImagesCol;
