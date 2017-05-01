import {Component,  Input} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import {ActivatedRoute} from '@angular/router';
import { DefaultApi } from '../api/api/DefaultApi';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Component({
    selector: 'cart',
		templateUrl: './cart.component.html',
		styleUrls: ['./cart.component.scss'],
    	providers: [ DefaultApi]
		
})

export class CartComponent{
   cart:any;
		constructor(private defaultApi: DefaultApi, private route:ActivatedRoute){ 
		}
            public ngOnInit(): void {
              var cartId = Cookie.get('LoggedUserCartId');
			  this.defaultApi.getCartForUser(cartId).subscribe( x=> this.fillCartData( x) );
          
		}

        fillCartData(cart){
            
            this.cart = cart;
        }
		
        removeCartItem(event){
            
          	  this.defaultApi.deleteCartItem(event).subscribe( x=> this.refreshList() );  
            
        }


        RealizeOrders(event){
            this.defaultApi.RealizeOrders('1').subscribe( x=> this.LocalRealizeOrders(x));
         //   this.defaultApi.getCartForUser('1').subscribe( x=> this.fillCartData( x) );
        // Cookie.set('cookieName', 'cookieValue');
        // let myCookie = Cookie.get('cookieName');
        // console.log(myCookie);
        }
       

       LocalRealizeOrders(x){
           debugger;
           var cartId = Cookie.get('LoggedUserCartId');
            this.defaultApi.getCartForUser(cartId).subscribe( x=> this.fillCartData( x) );
       }
       refreshList(){
           debugger;
            var cartId = Cookie.get('LoggedUserCartId');
             this.defaultApi.getCartForUser(cartId).subscribe( x=> this.fillCartData( x) );
       }
	

	}