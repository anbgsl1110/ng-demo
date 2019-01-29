import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
export const ROUTES: Routes = [
  { path: 'page1', loadChildren: '../../pages/page1/page1.module#Page1Module', data: { title: '页面2', isRemove: true}, outlet:'popup'},
  { path: 'page2', loadChildren: '../../pages/page2/page2.module#Page2Module', data: { title: '页面2', isRemove: true}, outlet:'popup'},
  { path: 'page3', loadChildren: '../../pages/page3/page3.module#Page3Module', data: { title: '页面3', isRemove: true}, outlet:'popup'},
];
@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  exports: [
    RouterModule,
  ]
})
export class LayoutRouteModule {
}
