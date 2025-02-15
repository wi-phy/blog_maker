import {
  Directive,
  ElementRef,
  HostListener,
  inject,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appGlow]',
})
export class GlowDirective {
  private readonly el = inject(ElementRef);
  private readonly renderer = inject(Renderer2);

  private needUpdate = true;

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.scheduleUpdate(event);
  }

  private scheduleUpdate(event: MouseEvent): void {
    if (this.needUpdate) {
      this.needUpdate = false;
      requestAnimationFrame(() => this.updatePosition(event));
    }
  }

  private updatePosition(event: MouseEvent): void {
    const x = event.clientX - this.el.nativeElement.offsetLeft;
    const y = event.clientY - this.el.nativeElement.offsetTop;

    const gradient = `radial-gradient(circle 200px at ${x}px ${y}px, rgba(255,0,0,0.2) 0px, rgba(255,0,0,0) 200px)`;

    this.renderer.setStyle(this.el.nativeElement, 'backgroundImage', gradient);
    this.needUpdate = true;
  }
}
