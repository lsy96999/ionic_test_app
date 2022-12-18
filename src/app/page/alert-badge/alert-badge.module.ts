import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlertBadgePageRoutingModule } from './alert-badge-routing.module';

import { AlertBadgePage } from './alert-badge.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlertBadgePageRoutingModule
  ],
  declarations: [AlertBadgePage]
})
export class AlertBadgePageModule {}
