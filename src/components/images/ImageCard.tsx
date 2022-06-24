import React, { FC } from "react";
import { ImageCardType } from "../../types";
import { AiOutlineLike } from "react-icons/ai";

const ImageCard: FC<ImageCardType> = ({
  description,
  img_url,
  user,
  likes,
}) => {
  return (
    <article className="border-[1px] border-gray-200 rounded-md">
      <div>
        <img
          src={img_url}
          alt={description}
          className="block object-cover object-center rounded-t-md"
        />
      </div>
      <div className="p-3 flex gap-x-5 items-center">
        <img
          src={user.profile_img}
          alt="profile image"
          className="rounded-full"
        />
        <p className="flex flex-col italic">
          <span className="font-bold">{user.name}</span>
          {user.twitter_username && (
            <span className="text-sm text-gray-400">
              @ {user.twitter_username}
            </span>
          )}
        </p>
        <p className="ml-auto flex items-center gap-x-1">
          <AiOutlineLike />
          <span className="text-xs">{likes}</span>
        </p>
      </div>
    </article>
  );
};

export default ImageCard;
