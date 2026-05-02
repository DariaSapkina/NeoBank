export {
  type ICurrencyResponse,
  type TCurrency,
  getAllCurrency,
} from "./getCurrency.api";
export { getNews, type INews, type INewsResponse } from "./getNews.api";
export { subscribeNews } from "./subscribeNews.api";
export { sendFirstStepForm, type IRequestFirstStep } from "./sendFirstStepForm";
export { selectOffer } from "./selectOffer.api";
export { getApplicationInfo } from "./getApplicationStatus";
export {
  registerApplication,
  type IRequestSecondStep,
} from "./registerApplication.api";
export { createDocument } from "./createDocument.api";
