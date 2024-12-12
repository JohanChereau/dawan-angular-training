import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../environments/environment';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { catchError, throwError } from 'rxjs';

export const backendInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url.startsWith('/')) {
    req = req.clone({
      url: environment.API_URL + req.url,
    });
  }
  return next(req);
};

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = inject(AuthService).token;
  if (req.url.startsWith(environment.API_URL) && token) {
    req = req.clone({
      setHeaders: {
        Authorization: 'Bearer ' + token,
      },
    });
  }
  return next(req);
};

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(AuthService);
  if (req.url.startsWith(environment.API_URL)) {
    return next(req).pipe(
      catchError((err) => {
        if (err.status === 401) {
          auth.logout();
        }
        return throwError(() => err);
      })
    );
  }
  return next(req);
};
