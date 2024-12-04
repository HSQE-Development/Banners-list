import { rgbToHex } from "./rgb-to-hex";

export const getDominantColors = (element: HTMLElement): string[] => {
  const colors: string[] = [];
  const backgroundColor = window.getComputedStyle(element).backgroundColor;
  const textColor = window.getComputedStyle(element).color;

  if (backgroundColor) {
    colors.push(rgbToHex(backgroundColor));
  }
  if (textColor) {
    colors.push(rgbToHex(textColor));
  }

  return colors;
};
