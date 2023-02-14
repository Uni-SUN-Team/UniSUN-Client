import { auth, providerGoogle, providerFacebook } from "../../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithRedirect,
} from "firebase/auth";

export const signUp = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password).then(
    (userCredential) => {
      const user = userCredential.user;
      return user;
    }
  );
};

export const logIn = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password).then(
    (userCredential) => {
      const user = userCredential.user;
      return user;
    }
  );
};

export const logOut = async () => {
  await signOut(auth).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error({ errorCode: errorCode, errorMessage: errorMessage });
  });
};

export const signInGoogle = () => {
  return signInWithRedirect(auth, providerGoogle).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error({ errorCode: errorCode, errorMessage: errorMessage });
  });
};

export const signInFacebook = () => {
  return signInWithRedirect(auth, providerFacebook).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error({ errorCode: errorCode, errorMessage: errorMessage });
  });
};
