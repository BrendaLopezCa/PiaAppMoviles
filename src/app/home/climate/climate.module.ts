import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClimatePageRoutingModule } from './climate-routing.module';

import { ClimatePage } from './climate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClimatePageRoutingModule
  ],
  declarations: [ClimatePage]
})
export class ClimatePageModule {}
