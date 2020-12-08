import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { ItemsComponent } from './components/items/items.component';
import { LoginComponent } from './components/login/login.component';
import { GuardGuard } from './guard/guard.guard';


const routes: Routes = [
  {path:"home",component:HomeComponent,canActivate:[GuardGuard]},
  {path:"login",component:LoginComponent},
  {path:"items",component:ItemsComponent,canActivate:[GuardGuard]},
  {path:"cart",component:CartComponent,canActivate:[GuardGuard]},
  {path:"**",redirectTo:"login"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
