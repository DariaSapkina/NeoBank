export function sliderCardConfig(wrapperWidth: number) {
  if (wrapperWidth < 383) {
    return {
      cardWidth: wrapperWidth - 20,
      cardsGap: 10,
    };
  } else if (wrapperWidth < 482) {
    return {
      cardWidth: 320,
      cardsGap: 10,
    };
  } else if (wrapperWidth < 759) {
    return {
      cardWidth: 320,
      cardsGap: 90,
    };
  } else if (wrapperWidth < 870) {
    return {
      cardWidth: 320,
      cardsGap: 20,
    };
  } else if (wrapperWidth < 1090) {
    return {
      cardWidth: 320,
      cardsGap: 80,
    };
  } else if (wrapperWidth < 1270) {
    return {
      cardWidth: 320,
      cardsGap: 20,
    };
  } else {
    return {
      cardWidth: 320,
      cardsGap: 80,
    };
  }
};
