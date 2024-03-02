import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CataloguePage } from './pages/catalogue/catalogue.component';
import { LoginPage } from './pages/login/login.component';

const routes: Routes = [
  {
    path: 'catalogue',
    component: CataloguePage
  },
  {
    path: 'login',
    component: LoginPage
  },
  { path: '',   redirectTo: '/catalogue', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
