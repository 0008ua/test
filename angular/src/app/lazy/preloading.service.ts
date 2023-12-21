import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { EMPTY, Observable, delay, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PreloadingService implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    const { noPreload, delayOfPreload = 3000} = route.data as {
      noPreload: boolean;
      delayOfPreload: number;
    };

    if (noPreload) {
      return EMPTY;
    }

    return of(true).pipe(
      delay(delayOfPreload),
      switchMap(() => load()),
    );
  }
}
