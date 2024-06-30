import React, { useEffect, useState } from "react";
import axios from "axios";

import UsersCardSkelleton from "./UsersCardSkelleton";
import UserCard from "./UserCard";
import ContentLoader from "./loaders/ContentLoader";
import UserDetails from "./UserDetails";
import Nodata from "./Nodata";

const Layout = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [users, setUsers] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchdata = async () => {
    try {
      setIsloading(true);
      const response = await axios.get(
        "https://602e7c2c4410730017c50b9d.mockapi.io/users"
      );
      setUsers(response.data);
      setIsloading(false);
      return response.data;
    } catch (error) {
      console.log(error);
      setIsError(true);
    }
  };
  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className="p-6 h-screen w-full ">
      {isError ? (
        <Nodata></Nodata>
      ) : (
        <div className="h-full flex flex-col md:flex-row gap-3 items-stretch">
          <div className="w-full md:max-w-[380px] h-full overflow-auto border border-gray-400 rounded-md p-4 flex flex-col gap-3">
            {isLoading ? (
              <UsersCardSkelleton />
            ) : (
              users?.map((user) => (
                <UserCard
                  key={user.id}
                  user={user}
                  onClick={() => setSelectedUser(user)}
                />
              ))
            )}
          </div>
          <div className="flex-1 h-full  bg-[#191919] border border-gray-400 rounded-md p-4 ">
            {isLoading ? (
              <ContentLoader />
            ) : selectedUser ? (
              <UserDetails
                onClick={() => setSelectedUser(null)}
                selectedUser={selectedUser}
              />
            ) : (
              <div className="w-full h-full flex justify-center items-center">
                <div className="text-2xl text-white text-center p-3 rounded-md border border-gray-400">
                  Select a user to see details
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;
