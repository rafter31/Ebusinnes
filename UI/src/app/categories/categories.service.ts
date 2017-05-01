import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {AppSettings} from '../app.setings';

import {Category} from './category';


@Injectable()
export class CategoriesService {
  private categoriesUrl = AppSettings.API_ENDPOINT + '/categories';  // URL to web api
  private headers = new Headers({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:4200'
  });

  constructor(private http: Http) {
  }

  getTopCategories(): Promise<Category[]> {
    return this.http.get(this.categoriesUrl + '/top')
    .toPromise()
    .then(response => response.json() as Category[])
    .catch(this.handleError);
  }

  getCategories(): Promise<Category[]> {
    return this.http.get(this.categoriesUrl)
    .toPromise()
    .then(response => response.json() as Category[])
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // TODO for demo purposes only
    return Promise.reject(error.message || error);
  }

}
