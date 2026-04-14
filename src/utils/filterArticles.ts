import type { INews } from "@/api";

function isCorrectImgUrl(src: string): Promise<boolean> {
  return new Promise((resolve) => {
    const img = new Image();

    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);

    img.src = src;
  });
};

export async function filterArticles(data: INews[]) {
  const cleanedArticles: INews[] = await Promise.all(
    data.map(async (item) => {
      const isValidImg = await isCorrectImgUrl(item.urlToImage);
      const imgUrl = isValidImg ? item.urlToImage : "";
      let description = item.description ?? "";
      const hasHtml = /<[^>]*>/.test(description);
      if (hasHtml) description = "";
      return {
        title: item.title,
        description: description,
        url: item.url,
        urlToImage: imgUrl,
      };
    }),
  );
  return cleanedArticles.filter(
    (item) => item.urlToImage !== "" && item.description !== "",
  );
};
