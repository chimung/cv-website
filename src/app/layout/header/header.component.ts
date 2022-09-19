import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'cv-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild('responsiveMenu', { static: true })
  responsiveMenu!: ElementRef

  isOpenMenu = false;

  constructor() { }

  ngOnInit(): void {
    console.log(this.responsiveMenu)
  }

  openMenu() {
    this.isOpenMenu = true;
  }

  closeMenu() {
    this.isOpenMenu = false;
  }
}
