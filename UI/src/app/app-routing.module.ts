import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProductComponent} from './product/product.component';
import {ProductDetailsViewComponent} from './productsDetails/productsDetails.component';
import {SignUpComponent} from './signup/signup.component';
import {UsersComponent} from './user/users.component';
import {CartComponent} from './cart/cart.component';
const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'user', component: UsersComponent},
  {path: 'product', component: ProductComponent},
  {path: 'cart', component: CartComponent},
  {path: 'productsDetails', component: ProductDetailsViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
