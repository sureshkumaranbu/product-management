import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
    private _productUrl = 'api/products/products.json';
    //private _productUrl = 'https://holidayapi.com/v1/holidays?country=US&year=2016&key=d39e8157-5d9d-4196-a5dd-310c01d59229';
    constructor(private _http: Http){}
    getProducts(): Observable <any[]> {
        return this._http.get(this._productUrl)
            .map((response: Response)=> <any[]> response.json())
            .do(data => console.log('All: '+JSON.stringify(data)))
            .catch(this.handleError);
    
    }
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server Error');
    }
}