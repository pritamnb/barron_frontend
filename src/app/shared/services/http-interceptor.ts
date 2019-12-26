import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
// import { UserService } from './user.service';
// import { ToasterService } from './toastr.service';

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,

    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token: string = localStorage.getItem('token');
    // console.log(token);
    const plantoken: string = localStorage.getItem('plantoken');

    const forgotPasswordToken = localStorage.getItem('forgot-password-token');
    // if (token && plantoken) {
    //   request = request.clone({
    //     headers: request.headers.set('planToken', 'bearer ' + plantoken)
    //   });
    //   request = request.clone({
    //     headers: request.headers.set('Authorization', 'bearer ' + token)
    //   });
    // }

    // if (token) {
    //   request = request.clone({
    //     headers: request.headers.set('Authorization', 'bearer ' + token)
    //   });
    // }
    // if (forgotPasswordToken) {
    //   request = request.clone({
    //     headers: request.headers.set('Authorization', 'bearer ' + forgotPasswordToken)
    //   });
    // }
    if (!request.headers.has('Content-Type')) {
      request = request.clone({
        headers: request.headers.set('Content-Type', 'application/json')
      });
    }

    request = request.clone({
      headers: request.headers.set('Accept', 'application/json')
    });

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          // console.log('event--->>>', event);
        }
        return event;
      }),
      catchError((err: any, caught) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            // this.toasterService.getError(
            // tslint:disable-next-line: max-line-length
            //   'You have been logged out because the admin has changed your privileges. Please login again to access the platform with new privileges.',
            //   ''
            // );
            // this.userService.logout();
            console.log('Something went wrong');

          }
        }
        return throwError(err.error.error);
      })
    );
  }
}
