import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from "@app/ui/theme/layout";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: (): Promise<any> => import('@app/home/page').then((modules) => modules.HomePageModule),
      },
      {
        path: 'navigator',
        loadChildren: (): Promise<any> => import('@app/navigator/page').then((modules) => modules.NavigatorPageModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
