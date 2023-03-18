import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { DailyCodesComponent } from './daily-codes/daily-codes.component';
import { SampleWebsiteComponent } from './sample-website/sample-website.component';

const routes: Routes = [
  {path : '',redirectTo : 'child',pathMatch : 'full'},
  {path : 'website',component : SampleWebsiteComponent},
  {path : 'daily',component : DailyCodesComponent},
  {path : 'child',component : ChildComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
