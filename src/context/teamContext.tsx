import { ReactNode, createContext } from "react";

interface teamContextData {}

interface teamProviderProps {
  children: ReactNode;
}

export const teamContext = createContext({} as teamContextData);

export function TeamProvider({ children }: teamProviderProps) {
  return <teamContext.Provider value={{}}>{children}</teamContext.Provider>;
}
