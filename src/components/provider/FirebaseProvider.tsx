'use client';

import { createContext, FC, PropsWithChildren } from 'react';
import { FirebaseApp, FirebaseOptions, initializeApp } from 'firebase/app';

interface FirebaseProviderProps {
  firebaseConfig: FirebaseOptions;
}

export interface FirebaseContext {
  firebaseApp: FirebaseApp;
}

//@ts-ignore
export const firebaseContext = createContext<FirebaseContext>({});

export const FirebaseProvider: FC<PropsWithChildren<FirebaseProviderProps>> = (props) => {
  const { children, firebaseConfig } = props;
  const app = initializeApp(firebaseConfig);
  return (
    <firebaseContext.Provider value={{ firebaseApp: app }}>{children}</firebaseContext.Provider>
  );
};
