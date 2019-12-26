import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { LoaderService } from './loader.service';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient, private loaderService: LoaderService) { }

  get(endPoint: string, data: any = {}) {
    this.loaderService.updateLoader();
    return this.http.get(endPoint).pipe(
      map(res => {
        if (res) {
          this.loaderService.closeLoader();
        }
        return res;
      }),
      catchError((error: any) => {
        this.loaderService.closeLoader();
        return throwError(error);
      })
    );
  }

  post(endPoint: string, data: any = {}): Observable<any> {
    this.loaderService.show();
    const body = JSON.stringify(data);
    return this.http.post(endPoint, body).pipe(
      map(res => {
        if (res) {
          this.loaderService.closeLoader();
        }
        return res;
      }),
      catchError((error: any) => {
        this.loaderService.closeLoader();
        return throwError(error);
      })
    );
  }

  put(endPoint: string, data: any = {}): Observable<any> {
    this.loaderService.updateLoader();
    const body = JSON.stringify(data);
    return this.http.put(endPoint, body).pipe(
      map(res => {
        if (res) {
          // alert('In put');
          this.loaderService.closeLoader();
        }
        return res;
      }),
      catchError((error: any) => {
        this.loaderService.closeLoader();
        // alert('Error');
        return throwError(error);
      })
    );
  }

  delete(endPoint: string, data: any = {}): Observable<any> {
    this.loaderService.updateLoader();
    // this.loaderService.show();
    // this.loaderService.updateLoader();
    const headers = { 'Content-Type': 'application/json' };
    const body = {
      headers,
      body: JSON.stringify(data)
    };
    return this.http.delete(endPoint, body).pipe(
      map(res => {
        if (res) {
          this.loaderService.closeLoader();
          //  this.loaderService.hide();
          // this.loaderService.closeLoader();
        }
        return res;
      }),
      catchError((error: any) => {
        // this.loaderService.hide();
        // this.loaderService.closeLoader();
        this.loaderService.closeLoader();
        return throwError(error.error.error);
      })
    );
  }
}
