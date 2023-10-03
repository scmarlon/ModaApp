"use client";
import { redirect } from "next/navigation";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

function Home() {
  const router = useRouter();

  const redi = async () => {
    console.log("Entro acá");
    router.push("/new");
  };

  return (
    <div className="container">
      <button onClick={redi}>holaaa</button>
      <Link href="/new" className="btn">
        Page
      </Link>
      <Link href="/components/loging" className="btn">
        Login component
      </Link>
    </div>
  );
}
export default Home;

// function Login({ navigation }) {

//   export default Home;
