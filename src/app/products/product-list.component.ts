import {Component, OnInit} from '@angular/core';
import {IProduct} from './product';
import {ProductService} from './product.service';
@Component({
    // selector: "pm-products",
    templateUrl: "app/products/product-list.component.html"
})
export class ProductListComponent implements OnInit {    
    pageTitle: string = 'Page Title';
    showImage: boolean = false;
    listFilter: string;
    errorMessage: string;
    products: any[];

    constructor(private _productService: ProductService){

    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this._productService.getProducts()
        .subscribe(products => this.products = products,
                    error => this.errorMessage = <any>error);
    }
}