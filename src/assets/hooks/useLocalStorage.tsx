import { useState, useEffect } from "react";

const getSavedValue = <T,>(key: string, initialValue: T) => {
  const savedValue = localStorage.getItem(key);

  if (savedValue) return JSON.parse(savedValue);

  if (initialValue instanceof Function) return initialValue();

  return initialValue;  
};

const useLocalStorage = <T,>(key: string, initialValue: T) => {
  const [value, setValue] = useState<T>(() => {
    return getSavedValue<T>(key, initialValue);
  }); 

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
};

export default useLocalStorage;
