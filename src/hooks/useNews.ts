import { useEffect, useState } from "react";
//import { getNews, type INewsResponse } from "@/api";
//import { URL_NEWS, API_KEY_NEWS } from "@/constants";

import { newTestData } from "./news.test";
import { type INewsResponse } from "@/api";

export const useNews = () => {
  const [data, setData] = useState<INewsResponse | null>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadNews = async () => {
      //const res = await getNews(URL_NEWS, API_KEY_NEWS);
      const res = newTestData;
      setData(res);
      setLoading(false);
    };

    loadNews();
  }, []);

  return { data, loading };
};
