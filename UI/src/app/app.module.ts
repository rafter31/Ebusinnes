import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {CategoriesComponent} from './categories/categories.component';
import {ProductDetailsViewComponent} from './productsDetails/productsDetails.component';
import {SignUpComponent} from './signup/signup.component';
import {UsersComponent} from './user/users.component';
import {ProductComponent} from './product/product.component';
import {CartComponent} from './cart/cart.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    CategoriesComponent,
    SignUpComponent,
    UsersComponent,
    ProductComponent,
    ProductDetailsViewComponent,
    CartComponent 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

