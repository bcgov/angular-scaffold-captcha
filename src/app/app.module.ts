import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { SearchBoxDirective } from './search-box/search-box.directive';
import { GeneralDataService } from 'app/general-data.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminModule } from 'app/admin/admin.module';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { CaptchaDemoComponent } from './captcha/captcha.component';
// import { CaptchaComponent } from "mygovbc-captcha-widget/component";
declare var require: any;
// let CaptchaComponent = require("mygovbc-captcha-widget/component").CaptchaComponent;

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    SearchBoxDirective,
    DashboardComponent,
    BreadcrumbComponent,
    CaptchaDemoComponent,
    // CaptchaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NgbModule,
    AdminModule,
  ],
  providers: [GeneralDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
