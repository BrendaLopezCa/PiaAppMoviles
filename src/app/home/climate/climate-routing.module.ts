import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClimatePage } from './climate.page';

const routes: Routes = [
  {
    path: '',
    component: ClimatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClimatePageRoutingModule {}
