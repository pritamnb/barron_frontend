import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  public isShow: boolean;
  public isShow$: BehaviorSubject<boolean>;
  public loader: number;
  public loader$: BehaviorSubject<number>;
  constructor() {
    this.isShow = true;
    this.loader = 0;
    this.loader$ = new BehaviorSubject(this.loader);

    this.isShow$ = new BehaviorSubject(this.isShow);
    this.loader$.subscribe(res => {
      if (res > 0) {
        this.show();
      } else {
        this.hide();
      }
    });
  }

  getLoader() {
    return this.loader$;
  }
  updateLoader() {
    this.loader++;
    this.loader$.next(this.loader);
  }
  closeLoader() {
    this.loader--;
    this.loader$.next(this.loader);
  }
  show() {
    this.isShow = true;
    this.isShow$.next(this.isShow);
  }

  hide() {
    this.isShow = false;
    this.isShow$.next(this.isShow);
  }

  getState() {
    return this.isShow$;
  }

  resetLoader() {
    this.loader = 0;
    this.loader$.next(this.loader);
  }
}
