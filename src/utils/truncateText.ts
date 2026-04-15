export function truncateText(text: string, maxLength: number = 55) {
  if (!text) return "";
  if (text.length <= maxLength) return text;
  let trimmedText = text.slice(0, maxLength);
  trimmedText = trimmedText.replace(/[.,!?;:]?\s+\S*$/, "");
  return trimmedText.trim() + "...";
};
