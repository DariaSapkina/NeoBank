import axios from "axios";
import { filterArticles } from "@/utils";

export interface INews {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
};

export interface INewsResponse {
  status: "ok" | "error";
  totalResults: number;
  articles: INews[];
};

export async function getNews(url: string, apiKey: string) {
  try {
    const res = await axios.get<INewsResponse>(`${url}&apiKey=${apiKey}`);

    const data: INews[] = res.data.articles.map((item) => ({
      title: item.title,
      description: item.description,
      url: item.url,
      urlToImage: item.urlToImage,
    }));

    const filteredArticles = await filterArticles(data);

    const response: INewsResponse = {
      status: res.data.status,
      totalResults: res.data.totalResults,
      articles: filteredArticles,
    };

    return response;
  } catch (e) {
    if (e instanceof Error) {
      console.log(e.message);
    }
    return null;
  }
};
