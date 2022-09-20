import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NavigationStart, Router} from "@angular/router";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'cv-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  destroy$: Subject<void> = new Subject<void>();

  @ViewChild('responsiveMenu', { static: true })
  responsiveMenu!: ElementRef

  isOpenMenu = false;

  constructor(
    private router: Router
  ) { }


  ngOnInit(): void {
    this.router.events
      .pipe(takeUntil(this.destroy$))
      .subscribe((event) => {
        if (event instanceof NavigationStart) {
          // close menu
          this.closeMenu();
        }
      })
  }

  ngOnDestroy() {
    this.destroy$.next();
  }

  openMenu() {
    this.isOpenMenu = true;
  }

  closeMenu() {
    this.isOpenMenu = false;
  }
}
