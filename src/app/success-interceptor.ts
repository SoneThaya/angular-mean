import { SuccessComponent } from './success/success.component';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import {
  HttpResponse,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpEvent,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable()
export class SuccessInterceptor implements HttpInterceptor {
  constructor(private dialog: MatDialog) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap((evt) => {
        let successMessage = 'Nice';

        if (evt instanceof HttpResponse) {
          if (evt.body && evt.body.message) {
            successMessage = evt.body.message;
            this.dialog.open(SuccessComponent, {
              data: { message: successMessage },
            });
          }
        }
      })
    );
  }
}
