import { DropdownOptions } from "flowbite";
import { NextPage } from "next";
import Link from "next/link";
import React, { useEffect } from "react";
import { handleDocumentId } from "../../config/handleDocumentId";
import { optionNavbar } from "../../form/navbar";
import Icon, { PropsSVG } from "../svg";

interface Props {
  hideSignin: boolean;
}

const options: DropdownOptions = {
  placement: "bottom",
  triggerType: "click",
  offsetSkidding: 0,
  offsetDistance: 10,
  delay: 300,
};

const MenuNavbar: NextPage<Props> = ({ hideSignin }) => {
  useEffect(() => {
    handleDocumentId("dropdownNavbar", options, "dropdown", "dropdownNavbarLink");
  }, []);

  const initSVG: PropsSVG = {
    className: `w-4 h-4 ml-1 text-white ${
      !hideSignin ? "text-unisun-purple md:text-unisun-purple" : "text-white md:text-white"
    }`,
    fill: "currentColor",
    viewBox: "0 0 20 20",
    ariaHidden: "true",
  };

  return (
    <div className="items-center justify-between hidden w-2/3 md:flex md:w-2/3 md:order-1">
      <ul className="flex flex-col p-4 mt-4 md:flex-row md:space-x-4 md:mt-0 md:text-sm md:font-medium md:border-0">
        {optionNavbar.map((item) => {
          return (
            <li key={item.label}>
              {item.dropdown.length > 0 ? (
                <div>
                  <button
                    id="dropdownNavbarLink"
                    data-dropdown-toggle="dropdownNavbar"
                    className={`flex items-center justify-between font-medium border-0 p-0 w-auto ${
                      !hideSignin
                        ? "text-unisun-purple md:text-unisun-purple"
                        : "text-white md:text-white"
                    }`}
                  >
                    <p className="truncate">{item.label}</p>
                    <Icon.RowDown {...initSVG} />
                  </button>
                  <div
                    id="dropdownNavbar"
                    className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
                  >
                    <ul className="py-2 text-sm text-unisun-purple dark:text-gray-200">
                      {item.dropdown.map((itemII) => {
                        return (
                          <li key={itemII.label}>
                            <Link
                              href={itemII.href}
                              className={`block px-4 py-2 hover:bg-purple-100`}
                            >
                              <p className="truncate">{itemII.label}</p>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              ) : (
                <Link
                  href={item.href}
                  className={`block py-2 pl-3 pr-4 md:bg-transparent md:p-0 dark:text-white font-medium text-sm font-[Montserrat] ${
                    !hideSignin ? "text-unisun-purple md:text-unisun-purple" : "text-white"
                  }`}
                  aria-current="page"
                >
                  <p className="truncate">{item.label}</p>
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MenuNavbar;
