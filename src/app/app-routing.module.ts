import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutMeComponent } from "./pages/about-me/about-me.component";

const routes: Routes = [
  { path: 'about-me', component: AboutMeComponent },
  { path: '**', redirectTo: '/about-me'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
