import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'action-sheet',
    loadChildren: () => import('./page/action-sheet/action-sheet.module').then( m => m.ActionSheetPageModule)
  },
  {
    path: 'accordian',
    loadChildren: () => import('./page/accordian/accordian.module').then( m => m.AccordianPageModule)
  },
  {
    path: 'alert-badge',
    loadChildren: () => import('./page/alert-badge/alert-badge.module').then( m => m.AlertBadgePageModule)
  },
  {
    path: 'breadcrumbs',
    loadChildren: () => import('./page/breadcrumbs/breadcrumbs.module').then( m => m.BreadcrumbsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
