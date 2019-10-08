import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component'
import { BlogPageComponent } from './blog-page/blog-page.component'
import { RoastsPageComponent } from './roasts-page/roasts-page.component'

const routes: Routes = [
  { path: '', redirectTo: '/home-page', pathMatch: 'full' },
  { path: 'home-page', component: HomePageComponent },
  //{ path: 'blog-page', component: BlogPageComponent },
  { path: 'roasts-page', component: RoastsPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
