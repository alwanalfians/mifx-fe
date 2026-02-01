import { useState, useEffect } from "react";

const useProducts = () => {
  const API_URL = `${import.meta.env.VITE_API_PRODUCT}/products`;
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(API_URL, {
          signal: controller.signal,
        });

        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }

        const json = await res.json();
        setData(json);
      } catch (err: any) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();

    return () => controller.abort();
  }, []);

  return { data, isLoading, error };
};

export default useProducts;
