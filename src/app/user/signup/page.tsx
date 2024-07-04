"use client";

import Button from "@/components/button";
import { NextPage } from "next";
import Head from "next/head";

import { MdOutlineEmail } from "react-icons/md";
import { IoKeyOutline } from "react-icons/io5";
import { Bs123 } from "react-icons/bs";
import Link from "next/link";

const SignUp: NextPage = () => {
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
              Email Address
            </label>
            <div className="relative mb-3">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MdOutlineEmail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                id="email"
                className="w-full pl-10 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-black"
                placeholder="Enter your email"
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
                className="w-full pl-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-black"
                placeholder="Enter your password"
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
                className="w-full pl-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-black"
                placeholder="Enter your age"
              />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 px-4 hover:bg-purple-700 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
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
