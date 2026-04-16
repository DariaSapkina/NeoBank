import type { INews } from "@/api";

function isCorrectImgUrl(src: string) {
  const img = document.createElement("img");
  img.src = src;
  return img.width && img.height;
};

export async function filterArticles(data: INews[]) {
  const cleanedArticles: INews[] = data.map((item) => {
      const isValidImg = isCorrectImgUrl(item.urlToImage);
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
  });
  return cleanedArticles.filter(
    (item) => item.urlToImage !== "" && item.description !== "",
  );
};
