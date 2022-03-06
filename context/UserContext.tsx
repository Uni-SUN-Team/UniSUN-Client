import React, {createContext, ReactNode, useContext, useState} from 'react';
import {Me} from '../network/model/Home';

export interface IUser {
  user?: Me;
  setCurrentUser: (user: Me) => void;
  clearCurrentUser: () => void;
}

const defaultState: IUser = {
  user: undefined,
  setCurrentUser: () => {},
  clearCurrentUser: () => {},
};

export const UserContext = createContext(defaultState);

interface AppProviderProps {
  children: ReactNode;
}

export const UserProvider = ({children}: AppProviderProps) => {
  const [user, setUser] = useState<Me | undefined>(undefined);

  const setCurrentUser = async (user: Me) => {
    setUser(user);
  };

  const clearCurrentUser = () => {
    setUser(undefined);
  };

  const userData = {user, setCurrentUser, clearCurrentUser};

  return <UserContext.Provider value={userData}>{children}</UserContext.Provider>;
};

export const useUserContext = () => useContext(UserContext);
