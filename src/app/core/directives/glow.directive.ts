import {
  DestroyRef,
  Directive,
  ElementRef,
  inject,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { GlowService } from '../services/glow.service';
// import { ColorConverterService } from '../services/color-converter.service';

interface Coords {
  x: number;
  y: number;
}

interface Config {
  color?: string;
  size?: string;
  opacity?: string;
}

@Directive({
  selector: '[appGlow]',
})
export class GlowDirective implements OnInit {
  private readonly el = inject(ElementRef);
  private readonly renderer = inject(Renderer2);
  private readonly destroyRef = inject(DestroyRef);
  private readonly glowService = inject(GlowService);
  // private readonly colorConverterService = inject(ColorConverterService);

  @Input() config: Config = { color: 'red', size: '200' };

  private needUpdate = true;

  ngOnInit(): void {
    // console.log(this.colorConverterService.rgbToHsl('rgb(123, 45, 67)'));
    this.glowService.mouseMove$
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        map((e) => {
          const x = e.clientX;
          const y = e.clientY;
          return { x, y };
        })
      )
      .subscribe((coords) => {
        this.scheduleUpdate(coords);
      });
  }

  private scheduleUpdate(coords: Coords): void {
    if (this.needUpdate) {
      this.needUpdate = false;
      requestAnimationFrame(() => this.updatePosition(coords));
    }
  }

  private updatePosition(coords: Coords): void {
    const x = coords.x - this.el.nativeElement.offsetLeft;
    const y = coords.y - this.el.nativeElement.offsetTop;

    const gradient = `radial-gradient(circle at ${x}px ${y}px, rgba(230,0,0,0.5) 0px, rgba(0,0,0,0) ${this.config.size}px)`;

    this.renderer.setStyle(this.el.nativeElement, 'backgroundImage', gradient);
    this.needUpdate = true;
  }
}
