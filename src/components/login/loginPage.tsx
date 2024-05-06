"use client";
import { UserRound } from "lucide-react";
import BgImg from "../../app/images/login.webp";
import { LockKeyhole } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col md:flex-row m-6 space-y-8 md:space-y-0 bg-white shadow-2xl rounded-2xl">
        {/* Left Side */}
        <div className="flex flex-col justify-center p-8 md:p-14">
          <span className="text-4xl font-bold mb-3 text-blue-500">
            Welcome back
          </span>
          <span className="text-gray-400 font-light mb-8">
            Welcome back! Please enter your details.
          </span>

          {/* Phone Number Input */}
          <div className="py-4 relative">
            <label className="mb-2 text-md" htmlFor="phone">
              Phone Number
            </label>
            <div className="flex items-center border border-gray-300 rounded-md">
              <UserRound className="w-5 h-5 text-gray-500 mx-2" />
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Enter your phone number"
                required
                className="w-full p-2 placeholder:text-gray-500 placeholder:font-light"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="py-4 relative">
            <label className="mb-2 text-md" htmlFor="password">
              Password
            </label>
            <div className="flex items-center border border-gray-300 rounded-md">
              <LockKeyhole className="w-5 h-5 text-gray-500 mx-2" />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                required
                className="w-full p-2 placeholder:text-gray-500 placeholder:font-light"
              />
            </div>
          </div>

          {/* Login Button */}
          <button className="w-full mt-3 p-2 rounded-lg mb-6 bg-blue-500 text-white hover:bg-blue-600 hover:border-gray-300 hover:border">
            Login
          </button>

          {/* Registration Link */}
          <div className="text-center text-gray-400">
            Don't have an account?{" "}
            <a href="#" className="font-bold text-black">
              Register Now
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="relative hidden md:block">
          {/* Background Image */}
          <img
            src={BgImg.src}
            alt="Background"
            className="w-[400px] h-full rounded-r-2xl object-cover"
          />
          {/* Text on Image */}
          <div className="absolute right-6 p-6 top-1/3 transform -translate-y-1/2 text-3xl font-bold text-black text-center">
            स्वागत छ हजुरलाई गोदार थापा को डिजिटल वंशावलीमा
          </div>
        </div>
      </div>
    </div>
  );
}
