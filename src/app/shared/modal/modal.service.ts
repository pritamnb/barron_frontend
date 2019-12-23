import {
  Injectable, ViewContainerRef, Injector, ComponentFactoryResolver,
  ComponentFactory, ComponentRef
} from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private vcRef: ViewContainerRef;
  private injector: Injector;
  public activeInstances = 0;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  registerViewcontainerRef(vcRef: ViewContainerRef): void {
    this.vcRef = vcRef;
  }

  registerInjector(injector: Injector): void {
    this.injector = injector;
  }

  createFromFactory<T>(componentFactory: ComponentFactory<T>, parameter?: Object): Observable<ComponentRef<T>> {
    const componentRef$ = new ReplaySubject();
    const childInjector = Injector.create({ providers: [], parent: this.injector });
    // console.log(this.vcRef);
    const componentRef = this.vcRef.createComponent(componentFactory, 0, childInjector);
    Object.assign(componentRef.instance, parameter);
    this.activeInstances++;
    componentRef.instance['destroy'] = () => {
      this.activeInstances--;
      componentRef.destroy();
    };
    componentRef$.next(componentRef);
    componentRef$.complete();
    return componentRef$.asObservable() as Observable<ComponentRef<T>>;
  }

}
