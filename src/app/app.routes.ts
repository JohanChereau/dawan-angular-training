import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Routes,
} from '@angular/router';
import { ProductService } from '../services/product.service';
import { authGuard } from '../tools/auth.guard';
import { catchError, of } from 'rxjs';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('../pages/home/home.component').then((m) => m.HomeComponent),
    resolve: {
      products: () => inject(ProductService).all(),
    },
  },
  {
    path: 'register',
    loadComponent: () =>
      import('../pages/register/register.component').then(
        (m) => m.RegisterComponent
      ),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('../pages/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'editor/:id',
    loadComponent: () =>
      import('../pages/product-editor/product-editor.component').then(
        (m) => m.ProductEditorComponent
      ),
    canMatch: [authGuard],
    resolve: {
      product: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
        const id = +(route.paramMap.get('id') || 0);
        return id
          ? inject(ProductService)
              .byId(id)
              .pipe(catchError(() => of(undefined)))
          : undefined;
      },
    },
  },
];
