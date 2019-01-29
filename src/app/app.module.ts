import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import {InitGuardService} from "./services/init-guard/init-guard.service";
import {LocalStorageService} from "./services/local-storage/local-storage.service";
import {SetupModule} from "./pages/setup/setup.module";
import {SettingModule} from "./pages/setting/setting.module";
import {SimpleReuseStrategy} from "./services/SimpleReuseStrategy";
import {RouteReuseStrategy} from "@angular/router";
import {LayoutModule} from "./layout/layout/layout.module";

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule.forRoot(),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SetupModule,
    SettingModule,
    LayoutModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    { provide: RouteReuseStrategy, useClass: SimpleReuseStrategy },
    LocalStorageService,
    InitGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
