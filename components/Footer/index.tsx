import { NextPage } from "next";
import dynamic from "next/dynamic";
import React from "react";
import { PropsSVG } from "../svg";
import ButtonSubmit from "../Button/Submit";

const SocialFooter = dynamic(() => import("./Social"), { ssr: false });

interface Props {
  hideFull: boolean;
  hideSignin: boolean;
  home: boolean;
}

const initSocial: PropsSVG = {
  className: "w-11 h-11 p-1 rounded-full bg-white cursor-pointer",
  ariaHidden: "true",
};

const Footer: NextPage<Props> = ({ hideFull, hideSignin, home }) => {
  return (
    <div>
      {hideFull && hideSignin && (
        <footer className="bg-unisun-purple flex flex-col items-center dark:bg-gray-800 px-2 relative">
          {!home && (
            <>
              <div className="flex items-center justify-center flex-col space-y-4 my-11">
                <span className="text-unisun-orange text-5xl">
                  Ready <span className="text-white">to Get Started?</span>
                </span>
                <p className="text-white text-2xl truncate">
                  พร้อมที่จะเริ่มเปลี่ยนแปลงตัวเองรึยัง
                </p>
                <div className="w-44 h-11">
                  <ButtonSubmit
                    type="button"
                    label="ทำแบบทดสอบ"
                    className="bg-unisun-orange font-bold text-lg hover:bg-unisun-purple hover:text-unisun-orange hover:border-unisun-orange hover:border"
                  />
                </div>
              </div>
              <hr className="h-px my-7 bg-gray-700 border-0 dark:bg-gray-700 w-full" />
            </>
          )}
          <div
            className={`w-full flex flex-col space-y-5 sm:space-y-0 sm:flex-row justify-between items-center mb-16 lg:px-10 xl:px-20 ${
              home && "mt-5"
            }`}
          >
            <div>
              <span className="text-white">
                บริษัท ยูนิซัน เอดูเคชั่น เทคโลยี จำกัด<p>UniSUN Education Technology Co., Ltd</p>
              </span>
            </div>
            <div className="flex space-x-4">
              <SocialFooter initial={initSocial} />
            </div>
          </div>
          <div className="absolute bottom-0 right-0 text-xs text-neutral-600">
            <p className="truncate">version : beta</p>
          </div>
        </footer>
      )}
    </div>
  );
};

export default Footer;
