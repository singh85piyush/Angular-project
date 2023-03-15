import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NatixisService } from './natixis.service';
import { ProductComponent } from './product/product.component';
import { UserProductService } from './user-product.service';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ProductComponent
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [UserProductService,NatixisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
