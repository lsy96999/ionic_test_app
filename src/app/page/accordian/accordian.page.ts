import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IonAccordionGroup } from '@ionic/angular';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.page.html',
  styleUrls: ['./accordian.page.scss'],
})
export class AccordianPage implements OnInit {
  @ViewChild('accordionGroup', { static: true }) accordionGroup!: IonAccordionGroup;
  @ViewChild('listenerOut',{static: true}) listenerOut!: ElementRef;
  private value = ["first", "second", "third"]
  constructor(){}
  ngOnInit() {
  }

  toggleAccordion = () => {
    const nativeEl = this.accordionGroup;
    if (nativeEl.value === 'second') {
      nativeEl.value = undefined;
    } else {
      nativeEl.value = 'second';
    }
  };
  accordionGroupChange(event: any){
    const nativeEl = this.listenerOut.nativeElement;
    if(!nativeEl){
      return;
    }
    const collapsedItems = this.value.filter(v => v !== event.detail.value)
    const selectedValue = event.detail.value;

    nativeEl.innerText = `
      Expanded: ${selectedValue === undefined ? 'None' : event.detail.value}
      Collapsed: ${collapsedItems.join(', ')}
    `;
  }
}
