import React from 'react'
import person from "../assets/person.svg"
const UserCard = ({ user, onClick }) => {
    const handleImageError = (e) => {
      e.target.src = `${person}`; // Placeholder image URL
    };

  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-gray-500 border border-gray-500 p-3 rounded-md flex gap-3 items-center "
    >
      <div className="w-10 h-10 rounded-full">
        <img
          className="w-10 h-10 rounded-full object-cover border-2 border-white"
          src={user?.avatar}
          alt={user?.profile?.firstName}
          onError={handleImageError}
        />
      </div>
      <div className="flex-1 h-10 rounded-md p-1 ">
        <h2 className="text-lg text-white font-poppins">
          {user?.profile?.firstName + " " + user?.profile?.lastName}
        </h2>
      </div>
    </div>
  );
};

export default UserCard