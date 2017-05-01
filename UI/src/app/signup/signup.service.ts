import {Injectable} from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {AppSettings} from '../app.setings';
import {User} from './user';
import {NewUser} from './new-user';
import {Login} from './login';
import {Cookie} from 'ng2-cookies/ng2-cookies';

@Injectable()
export class SignUpService {
  private signUpUrl = AppSettings.API_ENDPOINT + '/sign-up';  // URL to web api
  private signInUrl = AppSettings.API_ENDPOINT + '/sign-in';  // URL to web api
  private usersURL = AppSettings.API_ENDPOINT + '/user';  // URL to web api
   private newCartURL = AppSettings.API_ENDPOINT + '/createCart';  // URL to web api
  constructor(private http: Http) {
  }

  signIn(login: Login): Promise<string> {
    return this.http
    .post(this.signInUrl, login)
    .toPromise()
    .then(res => res.json().token as any)
    .catch(this.handleError);
  }

  signUp(user: NewUser): Promise<string> {
    return this.http
    .post(this.signUpUrl, user)
    .toPromise()
    .then(res => res.json().token as any)
    .catch(this.handleError);
  }


  getUser(): Promise<User> {
    return this.http.get(this.usersURL, this.getSecuredRequestOptions())
    .toPromise()
    .then(response => response.json() as User)
    .catch(this.handleError);
  }

public getSecuredRequestOptions(): RequestOptions {
  
    const authToken = Cookie.get('authtoken');
    const headers = new Headers({
    //  'Csrf-Token': Cookie.get('PLAY_CSRF_TOKEN'),
      'X-Auth-Token': authToken
    });
    return new RequestOptions({headers: headers});
  }



  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // TODO for demo purposes only
    return Promise.reject(error.message || error);
  }

}
