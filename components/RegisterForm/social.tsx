import React from "react";
import Image from "../Image";
import { Constant } from "../../constants";
import { useAuth } from "../../context/ProvideContext";

const AuthenSocial = () => {
  const { signInGoogle, signInFacebook } = useAuth();
  return (
    <div className="flex h-12 space-x-6 justify-center">
      <div className="rounded-full cursor-pointer ring-2 ring-offset-2 relative w-11 h-11">
        <Image
          className="h-full object-cover object-center p-2"
          src={Constant.ICON_PATH_FACEBOOK}
          alt="facebook_icon"
          loading={"lazy"}
          fill
          style={{
            objectFit: "contain",
          }}
          onClick={signInFacebook}
        />
      </div>
      <div className="rounded-full cursor-pointer ring-2 ring-offset-2 relative w-11 h-11">
        <Image
          className="h-full object-cover object-center p-2"
          src={Constant.ICON_PATH_GOOGLE}
          alt="google_icon"
          loading={"lazy"}
          fill
          style={{
            objectFit: "contain",
          }}
          onClick={signInGoogle}
        />
      </div>
    </div>
  );
};

export default AuthenSocial;
