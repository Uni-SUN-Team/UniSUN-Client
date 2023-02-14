import { User } from "firebase/auth";
import { GetStaticProps } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAuth } from "../../context/ProvideContext";
import { FormData } from "../../yups/signin";

const SigninForm = dynamic(() => import("../../components/SigninForm"), { ssr: false });
const AuthenSocial = dynamic(() => import("../../components/RegisterForm/social"), { ssr: false });

const SignInPage = () => {
  const { logIn, user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.replace("/");
    }
  }, [router, user]);

  const onSubmit = async (value: FormData) => {
    try {
      await logIn(value.email, value.password)
        .then((value: User) => {
          if (value.uid) router.push("/");
        })
        .catch((error: any) => {
          console.error(error.message);
        });
    } catch (error: any) {
      console.error(error.message);
    }
  };
  return (
    <div className="container min-w-full min-h-screen">
      <div className="grid grid-cols-5 grid-rows-1 min-h-screen">
        <div className="col-span-5 lg:col-span-3 flex justify-center items-center">
          <div className="basis-11/12 sm:basis-1/2 flex flex-col text-center justify-center items-center space-y-6">
            <div className="w-full text-left">
              <label className="text-4xl font-thin font-[Montserrat] text-unisun-purple">
                Hello,
              </label>
              <p className="text-3xl font-semibold font-[Montserrat]">
                <label className="text-unisun-purple">WELCOME</label>
                <label className="text-[#FF9800]"> BACK!</label>
              </p>
            </div>
            <SigninForm onSubmit={onSubmit} />
            <div className="space-x-5 inline-flex text-xs">
              <p className="text-[#7B7B7B]">{`Don't have an account ?`}</p>
              <label className="text-[#FF9800]">
                <Link href={"/register"}>SIGN UP NOW!</Link>
              </label>
            </div>
            <div className="inline-flex items-center justify-center w-full h-5">
              <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
              <span className="absolute px-3 font-medium bg-white dark:text-white dark:bg-gray-900 text-[#7B7B7B] text-xs">
                or
              </span>
            </div>
            <p className="text-[#7B7B7B] text-xs opacity-50">Continue with social media</p>
            <div className="w-full">
              <AuthenSocial />
            </div>
          </div>
        </div>
        <div className="col-span-2 overflow-hidden relative h-screen bg-signin-background bg-cover bg-no-repeat bg-center hidden lg:flex justify-center items-center">
          <div className="absolute top-0 left-0 h-full w-full bg-[#312A5D] opacity-40" />
          <label className="z-10 space-y-4 font-[Montserrat]">
            <label className="text-white text-6xl">{`"Continuous learning`}</label>
            <p className="text-white text-4xl">is the minimum requirement</p>
            <p className="text-white text-4xl">
              for <label className="text-[#FF9800] italic">success </label>
              <label className="italic">{`in any field"`}</label>
            </p>
            <p className="italic text-white w-full text-right text-base">- Brian Tracy -</p>
          </label>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 3600,
  };
};

export default SignInPage;
