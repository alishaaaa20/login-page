"use client";
import LoginPage from "../components/login/loginPage";
import Gallary from "../components/Gallary/gallary";

export default function Home() {
  return (
    <div className="relative ">
      <LoginPage />
      <Gallary />
    </div>
  );
}
