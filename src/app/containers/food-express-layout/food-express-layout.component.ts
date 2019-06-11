import { Component, Inject, OnDestroy } from '@angular/core';
import { navItemsFoodXpress } from '../../_nav_foodexpress';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-food-express-layout',
  templateUrl: './food-express-layout.component.html',
  styleUrls: ['./food-express-layout.component.scss']
})
export class FoodExpressLayoutComponent implements OnDestroy {


  public navItems:any;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement;
  foodnav: boolean = false;
  constructor(
    @Inject(DOCUMENT) _document?: any,
   // public router: Router,
    ){
   this.navItems = navItemsFoodXpress;
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
