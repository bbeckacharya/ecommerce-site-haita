import React, { createContext, useState, useContext, ReactNode } from "react";

interface VisibilityContextProps {
  visibility: boolean;
  setVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}
interface VisibilityProviderProps {
  children: ReactNode;
}
const VisibilityContext = createContext<VisibilityContextProps | undefined>(
  undefined
);

export const VisibilityProvider = ({ children }: VisibilityProviderProps) => {
  const [visibility, setVisibility] = useState<boolean>(false);

  return (
    <VisibilityContext.Provider value={{ visibility, setVisibility }}>
      {children}
    </VisibilityContext.Provider>
  );
};

export const useVisibilityContext = (): VisibilityContextProps => {
  const context = useContext(VisibilityContext);
  if (!context) {
    throw new Error(
      "useVisibilityContext must be used within a VisibilityProvider"
    );
  }
  return context;
};
