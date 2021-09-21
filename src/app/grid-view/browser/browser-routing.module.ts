import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserComponent } from './browser/browser.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'browser',
    pathMatch: 'full'
  },
  {
    path: 'browser',
    component: BrowserComponent
  },
  {
    path: 'grid',
    loadChildren: () => import('../grid/grid.module').then(m => m.GridModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrowserRoutingModule { }
