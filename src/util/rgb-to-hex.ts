export const rgbToHex = (rgb: string): string => {
  const result = rgb.match(/^rgb\((\d+), (\d+), (\d+)\)$/);
  if (result) {
    const r = parseInt(result[1], 10);
    const g = parseInt(result[2], 10);
    const b = parseInt(result[3], 10);
    return `#${((1 << 24) | (r << 16) | (g << 8) | b)
      .toString(16)
      .slice(1)
      .toUpperCase()}`;
  }
  return rgb;
};
