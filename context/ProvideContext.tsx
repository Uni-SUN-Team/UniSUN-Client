import {
  FacebookAuthProvider,
  getRedirectResult,
  GoogleAuthProvider,
  onAuthStateChanged,
  User,
  UserCredential,
  UserInfo,
} from "firebase/auth";
import { useRouter } from "next/router";
import React, { useContext, createContext, useEffect, useState } from "react";
import { signUp, signInFacebook, signInGoogle, logIn, logOut } from "../components/Authenicate";
import { auth } from "../config/firebase";

interface ContextInterface {
  signUp: (email: string, password: string) => Promise<User>;
  signInFacebook: () => Promise<void>;
  signInGoogle: () => Promise<void>;
  logIn: (email: string, password: string) => Promise<User>;
  logOut: () => Promise<void>;
  user: UserInfo | null;
  progress: boolean;
  setUser: React.Dispatch<React.SetStateAction<UserInfo | null>>;
}

const AuthContext = createContext<ContextInterface>({
  signUp: function (_email: string, _password: string): Promise<User> {
    throw new Error("Function not implemented.");
  },
  signInFacebook: function (): Promise<void> {
    throw new Error("Function not implemented.");
  },
  signInGoogle: function (): Promise<void> {
    throw new Error("Function not implemented.");
  },
  logIn: function (_email: string, _password: string): Promise<User> {
    throw new Error("Function not implemented.");
  },
  logOut: function (): Promise<void> {
    throw new Error("Function not implemented.");
  },
  user: null,
  progress: false,
  setUser: function (_value: React.SetStateAction<UserInfo | null>): void {
    throw new Error("Function not implemented.");
  },
});

export const useAuth = () => useContext<ContextInterface>(AuthContext);

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserInfo | null>(null);
  const [progress, setProgress] = useState<boolean>(false);
  const router = useRouter();

  getRedirectResult(auth)
    .then((result) => {
      if (result) {
        const credentialGoogle = GoogleAuthProvider.credentialFromResult(result);
        const credentialFacebook = FacebookAuthProvider.credentialFromResult(result);
        if (
          (credentialFacebook && credentialFacebook.accessToken) ||
          (credentialGoogle && credentialGoogle.accessToken)
        ) {
          router.push("/");
        }
      }
    })
    .catch((error) => {
      console.error(error.message);
    });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user.providerData[0]);
      } else {
        setUser(null);
      }
    });
    setProgress(false);
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signUp,
        signInFacebook,
        signInGoogle,
        logIn,
        logOut,
        user,
        progress,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
