import { Component } from '@angular/core';
import {ProductService} from './products/product.service';

@Component({
    selector: 'pm-app',
    template: `        
        <router-outlet></router-outlet>
    `,
    providers: [ProductService]
})
export class AppComponent { }
