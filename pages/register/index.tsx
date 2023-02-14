import React, { useEffect } from "react";
import { useAuth } from "../../context/ProvideContext";
import { useRouter } from "next/router";
import { User } from "firebase/auth";
import { GetStaticProps } from "next";
import { FormData } from "../../yups/register";
import dynamic from "next/dynamic";

const RegisterForm = dynamic(() => import("../../components/RegisterForm"), { ssr: false });

const RegisterPage = () => {
  const { signUp, user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.replace("/");
    }
  }, [router, user]);

  const onSubmit = async (registerValue: FormData) => {
    try {
      await signUp(registerValue.email, registerValue.password)
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
      <div className="grid grid-cols-5 grid-rows-1 max-h-screen">
        <div className="hidden lg:block col-span-2 overflow-hidden relative h-screen bg-register-background bg-cover bg-no-repeat bg-center">
          <div className="absolute top-0 right-0 h-full w-full bg-[#51577C] opacity-20" />
          <label className="absolute -rotate-90 bottom-52 -right-36 text-[#FF9800] text-9xl font-[Montserrat]">
            SIGN <label className="text-white font-[Montserrat]">UP,</label>
          </label>
        </div>
        <div className="col-span-5 lg:col-span-3 flex justify-center items-center h-screen">
          <RegisterForm onSubmit={onSubmit} />
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

export default RegisterPage;
