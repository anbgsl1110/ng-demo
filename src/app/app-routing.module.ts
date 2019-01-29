import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SetupComponent} from "./pages/setup/setup.component";
import {LayoutComponent} from "./layout/layout/layout.component";

const routes: Routes = [
  { path: 'setup', component: SetupComponent },
  { path: '', redirectTo: '/setup', pathMatch: 'full'},
  { path: 'main', component: LayoutComponent },
  { path: 'setting', redirectTo: '/setting', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash:true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
