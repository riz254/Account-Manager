import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CustomerModule } from './customer/customer.module'; // ✅ Import CustomerModule

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CustomerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
