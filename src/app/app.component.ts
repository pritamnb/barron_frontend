import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute,
  Router,
  RouterLinkActive,
  Routes
} from '@angular/router';
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnInit {
  isViewInitialized = false;

  navLinks = [
    {
      path: 'wordlist', label: 'wordlist'
    },
    {
      path: 'cards', label: 'cards'
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.isViewInitialized = true;
    this.changeDetector.detectChanges();
  }

  isLinkActive(rla: RouterLinkActive): boolean {
    const routerLink = rla.linksWithHrefs.first;

    return this.router.isActive(routerLink.urlTree, false);
  }
}
