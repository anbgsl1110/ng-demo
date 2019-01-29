import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LayoutComponent} from "./layout.component";
import {HeaderComponent} from "../header/header.component";
import {TabComponent} from "../../common/tab/tab.component";
import {NgZorroAntdModule} from "ng-zorro-antd";
import {LayoutRouteModule} from "./layout-route.module";

@NgModule({
  declarations: [
    HeaderComponent,
    TabComponent,
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    NgZorroAntdModule.forRoot(),
    LayoutRouteModule,
  ]
})
export class LayoutModule { }
