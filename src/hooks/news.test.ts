import { type INewsResponse } from "@/api";

export const newTestData: INewsResponse = {
  status: "ok",
  totalResults: 65,
  articles: [
    {
      description:
        "Mayor Katie Wilson said Saturday the city has not authorized any new facilities and will explore a potential moratorium.",
      title:
        "Mayor Wilson responds to pitch of building large data centers in Seattle - The Seattle Times",
      url: "https://www.seattletimes.com/seattle-news/wilson-says-no-new-seattle-data-centers-greenlit-considers-moratorium/",
      urlToImage:
        "https://images.seattletimes.com/wp-content/uploads/2026/04/04182026_tzr_tzr_141643.jpg?d=1200x630",
    },
    {
      description:
        "A steady wave of closures is reshaping a once-growing barbecue chain’s footprint.",
      title:
        "Iconic 42-year-old BBQ chain has closed half its restaurants - thestreet.com",
      url: "https://www.thestreet.com/restaurants/iconic-42-year-old-dinosaur-bbq-chain-has-closed-half-its-restaurants",
      urlToImage:
        "https://www.thestreet.com/.image/NDA6MDAwMDAwMDAyOTQ2MDg5/peopleeatfood-maneatingbarbecueribsingrillbar.jpg?io=1&profile=share16-9",
    },
    {
      description:
        "As the U.S. and Israel’s war with Iran squeezes global oil supplies, travelers have valid reasons to worry about the cost and availability of flights as they plan their late spring and summer trips. Experts say booking earlier, and staying flexible on dates, …",
      title:
        "What consumers can do as the Iran war impacts the cost and availability of flights - AP News",
      url: "https://apnews.com/article/summer-travel-flights-prices-war-fuel-d88cd606531d816cbc4d7e1f6c16dc81",
      urlToImage:
        "https://dims.apnews.com/dims4/default/cc1c4b2/2147483647/strip/true/crop/3227x2150+0+1/resize/980x653!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F1a%2Fc3%2F4e603e8a43d31b4f57d80288b240%2F7920401aae2d41429c736f8df904dbe7",
    },
    {
      description:
        "The woman’s lawyer said that she had purchased a drink package that allows cruise passengers 15 alcoholic drinks in 24 hours.",
      title:
        "A Calif. nurse downed 14 tequila shots on a Carnival cruise, blacked out and sued. A Miami jury just gave her $300K - Yahoo Finance",
      url: "https://finance.yahoo.com/sectors/healthcare/articles/calif-nurse-downed-14-tequila-194000152.html",
      urlToImage:
        "https://s.yimg.com/ny/api/res/1.2/MQEZGmSti8YOBF.uMGJG_w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://media.zenfs.com/en/moneywise_327/78b52b55c76d969ca7f440189eeb8d2c",
    },
  ],
};
