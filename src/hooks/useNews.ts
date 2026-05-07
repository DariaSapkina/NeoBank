import { useEffect, useState } from "react";
import { getNews } from "@/api";
import type { INewsResponse } from "@/types";
import { URL_NEWS, API_KEY_NEWS } from "@/constants";

export const useNews = () => {
  const [data, setData] = useState<INewsResponse | null>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadNews = async () => {
      const res = await getNews(URL_NEWS, API_KEY_NEWS);
      setData(res);
      setLoading(false);
    };

    loadNews();
  }, []);

  return { data, loading };
};
