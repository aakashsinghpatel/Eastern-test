import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { MenuComponent } from './component/menu/menu.component';

const routes: Routes = [
  {
   path: "home",
   component: HomeComponent,
   data: { animationState: 'home' }
  },
  {
    path: "menu",
    component: MenuComponent,
    data: { animationState: 'menu' }
   },
   {
    path: "**",
    redirectTo: "/home"
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
