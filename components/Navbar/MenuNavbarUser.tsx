import { NextPage } from "next";
import React from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const UserMenuDropdown = dynamic(() => import("../UserMenuDropdown"), { ssr: false });
const DropDown = dynamic(() => import("./MenuDropdown"), { ssr: false });

interface Props {
  isUser: boolean;
}

const MenuNavbarUser: NextPage<Props> = ({ isUser }) => {
  const route = useRouter();
  return (
    <div>
      {isUser ? (
        <UserMenuDropdown OptionsElement={DropDown} />
      ) : (
        <div className="hidden sm:flex">
          <button
            type="button"
            className="font-[Montserrat] text-sm px-5 py-2.5 text-center text-white"
            onClick={() => route.push("/signin")}
          >
            <p className="truncate">ลงชื่อเข้าใช้</p>
          </button>
          <button
            type="button"
            className="text-unisun-purple border font-[Montserrat] bg-white hover:bg-unisun-purple hover:border-white hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => route.push("/register")}
          >
            <p className="truncate">ลงทะเบียน</p>
          </button>
        </div>
      )}
    </div>
  );
};

export default MenuNavbarUser;
