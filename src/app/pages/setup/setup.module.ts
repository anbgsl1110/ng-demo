import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {NgZorroAntdModule} from "ng-zorro-antd";
import {SetupComponent} from "./setup.component";

@NgModule({
  declarations: [SetupComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
  ]
})
export class SetupModule { }
