import {Component,  Input} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import {ActivatedRoute} from '@angular/router';
import { DefaultApi } from '../api/api/DefaultApi';


declare var map: any;
declare var ol: any;
@Component({
    selector: 'product',
		templateUrl: './product.component.html',
		styleUrls: ['./product.component.scss'],
    	providers: [ DefaultApi]
		
})

export class ProductComponent{
	products:any;
	categories:any;

	

		constructor(private defaultApi: DefaultApi, private route:ActivatedRoute){ 
		//	communicationService.sidebar$.subscribe(x=> {this.receiveAction(x);});
		
		}

		public ngOnInit(): void {
			
			  this.route.queryParams.subscribe(params => {this.getProducts(params['category'] || 0); });
			
		}

		public getProducts(cat)
		{
			  
			  //this.defaultApi.getAllProducts(cat).subscribe( prod => this.products = prod );
			  this.defaultApi.getProductsByCategory(cat).subscribe( prod => this.products = prod );
			  this.defaultApi.getAllCategories().subscribe( cat=> this.categories = cat );

		}
	

	}