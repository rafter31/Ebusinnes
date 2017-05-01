import {Component} from '@angular/core';
import {NewUser} from './new-user';
import {SignUpService} from './signup.service';
import {Login} from 'app/signup/login';
import {Cookie} from 'ng2-cookies/ng2-cookies';
import { DefaultApi } from '../api/api/DefaultApi';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  providers: [SignUpService,DefaultApi]
})
export class SignUpComponent {
  user: NewUser = new NewUser();
  login: Login = new Login();

  constructor(private defaultApi: DefaultApi, private signUpService: SignUpService) {
  }

  signUp(): void {
    this.signUpService.signUp(this.user).then(value => {
      debugger;
      Cookie.set('authtoken', value);
     this.redirectAfterLogIn();
    });
  }

  signIn(): void {
    this.signUpService.signIn(this.login).then(value => {
      debugger;
      Cookie.set('authtoken', value);
      this.redirectAfterLogIn();
    });
  }

  redirectAfterLogIn(){
     debugger;
      this.signUpService.getUser().then(value => {
        debugger;
        console.log(value);
          var data :any = {id: 54, UserId: value.userID};
          Cookie.set('LoggedUserId', value.userID.toString());
          this.defaultApi.createCart(data).subscribe(ca =>
            this.getCartId(value.userID.toString())
          )


      
  //  });
       Cookie.set('UserNameCookie', value.firstName.toString());
      })
      
 window.location.href = "/";
  }

setCartId(cart){
  debugger;
  Cookie.set('LoggedUserCartId', cart.id)
} 

getCartId(value){
  debugger;
      this.defaultApi.getCartByUserId(value).subscribe(cart =>this.setCartId(cart));
}
}
