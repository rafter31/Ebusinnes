import { Inject, Injectable, Optional }                      from '@angular/core';
import { Http, Headers, URLSearchParams }                    from '@angular/http';
import { RequestMethod, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Response, ResponseContentType }                     from '@angular/http';

import { Observable }                                        from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import * as models                                           from '../model/models';
import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';
import {Cookie} from 'ng2-cookies/ng2-cookies';
/* tslint:disable:no-unused-variable member-ordering */


@Injectable()
export class DefaultApi {
    protected basePath = 'localhost:9000/api';
    public defaultHeaders: Headers = new Headers();
    public configuration: Configuration = new Configuration();

    constructor(protected http: Http, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
        }
    }

public getAllProducts(category: any, extraHttpRequestParams?: any): any {
        return this.getallProductsWithHttpInfo(category, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

        public getallProductsWithHttpInfo(category:any, extraHttpRequestParams?: any): Observable<Response> {
        const path = 'http://localhost:9000/api/products';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); 

      // queryParameters.set('category', cat);
        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
        ];
        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });

        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        //return 
        var json = this.http.request(path, requestOptions);
        return json;
    }

    public getAllCategories(extraHttpRequestParams?: any): any {
        return this.getAllCategoriesWithHttpInfo( extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

        public getAllCategoriesWithHttpInfo(extraHttpRequestParams?: any): Observable<Response> {
        const path = 'http://localhost:9000/api/categories';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); 

      // queryParameters.set('category', cat);
        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
        ];
        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });

        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        //return 
        var json = this.http.request(path, requestOptions);
        return json;
    }

public getProductsByCategory(category: any, extraHttpRequestParams?: any): any {
        return this.getProductsByCategoryWithHttpInfo(category, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

        public getProductsByCategoryWithHttpInfo(category:any, extraHttpRequestParams?: any): Observable<Response> {
        const path = 'http://localhost:9000/api/categories/'+category+'/products';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); 

      // queryParameters.set('category', cat);
        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
        ];
        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });

        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        //return 
        var json = this.http.request(path, requestOptions);
        return json;
    }




