import React from 'react'
import Skeleton from "react-loading-skeleton";
const UsersCardSkelleton = () => {
  return (
    <div className="flex flex-col gap-3">
      {Array(8)
        .fill()
        .map((item, index) => (
          <div
            key={index}
            className="bg-gray-500 border border-gray-500 p-3 rounded-md flex gap-3 items-center"
          >
            <Skeleton circle width={40} height={40}></Skeleton>
            <div className="flex-1 h-10 rounded-md ">
                <Skeleton height={40}></Skeleton>
            </div>
          </div>
        ))}
    </div>
  );
}

export default UsersCardSkelleton