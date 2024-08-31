import signupImage from "@/assets/signup-image.jpg";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SignupForm from "./SignupForm";

export const metadata: Metadata = {
    title: "Sign Up"
} 

const Page = () => {
  return (
    <main className="flex h-screen items-center justify-center p-5">
      <div className="flex h-full max-h-[40rem] w-full max-w-[64rem] overflow-hidden rounded-2xl bg-card shadow-2xl">
        <div className="w-full space-y-10 overflow-y-auto p-10 md:w-1/2">
          <div className="space-y-1 text-center">
            <h1 className="text-3xl font-bold">Sign Up to Gamebook</h1>
            <p className="text-muted-foreground">
            A online gaming community where <br/> <span className="italic">everyone</span> can enjoy themselves
            </p>
          </div>
          <div>
            <SignupForm />
            <Link href={"/login"}>
              Already Registered? <b>Go to Login</b>
            </Link>
          </div>
        </div>
        <Image src={signupImage} alt="signupImage" className="hidden w-1/2 object-cover md:block"/>
      </div>
    </main>
  );
};

export default Page;
