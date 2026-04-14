import { useEffect, useState } from "react";
import { getNews, type INewsResponse } from "@/api";
import { URL_NEWS, API_KEY_NEWS } from "@/constants";

export const useNews = () => {
  const [data, setData] = useState<INewsResponse | null>();

  useEffect(() => {
    const loadNews = async () => {
      const res = await getNews(URL_NEWS, API_KEY_NEWS);
      setData(res);
    };

    loadNews();
  }, []);

  return { data };
};
