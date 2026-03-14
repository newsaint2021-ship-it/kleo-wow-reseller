import { useState, useEffect, createContext, useContext } from "react";

export type StoreMode = "retail" | "reseller";

interface StoreModeContext {
  mode: StoreMode;
  toggleMode: (newMode: StoreMode) => void;
}

export const StoreModeContext = createContext<StoreModeContext>({
  mode: "retail",
  toggleMode: () => {},
});

export const useStoreMode = () => useContext(StoreModeContext);

export const useStoreModeProvider = () => {
  const [mode, setMode] = useState<StoreMode>("retail");

  useEffect(() => {
    const saved = localStorage.getItem("kleo_mode") as StoreMode;
    if (saved === "retail" || saved === "reseller") setMode(saved);
  }, []);

  const toggleMode = (newMode: StoreMode) => {
    setMode(newMode);
    localStorage.setItem("kleo_mode", newMode);
  };

  return { mode, toggleMode };
};
