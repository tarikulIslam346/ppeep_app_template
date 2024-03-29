import { Component, OnDestroy, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { navItems } from '../../_nav';
import { navItemsFoodXpress } from '../../_nav_foodexpress';
//import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnDestroy {
  public navItems:any;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement;
  foodnav: boolean = false;
  constructor(
    @Inject(DOCUMENT) _document?: any,
   // public router: Router,
    ){
   this.navItems = navItems;
    //else this.navItems = navItems;

    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = _document.body.classList.contains('sidebar-minimized');
    });
    this.element = _document.body;
    this.changes.observe(<Element>this.element, {
      attributes: true,
      attributeFilter: ['class']
    });
  }

  gotoDashBoard(){

  }

  changeNavigation(){
    //this.router.navigate['foodexpress'];
    this.navItems = navItemsFoodXpress;
    this.foodnav = true;
    //localStorage.setItem('foodNav','true');
  }

  ngOnDestroy(): void {
    this.changes.disconnect();
  }
}
