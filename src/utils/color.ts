export const convertHexToRgba = (hex: string, alpha: number = 1) => {
  let c: string[];

  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('');
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    const value = Number(`0x${c.join('')}`);

    return `rgba(${[(value >> 16) & 255, (value >> 8) & 255, value & 255].join(', ')}, ${alpha})`;
  }
  throw new Error('Bad Hex');
};
