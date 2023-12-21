import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreloadingService } from './lazy/preloading.service';

const routes: Routes = [
  {
    path: 'lazy',
    data: {
      noPreload: false,
      delayOfPreload: 4000,
    },
    loadChildren: () => import('./lazy/lazy.module').then((m) => m.LazyModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadingService }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
