import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NavigatorLayoutComponent} from "@app/navigator/layout";


const routes: Routes = [
  {
    path: '',
    component: NavigatorLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: (): Promise<any> => import('@app/navigator/list').then((modules) => modules.ListModule),
      },

    ],
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavigatorPageRoutingModule {
}
