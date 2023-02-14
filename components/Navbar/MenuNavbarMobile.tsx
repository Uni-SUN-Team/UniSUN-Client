import Link from "next/link";
import React, { useEffect } from "react";
import Icon, { PropsSVG } from "../svg";
import { NextPage } from "next";
import { DropdownOptions, CollapseOptions } from "flowbite";
import { handleDocumentId } from "../../config/handleDocumentId";
import { optionNavbar } from "../../form/navbar";
import { useRouter } from "next/router";

const options: DropdownOptions = {
  placement: "bottom",
  triggerType: "click",
  offsetSkidding: 0,
  offsetDistance: 10,
  delay: 300,
};

interface Props {
  hideSignin: boolean;
  search?: JSX.Element;
  isUser: boolean;
}

const optionsCollap: CollapseOptions = {};

const initSVGMenu: PropsSVG = {
  className: "w-6 h-6",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  ariaHidden: "true",
};
const initSVG: PropsSVG = {
  className: "w-4 h-4 ml-1 text-white",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  ariaHidden: "true",
};

const MenuNavbarMobile: NextPage<Props> = ({ hideSignin, search, isUser }) => {
  const route = useRouter();
  useEffect(() => {
    handleDocumentId("mobile-menu-collapse", options, "dropdown", "mobile-menu");
    handleDocumentId("dropdown-collapse", optionsCollap, "collapse", "collapse");
  }, []);

  return (
    <>
      <button
        id="mobile-menu"
        type="button"
        className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden"
      >
        <span className="sr-only">Open main menu</span>
        <Icon.Menu {...initSVGMenu} />
      </button>
      <div
        className="items-center justify-between hidden w-full md:hidden md:w-auto md:order-1"
        id="mobile-menu-collapse"
      >
        <ul
          className={`flex flex-col p-4 mt-4 rounded-lg border ${
            hideSignin ? "bg-unisun-purple border-gray-100" : "border-purple-100 bg-white"
          }`}
        >
          <li key={"search"}>
            <div className="py-2">{search}</div>
          </li>
          {!isUser && hideSignin && (
            <>
              <li key={"signin"}>
                <button
                  type="button"
                  className={`flex items-center justify-between w-full p-2 text-base font-normal ${
                    hideSignin
                      ? "text-white bg-unisun-purple hover:bg-purple-500"
                      : "bg-white text-unisun-purple hover:bg-purple-100"
                  } rounded-lg group`}
                  onClick={() => route.push("/signin")}
                >
                  <p className="truncate">ลงชื่อเข้าใช้</p>
                </button>
              </li>
              <li key={"register"}>
                <button
                  type="button"
                  className={`flex items-center justify-between w-full p-2 text-base font-normal ${
                    hideSignin
                      ? "bg-white hover:bg-unisun-purple hover:border-white hover:text-white border"
                      : "bg-white text-unisun-purple hover:bg-purple-100"
                  } rounded-lg group`}
                  onClick={() => route.push("/register")}
                >
                  <p className="truncate">ลงทะเบียน</p>
                </button>
              </li>
            </>
          )}
          {!isUser && !hideSignin && (
            <li key={"register"}>
              <button
                type="button"
                className={`flex items-center justify-between w-full p-2 text-base font-normal ${
                  hideSignin
                    ? "text-white bg-unisun-purple hover:bg-purple-500"
                    : "bg-white text-unisun-purple hover:bg-purple-100"
                } rounded-lg group`}
                onClick={() => route.push("/register")}
              >
                <p className="truncate">ลงทะเบียน</p>
              </button>
            </li>
          )}
          {optionNavbar.map((item) => {
            return (
              <li key={`${item.label}`}>
                {item.dropdown.length > 0 ? (
                  <>
                    <button
                      id="collapse"
                      type="button"
                      className={`flex items-center justify-between w-full p-2 text-base font-normal ${
                        hideSignin
                          ? "text-white bg-unisun-purple hover:bg-purple-500"
                          : "bg-white text-unisun-purple hover:bg-purple-100"
                      } transition duration-75 rounded-lg group`}
                    >
                      <p className="truncate">{item.label}</p>
                      <Icon.RowDown {...initSVG} />
                    </button>
                    <ul id="dropdown-collapse" className="hidden py-2 space-y-2">
                      {item.dropdown.map((itemII) => {
                        return (
                          <li key={itemII.label}>
                            <Link
                              href={itemII.href}
                              className={`flex items-center w-full p-2 text-base font-normal ${
                                hideSignin
                                  ? "text-white hover:bg-purple-500"
                                  : "text-unisun-purple hover:bg-purple-100"
                              } transition duration-75 rounded-lg pl-11 group`}
                            >
                              <p className="truncate">{itemII.label}</p>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`block py-2 pl-3 pr-4 ${
                      hideSignin
                        ? "text-white hover:bg-purple-500"
                        : "text-unisun-purple hover:bg-purple-100"
                    } rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white`}
                  >
                    <p className="truncate">{item.label}</p>
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default MenuNavbarMobile;
