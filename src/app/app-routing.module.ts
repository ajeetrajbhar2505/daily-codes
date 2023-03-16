import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DailyCodesComponent } from './daily-codes/daily-codes.component';
import { SampleWebsiteComponent } from './sample-website/sample-website.component';

const routes: Routes = [
  {path : '',redirectTo : 'daily',pathMatch : 'full'},
  {path : 'website',component : SampleWebsiteComponent},
  {path : 'daily',component : DailyCodesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
