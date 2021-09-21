import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'grid-view',
    pathMatch: 'full'
  },
  {
    path: 'grid-view',
    loadChildren: () => import('./grid-view/grid-view.module').then(m => m.GridViewModule)
  }
]
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
