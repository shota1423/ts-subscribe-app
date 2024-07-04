import { Metadata, NextPage } from "next";
import Head from "next/head";
import Button from "../components/button";

export const metadata: Metadata = {
  title: "ログイン",
  description: "ログインページです",
};

const login: NextPage = () => {
  return (
    <div className="min-h-screen bg-purple-50 flex items-center justify-center">
      <Head>
        <title>Login - Finarium</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-white p-8 rounded-large shadow-lg max-w-md w-full">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Subscribe</h1>
        </div>

        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Login to your account
        </h2>

        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-black"
              placeholder="Enter your email"
            />

            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-black"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 px-4 hover:bg-purple-700 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            Log In
          </Button>
        </form>

        <div className="mt-4 text-center">
          <a href="#" className="text-sm text-purple-600 hover:underline">
            Forgot password?
          </a>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            <a href="#" className="text-purple-600 hover:underline ml-1">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default login;
