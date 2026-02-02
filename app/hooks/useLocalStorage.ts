import { useEffect, useState } from "react";

const useLocalStorage = (
  key: string,
  initialValue?: string | object | number | boolean,
) => {
  const [value, setValue] = useState(initialValue);
  const [isMounted, setIsMounted] = useState(false);

  // Tandai sudah di client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Ambil dari localStorage (client only)
  useEffect(() => {
    if (!isMounted) return;

    try {
      const storedValue = localStorage.getItem(key);
      if (storedValue !== null) {
        setValue(JSON.parse(storedValue));
      }
    } catch (error) {
      console.error("Failed to read localStorage:", error);
    }
  }, [isMounted, key]);

  // Sync ke localStorage
  useEffect(() => {
    if (!isMounted) return;

    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Failed to write localStorage:", error);
    }
  }, [isMounted, key, value]);

  const removeValue = () => {
    if (!isMounted) return;

    localStorage.removeItem(key);
    setValue(initialValue);
  };

  return { value, setValue, removeValue, isMounted };
};

export default useLocalStorage;
