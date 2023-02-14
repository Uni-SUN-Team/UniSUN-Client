import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/ProvideContext";
import Link from "next/link";
import dynamic from "next/dynamic";
import { FormData } from "../../yups/search";
import { NextPage } from "next";

const MenuNavbar = dynamic(() => import("./MenuNavbar"), {
  ssr: false,
});
const MenuNavbarUser = dynamic(() => import("./MenuNavbarUser"), {
  ssr: false,
});
const InputSearch = dynamic(() => import("../Input/Search"), { ssr: false });
const MenuNavbarMobile = dynamic(() => import("./MenuNavbarMobile"), { ssr: false });

interface Props {
  hideFull: boolean;
  hideSignin: boolean;
}

const Navbar: NextPage<Props> = ({ hideFull, hideSignin }) => {
  const route = useRouter();
  const [isUser, setIsUser] = useState<boolean>(false);
  const { user } = useAuth();

  useEffect(() => {
    if (user === null) setIsUser(false);
    else setIsUser(true);
  }, [route.pathname, user]);

  const onSubmit = async (data: FormData) => {
    alert(data);
  };

  return (
    <div>
      {hideFull && (
        <nav
          className={`px-2 py-4 dark:bg-gray-900 w-full z-20 top-0 left-0 dark:border-gray-600 ${
            !hideSignin ? "w-full lg:w-3/5 bg-white" : "w-full bg-unisun-purple border-gray-200"
          }`}
        >
          <div className="flex items-center justify-between w-full lg:px-10 xl:px-20">
            <div className={`flex items-center ${hideSignin ? "w-1/2" : "w-full"}`}>
              <Link
                href="http://localhost:3000/"
                className="flex h-12 text-left relative w-full sm:w-1/12"
              >
                <div
                  className={`h-full w-full ${
                    !hideSignin ? "bg-Group-40-u-purple" : "bg-Group-40"
                  } bg-left bg-contain bg-no-repeat`}
                />
              </Link>
              <MenuNavbar hideSignin={hideSignin} />
            </div>
            {hideSignin && (
              <div className="flex flex-row-reverse items-center w-1/2">
                <MenuNavbarUser isUser={isUser} />
                <div className="md:block hidden mr-2">
                  <InputSearch onSubmit={onSubmit} />
                </div>
              </div>
            )}
            <MenuNavbarMobile
              hideSignin={hideSignin}
              search={<InputSearch onSubmit={onSubmit} />}
              isUser={isUser}
            />
          </div>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
