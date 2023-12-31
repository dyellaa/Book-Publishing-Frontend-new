import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { TitleDashboardComponent } from './components/titles/title-dashboard/title-dashboard.component';

const routes: Routes = [
  {path:'',component:LandingPageComponent},
  {path:'title-dashboard',component:TitleDashboardComponent},
  {path:'**',component:NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
