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
import { log } from 'util';
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit, OnInit {
  isViewInitialized = false;
  opened = false;
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
  toggleMenu() {
    console.log(this.opened);

    this.opened = !this.opened;
  }
  ngAfterViewInit() {
    this.isViewInitialized = true;
    this.changeDetector.detectChanges();
  }

  isLinkActive(rla: RouterLinkActive): boolean {
    const routerLink = rla.linksWithHrefs.first;

    return this.router.isActive(routerLink.urlTree, false);
  }
  openNav() {
    document.getElementById('mySidenav').style.width = '250px';

    // document.querySelector('span#open_menu').addEventListener('click',
    //   () => {
    //     this.openNav();
    //   });
  }

  closeNav() {
    document.getElementById('mySidenav').style.width = '0';

    // document.querySelector('.closebtn').addEventListener('click',
    //   () => {
    //     this.closeNav();
    //   });
  }
  // horizontal menu



}
