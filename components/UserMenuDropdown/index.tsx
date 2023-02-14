import { NextPage } from "next";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import Icon, { PropsSVG } from "../svg";
const Image = dynamic(() => import("../Image"), { ssr: false });
import type { DropdownOptions } from "flowbite";
import { useAuth } from "../../context/ProvideContext";
import { handleDocumentId } from "../../config/handleDocumentId";

interface Props {
  OptionsElement: React.ComponentType<{}>;
}

const options: DropdownOptions = {
  placement: "bottom",
  triggerType: "click",
  offsetSkidding: 0,
  offsetDistance: 10,
  delay: 300,
};

const initSVG: PropsSVG = {
  className: "absolute w-12 h-12 text-gray-400 -left-1",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  ariaHidden: "true",
};

const UserMenuDropdown: NextPage<Props> = ({ OptionsElement }) => {
  const { user } = useAuth();
  useEffect(() => {
    handleDocumentId("user-dropdown", options, "dropdown", "user-menu-button");
    handleDocumentId("mobile-menu-collapse", options, "dropdown", "mobile-menu");
  }, []);

  return (
    <div className="flex items-center md:order-2">
      <button
        type="button"
        className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
        id="user-menu-button"
      >
        <span className="sr-only">Open user menu</span>
        {user?.photoURL ? (
          <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <Image
              className="w-10 h-10 rounded-full"
              src={user?.photoURL}
              alt="user photo"
              priority
            />
          </div>
        ) : (
          <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <Icon.User {...initSVG} />
          </div>
        )}
      </button>
      <div
        className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
        id="user-dropdown"
      >
        <div className="px-4 py-3">
          <span className="block text-sm text-gray-900 dark:text-white">{user?.displayName}</span>
          <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
            {user?.email}
          </span>
        </div>
        <ul className="py-2" aria-labelledby="user-menu-button">
          <OptionsElement />
        </ul>
      </div>
    </div>
  );
};

export default UserMenuDropdown;
