import type { INews } from "@/types";

function isCorrectImgUrl(src: string) {
  const img = new Image(1,1);
  img.src = src;
  return img.naturalHeight !== 0 && img.naturalWidth !== 0;
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
