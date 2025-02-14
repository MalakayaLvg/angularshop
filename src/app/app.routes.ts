import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { AuthComponent } from './auth/auth.component';

export const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'auth', component: AuthComponent }
];
