import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
export const ROUTES: Routes = [
  { path: 'page1', outlet:'layout-content', loadChildren: '../../pages/page2/page2.module#Page2Module', data: { title: '页面2', isRemove: true}},
  { path: 'page2', outlet:'layout-content', loadChildren: '../../pages/page2/page2.module#Page2Module', data: { title: '页面2', isRemove: true}},
  { path: 'page3', outlet:'layout-content', loadChildren: '../../pages/page3/page3.module#Page3Module', data: { title: '页面3', isRemove: true}},
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
