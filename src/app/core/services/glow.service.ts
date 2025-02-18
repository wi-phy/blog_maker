import { Injectable } from '@angular/core';
import { fromEvent, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GlowService {
  public mouseMove$ = fromEvent<MouseEvent>(document, 'mousemove').pipe(
    shareReplay(1)
  );
}
