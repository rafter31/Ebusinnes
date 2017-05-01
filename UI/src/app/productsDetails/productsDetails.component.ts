import {Component,  Input} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import {ActivatedRoute} from '@angular/router';
import { DefaultApi } from '../api/api/DefaultApi';
import {Cookie} from 'ng2-cookies/ng2-cookies';

@Component({
    selector: 'productsDetails',
		templateUrl: './productsDetails.component.html',
		styleUrls: ['./productsDetails.component.scss'],
    	providers: [ DefaultApi]
		
})

export class ProductDetailsViewComponent{
    product:any;
    productName :any;
    productPrice :any;
    productDesc :any;
    productImage :any;
    productQuantity:any;
    productId:any;
    quantity:any;


		constructor(private defaultApi: DefaultApi, private route:ActivatedRoute){ 
		}
            public ngOnInit(): void {
			  this.route.queryParams.subscribe(params => {this.getProduct(params['id'] || 0); });
              this.route.queryParams.subscribe(params => {this.productId = (params['id'] || 0); });
		}

		public getProduct(id)
		{
			  this.defaultApi.getProductsById(id).subscribe( pr=> this.fillData(pr) );
		}

        public fillData(product){
            this.productName = product.name;
            this.productPrice = product.price;
            this.productDesc = product.desc;
            this.productImage = product.imageUrl
            this.productQuantity = product.quantity;
        }

        public addToCartStep2(event){
            debugger;
               var quan = parseInt(  this.quantity);
              // var cartId = Cookie.get('LoggedUserCartId');
               Cookie.set('LoggedUserCartId', event.id);
               var data:any ={ProductId:1, Quantity:quan, CartId:event.id, Name: this.productName, GrossAmount:( this.productPrice* quan), UnitAmount: this.productPrice, IsPayed:0 };
               this.defaultApi.addToCart(this.productId, data).subscribe(x => window.location.href = "/cart"); 
        }

        addToCart(){
            debugger;
            var userId = Cookie.get('LoggedUserId');
            this.defaultApi.getCartByUserId(userId).subscribe(cartId => this.addToCartStep2(cartId));
        }

        



	}