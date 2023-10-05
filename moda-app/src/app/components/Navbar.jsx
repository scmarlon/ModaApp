"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, photo, googleSingIn, logOut } = UserAuth();
  const [loading, setLoading] = useState(true);

  const handleSingIn = async () => {
    try {
      await googleSingIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSingOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  //   useEffect(() => {
  //     const checkAuthentication = async () => {
  //       await new Promise((resolve) => setTimeout(resolve, 50));
  //       setLoading(false);
  //     };
  //     checkAuthentication();
  //   }, [user]);

  console.log(user);

  return (
    <div className="h-20 w-full border-b-2 flex items-center justify-between p-2">
      {/* <div
        style={{
          backgroundImage: photo,
          width: 40,
          height: 40,
          borderRadius: "50%",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div> */}
      <ul className="flex">
        <li className="p-2 cursor-pointer">
          <Link href={"/"}>Home</Link>
        </li>
      </ul>
      <ul className="flex">
        <li className="p-2 cursor-pointer">
          <Link href={"/"}>About</Link>
        </li>
      </ul>
      <ul className="flex">
        <li className="p-2 cursor-pointer">
          <Link href={"/"}>Profile</Link>
        </li>
      </ul>
      {/* loading ? null : !user ? */}
      {!user ? (
        <ul className="flex">
          <li onClick={handleSingIn} className="p-2 cursor-pointer">
            Login
          </li>
          <li onClick={handleSingIn} className="p-2 cursor-pointer">
            Sing up
          </li>
        </ul>
      ) : (
        <div>
          <p>Welcome, {user.displayName}</p>
          <div
            style={{
              backgroundImage: photo,
              width: 40,
              height: 40,
              borderRadius: "50%",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
          <p className="cursor-pointer" onClick={handleSingOut}>
            Sing Out
          </p>
        </div>
      )}
    </div>
  );
};

export default Navbar;
