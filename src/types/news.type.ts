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
