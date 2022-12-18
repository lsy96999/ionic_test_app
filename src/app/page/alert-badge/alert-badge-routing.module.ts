import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlertBadgePage } from './alert-badge.page';

const routes: Routes = [
  {
    path: '',
    component: AlertBadgePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlertBadgePageRoutingModule {}
