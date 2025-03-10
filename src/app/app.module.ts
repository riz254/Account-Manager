import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CustomerModule } from './customer/customer.module';
import { LayoutComponent } from './components/layout/layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component'; // ✅ Import CustomerModule

@NgModule({
  declarations: [AppComponent, LayoutComponent, SidebarComponent, NavbarComponent],
  imports: [BrowserModule, AppRoutingModule, CustomerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
