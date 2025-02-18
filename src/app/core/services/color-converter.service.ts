import { Injectable } from '@angular/core';

interface IRgb {
  r: number;
  g: number;
  b: number;
}

@Injectable({
  providedIn: 'root',
})
export class ColorConverterService {
  public rgbToHsl(rgbColor: string, opacity = '1'): string | null {
    const rgbValues = this.extractRgb(rgbColor);
    if (!rgbValues) return null;
    const { r, g, b } = rgbValues;

    const varMin = Math.min(r, g, b);
    const varMax = Math.max(r, g, b);
    const delta = varMax - varMin;

    let l = (varMax + varMin) / 2;
    let h = 0;
    let s = 0;

    if (delta !== 0) {
      s = l < 0.5 ? delta / (varMax + varMin) : delta / (2 - (varMax + varMin));

      const deltaR = ((varMax - r) / 6 + delta / 2) / delta;
      const deltaG = ((varMax - g) / 6 + delta / 2) / delta;
      const deltaB = ((varMax - b) / 6 + delta / 2) / delta;

      if (r === varMax) {
        h = deltaB - deltaG;
      } else if (g === varMax) {
        h = 1 / 3 + deltaR - deltaB;
      } else if (b === varMax) {
        h = 2 / 3 + deltaG - deltaR;
      }

      if (h < 0) h += 1;
      if (h > 1) h -= 1;
    }

    h = +(h * 360).toFixed(2);
    s = +(s * 100).toFixed(2);
    l = +(l * 100).toFixed(2);

    return `hsl(${h}, ${s}, ${l}, ${opacity})`;
  }

  private extractRgb(rgbColor: string): IRgb | null {
    // rgb\( commence par rgb(
    // (\d{1,3}) un groupe entre 1 et 3 nombres
    // ,\s exactement un espace après la virgule
    // \) fini par une parenthèse
    const rgbRegex = /^rgb\((\d{1,3}),\s(\d{1,3}),\s(\d{1,3})\)$/;
    const match = rgbRegex.exec(rgbColor);

    if (!match) return null;

    const r = +match[1] / 255;
    const g = +match[2] / 255;
    const b = +match[3] / 255;

    const isRgbValues =
      r >= 0 && r <= 1 && g >= 0 && g <= 1 && b >= 0 && b <= 1;

    return isRgbValues ? { r, g, b } : null;
  }
}
