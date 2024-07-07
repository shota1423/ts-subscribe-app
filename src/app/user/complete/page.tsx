"use client";

import { NextPage } from "next";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { clearTimeout } from "timers";

interface CompleteProps {
  h1: string;
  main: string;
  note: string;
}

const Complete: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/auth");
    }, 5000);
    () => clearTimeout(timer);
  }, [router]);

  const props: CompleteProps = {
    h1: "Congratulation!!",
    main: "Welcome to our Subscribe App",
    note: "After 5 seconds you will be redirected to the login page.",
  };

  return (
    <div className="min-h-screen bg-purple-50 flex items-center justify-center text-black">
      <div className="bg-white p-8 rounded-large shadow-lg max-w-md w-full">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">{props.h1}</h1>
        </div>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">{props.main}</h1>
        </div>
        <div>{props.note}</div>
      </div>
    </div>
  );
};

export default Complete;
