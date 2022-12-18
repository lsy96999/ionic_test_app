import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert-badge',
  templateUrl: './alert-badge.page.html',
  styleUrls: ['./alert-badge.page.scss'],
})
export class AlertBadgePage implements OnInit {
  handlerMessage = ''
  roleMessage = ''
  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async presentAlert(){
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: ['OK']
    })

  await alert.present();
  }

  async presentAlert2(){
    const alert = await this.alertCtrl.create({
      header: 'Alert!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: ()=>{
            this.handlerMessage = 'Alert Canceled'
          }
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: ()=>{
            this.handlerMessage = 'Alert confirmed'
          }
        }
      ]
    })

    await alert.present();

    const {role} = await alert.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`
  }

  async presentInputAlert(){
    const alert = await this.alertCtrl.create({
      header: 'Please enter yout info',
      buttons: ['OK'],
      inputs: [
      {placeholder: 'Name'},
      {placeholder: 'Nickname(max 8 characters)',
        attributes:{
          maxlength: 8
        },
      },
      {type: 'number',
      placeholder: 'Age',
      min: 1,
      max: 100},
      {type: 'textarea',
      placeholder: 'A little about tourself'}
      ]
    })
    await alert.present();
    const some = await alert.onDidDismiss();
    console.log(some)
  }

  async presentRadio(){
    const alert = await this.alertCtrl.create({
      header: 'Select your favorite color',
      buttons: ['OK'],
      inputs: [
        {
          label: 'Red',
          type: 'radio',
          value: 'red'
        },
        {
          label: 'Blue',
          type: 'radio',
          value: 'blue',
        },
        {
          label: 'Green',
          type: 'radio',
          value: 'green'
        }
      ]
    })
    await alert.present();
  }
}
