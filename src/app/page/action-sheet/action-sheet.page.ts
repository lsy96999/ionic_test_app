import { Component, OnInit } from '@angular/core';

import {ActionSheetController} from '@ionic/angular'

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {
  result = ''
  result2 = ''
  constructor(private actionSheetController: ActionSheetController) { }

  ngOnInit() {
  }

  async presentActionSheet(){
    console.log('1111')
    const actionSheet = await this.actionSheetController.create({
      header: 'Example Header',
      subHeader: 'Example subheader',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          data: {
            action: 'delete'
          }
        },
        {
          text: 'Share',
          data: {
            action: 'share'
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          data: {
            action: 'cancel'
          }
        }
      ]
    });
    await actionSheet.present();

    const result = await actionSheet.onDidDismiss();
    this.result = JSON.stringify(result)
  }
  async presentActionSheet2(){
    console.log('2222')
    const actionSheet2 = await this.actionSheetController.create({
      header: 'Example Header',
      subHeader: 'Example subheader',
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          data: {
            action: 'delete'
          }
        },
        {
          text: 'Share',
          data: {
            action: 'share'
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          data: {
            action: 'cancel'
          }
        }
      ]
    });
    await actionSheet2.present();

    const result = await actionSheet2.onDidDismiss();
    this.result2 = JSON.stringify(result)
  }

}
