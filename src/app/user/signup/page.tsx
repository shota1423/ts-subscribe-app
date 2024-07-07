"use client";

import Button from "@/components/button";
import { NextPage } from "next";
import Head from "next/head";
import { createUser } from "@/lib/user/api";
import { User } from "@/domain/models/User";
import React from "react";
import { useRouter } from "next/navigation";

import { MdOutlineEmail } from "react-icons/md";
import { IoKeyOutline } from "react-icons/io5";
import { Bs123 } from "react-icons/bs";
import Link from "next/link";
import { FaRegUser } from "react-icons/fa6";
import useFormFields from "@/app/utils/useFormFields";

const SignUp: NextPage = () => {
  const router = useRouter();
  const { field, formChangeHandler } = useFormFields<User>({
    name: "",
    email: "",
    password: "",
    age: 0,
  });

  const SignUpHandler = async () => {
    var res = await createUser(field);

    if (res.success === true) {
      router.push("/user/complete");
    }
  };

  return (
    <div className="min-h-screen bg-purple-50 flex items-center justify-center">
      <Head>
        <title>Sign Up - Subscribe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-white p-8 rounded-large shadow-lg max-w-md w-full">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Sign Up</h1>
        </div>

        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Create New Account
        </h2>

        <form>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <div className="relative mb-3">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaRegUser className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="name"
                id="name"
                name="name"
                className="w-full pl-10 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-black"
                placeholder="Enter your name"
                onChange={formChangeHandler}
              />
            </div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <div className="relative mb-3">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MdOutlineEmail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full pl-10 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-black"
                placeholder="Enter your email"
                onChange={formChangeHandler}
              />
            </div>

            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <div className="relative mb-3">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <IoKeyOutline className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full pl-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-black"
                placeholder="Enter your password"
                onChange={formChangeHandler}
              />
            </div>

            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Age
            </label>
            <div className="relative mb-3">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Bs123 className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="number"
                id="age"
                name="age"
                className="w-full pl-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-black"
                placeholder="Enter your age"
                onChange={formChangeHandler}
              />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 px-4 hover:bg-purple-700 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            onClick={(e) => {
              e.preventDefault();
              SignUpHandler();
            }}
          >
            Sign Up
          </Button>
        </form>

        <div className="mt-4 text-center">
          <Link
            href="/auth"
            className="text-sm text-purple-600 hover:underline"
          >
            Back to login?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