public getProductsAndCategories(Id: string, extraHttpRequestParams?: any): any {
        return this.getProductsAndCategoriesWithHttpInfo(Id, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    public getProductsAndCategoriesWithHttpInfo(cat: any, extraHttpRequestParams?: any): Observable<Response> {
        const path = 'http://localhost:17386/Product/GetProductsAndCategories';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); 

       queryParameters.set('category', cat);
        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
        ];
        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });

        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        //return 
        var json = this.http.request(path, requestOptions);
        return json;
    }


    public getProductsById(userId: string, extraHttpRequestParams?: any): any {
        return this.getProductsByIdWithHttpInfo(userId, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }


    public getProductsByIdWithHttpInfo(id: any, extraHttpRequestParams?: any): Observable<Response> {
        const path = 'http://localhost:9000/api/products/'+id;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); 

     // queryParameters.set('id', id);
        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
        ];
        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });

        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        //return 
        var json = this.http.request(path, requestOptions);
        return json;
    }

    public addToCart(id: string, data: any ,extraHttpRequestParams?: any): any {
        return this.addToCartWithHttpInfo(id, data, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response;
                }
            });
    }


    public addToCartWithHttpInfo(id: any, data: any, extraHttpRequestParams?: any): Observable<Response> {
        
         const path = 'http://localhost:9000/api/createCartItems';
//id: Int, ProductId: Int, Quantity: Int, CartId: Int, Name: String, GrossAmount: Double, UnitAmount: Double, IsPayed: Int
//var data:any ={ProductId:1, Quantity:1, CartId:1, Name:"test", GrossAmount:1, UnitAmount:2, IsPayed:0 };
//var jsonData =  JSON.stringify(data);
  let headers = new Headers(this.defaultHeaders.toJSON()); 
       var json =  this.http.post(path, (data), {headers:headers});
        return json;
    }


 public getCartForUser(id: string,extraHttpRequestParams?: any): any {
        return this.getCartForUserWithHttpInfo(id, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }


    public getCartForUserWithHttpInfo(id: any, extraHttpRequestParams?: any): Observable<Response> {
      //  const path = 'http://localhost:9000/api/cartItems';
      debugger;
        const path = 'http://localhost:9000/api/getCartItemsByCartId/'+id;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); 

      // queryParameters.set('userID', id);
        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
        ];
        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });

        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        //return 
        var json = this.http.request(path, requestOptions);
        return json;
    }


    
     public deleteCartItem(id: string,extraHttpRequestParams?: any): any {
        return this.deleteCartItemWithHttpInfo(id, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response;
                }
            });
    }


    public deleteCartItemWithHttpInfo(id: any, extraHttpRequestParams?: any): Observable<Response> {
        const path = 'http://localhost:9000/api/deleteCartItems/'+id;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); 

      // queryParameters.set('id', id);
        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
        ];
        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });

        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        //return 
        var json = this.http.request(path, requestOptions);
        return json;
    }


    public createProduct(name: any,desc: any, price: any, code: any, image: any,extraHttpRequestParams?: any): any {
        return this.createProductWithHttpInfo(name, desc,price,code,image, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response;
                }
            });
    }


    public createProductWithHttpInfo(name: any,desc: any, price: any, code: any, image: any,  extraHttpRequestParams?: any): Observable<Response> {
        const path = 'http://localhost:17386/Product/CreateProduct';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); 

       queryParameters.set('name', name);
       queryParameters.set('desc', desc);
       queryParameters.set('price', price);
       queryParameters.set('code', code);
       queryParameters.set('image', image);

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
        ];
        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });

        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        //return 
        var json = this.http.request(path, requestOptions);
        return json;
    }


  public RealizeOrders(id: string,extraHttpRequestParams?: any): any {
        return this.RealizeOrdersWithHttpInfo(id, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response;
                }
            });
    }


    public RealizeOrdersWithHttpInfo(id: any, extraHttpRequestParams?: any): Observable<Response> {
        const path = 'http://localhost:9000/api/realizeOrder';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); 

     //  queryParameters.set('id', id);
        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
        ];
        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });

        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        //return 
        var json = this.http.request(path, requestOptions);
        return json;
    }

//  signUp(user: NewUser): Observable<Response>  {
//     debugger;
// var path = 'localhost:9000/api/sign-up';
//       let headers = new Headers(this.defaultHeaders.toJSON()); 

//        return  this.http.post(path, user, {headers:headers});
//        // return json;
//     }


  //  return this.http
 //   .post('localhost:9000/api/sign-up', user)
 //   .toPromise()
  //  .then(res => res.json().token as any)
    //.catch(this.handleError);
  
  public createCart(data: any ,extraHttpRequestParams?: any): any {
      debugger;
        return this.createCartWithHttpInfo(data, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response;
                }
            });
    }


    public createCartWithHttpInfo(data: any, extraHttpRequestParams?: any): Observable<Response> {
        
         const path = 'http://localhost:9000/api/createCart';
//id: Int, ProductId: Int, Quantity: Int, CartId: Int, Name: String, GrossAmount: Double, UnitAmount: Double, IsPayed: Int
//var data:any ={ProductId:1, Quantity:1, CartId:1, Name:"test", GrossAmount:1, UnitAmount:2, IsPayed:0 };
//var jsonData =  JSON.stringify(data);
debugger;
  let headers = new Headers(this.defaultHeaders.toJSON()); 
       var json =  this.http.post(path, (data), {headers:headers});
        return json;
    }



    

    public getCartByUserId(userId: string, extraHttpRequestParams?: any): any {
        return this.getCartByUserIdWithHttpInfo(userId, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }


    public getCartByUserIdWithHttpInfo(id: any, extraHttpRequestParams?: any): Observable<Response> {
        const path = 'http://localhost:9000/api/getCartByUserId/'+id;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); 

     // queryParameters.set('id', id);
        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
        ];
        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });

        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        //return 
        var json = this.http.request(path, requestOptions);
        return json;
    }



}

