import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent }  from './app.component';
import {ProductListComponent} from './products/product-list.component';
import { FormsModule } from '@angular/forms';
import { ProductDetailComponent } from "./products/product-detail.component";

import {MaterialModule} from '@angular/material';

@NgModule({
  imports: [ BrowserModule, 
            FormsModule, 
            HttpModule,
            MaterialModule,           
            RouterModule.forRoot([
            { path: 'products', component: ProductListComponent },
            { path: 'product/:id', component: ProductDetailComponent },
            { path: '', redirectTo: 'products', pathMatch: 'full' },
            { path: '**', redirectTo: 'products', pathMatch: 'full' }
          ])
     ],
  declarations: [ AppComponent, ProductListComponent, ProductDetailComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
