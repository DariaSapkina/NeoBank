import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

export const getDate = () => {
  return dayjs().format("DD.MM.YYYY");;
};
