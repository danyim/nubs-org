import { convertHexToRgba } from 'Utils/color';

describe('color util', () => {
  describe('convertHexToRgba', () => {
    it('should convert normal hex value', () => {
      const input = '#fffeee';
      const expected = 'rgba(255, 254, 238, 1)';
      const result = convertHexToRgba(input);
      expect(result).toEqual(expected);
    });

    it('should correctly apply the alpha value', () => {
      const input = '#fffeee';
      const alpha = 0.7;
      const expected = `rgba(255, 254, 238, ${alpha})`;
      const result = convertHexToRgba(input, alpha);
      expect(result).toEqual(expected);
    });

    it('should handle a shorthand hex value', () => {
      const input = '#2fe';
      const alpha = 0.7;
      const expected = `rgba(34, 255, 238, ${alpha})`;
      const result = convertHexToRgba(input, alpha);
      expect(result).toEqual(expected);
    });
  });
});
