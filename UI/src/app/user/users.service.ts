import {Injectable} from '@angular/core';
import {Http, RequestOptions, RequestOptionsArgs, Headers} from '@angular/http';
import {Cookie} from 'ng2-cookies/ng2-cookies';

import 'rxjs/add/operator/toPromise';
import {AppSettings} from '../app.setings';

@Injectable()
export class UsersService {
  private usersURL = AppSettings.API_ENDPOINT + '/user';  // URL to web api

  constructor(private http: Http) {
  }

  getUser(): Promise<any> {
    const authToken = Cookie.get('authtoken');
    const headers = new Headers({'X-Auth-Token': authToken});
    const options = new RequestOptions({headers: headers});

    return this.http.get(this.usersURL, options)
    .toPromise()
    .then(response => response.json() as any)
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // TODO for demo purposes only
    return Promise.reject(error.message || error);
  }


}
