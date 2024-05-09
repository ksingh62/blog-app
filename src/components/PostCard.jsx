import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-white hover:bg-purple-200 dark:bg-[#131315] dark:hover:bg-gray-800 rounded-xl p-4 border-gray-400 border-2 dark:text-white">
        <div className="w-full justify-center mb-4 flex items-center">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="rounded-xl "
            height={100}
            width={100}
          />
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
