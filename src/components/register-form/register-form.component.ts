import { Component, ViewChild } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { ToastController } from 'ionic-angular';

import { Account } from '../../models/accounts/account.interface';
// import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-register-form',
  templateUrl: 'register-form.component.html'
})
export class RegisterFormComponent {

  account = {} as Account;

  // @ViewChild('email') user;
  // @ViewChild('password') password;

  constructor(private afAuth: AngularFireAuth, private toast: ToastController) {

  }

  async register() {

    try{
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(this.account.email, this.account.password);
      this.toast.create({
        message: "Account succesfully created!!",
        duration: 3000
      }).present();
      console.log(result);
    } catch(e){
      console.error(e);
      this.toast.create({
        message: e.message,
        duration: 3000
      }).present();
    }

  }
  
}
