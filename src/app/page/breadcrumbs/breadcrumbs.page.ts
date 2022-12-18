import { Component, OnInit, ViewChild } from '@angular/core';
import { Event } from '@angular/router';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.page.html',
  styleUrls: ['./breadcrumbs.page.scss'],
})
export class BreadcrumbsPage implements OnInit {

  @ViewChild('popover') popover: any;
  isOpen = false;
  collapsedBreadcrumbs: HTMLIonBreadcrumbElement[] = [];

  maxBreadcrumbs = 4
  constructor() { }

  ngOnInit() {
  }
  expandBreadcrumbs(){
    this.maxBreadcrumbs = 0;
  }

  async presentPopover(e: any) {
    console.log(e)
    this.collapsedBreadcrumbs = e.detail.collapsedBreadcrumbs;
    this.popover.event = e;
    this.isOpen = true;
  }

}
