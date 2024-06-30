import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import person from "../assets/person.svg"
const UserDetails = ({ selectedUser, onClick }) => {
  const handleImageError = (e) => {
    e.target.src = `${person}`; // Placeholder image URL
  };
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="flex flex-col gap-4 font-poppins border border-gray-400 rounded-md p-3 w-full relative">
        <button
          onClick={onClick}
          className="absolute right-4 top-4 bg-red-500 rounded-sm p-1 text-white"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            height="20"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"></path>
          </svg>
        </button>
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0 bg-gray-500 w-[120px] h-[120px] rounded-full">
            <img
              src={selectedUser.avatar}
              onError={handleImageError}
              className="w-[120px] h-[120px] object-cover rounded-full border-2 border-white"
              alt={`${selectedUser.profile.firstName} ${selectedUser.profile.lastName}`}
            />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-gray-500 ">
              {selectedUser.profile.firstName || <Skeleton />}{" "}
              {selectedUser.profile.lastName || <Skeleton />}
            </h2>
            <p className="text-gray-500 ">
              @{selectedUser.profile.username || <Skeleton />}
            </p>
          </div>
        </div>
        <p className="text-white flex gap-2 items-center">
          <i className="fa-solid fa-briefcase"></i>{" "}
          {selectedUser.jobTitle || <Skeleton />}
        </p>
        <p className="text-white flex gap-2 items-center">
          <i class="fa-solid fa-envelope"></i>
          {selectedUser.profile.email || <Skeleton />}
        </p>
        <p className="text-white flex gap-2 items-center">
          <i class="fa-solid fa-book-open"></i>{" "}
          {selectedUser.Bio || <Skeleton />}
        </p>
      </div>
    </div>
  );
};

export default UserDetails;
