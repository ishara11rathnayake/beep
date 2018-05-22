import { Component, EventEmitter, Output } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../providers/auth/auth.service';

import { Account } from '../../models/accounts/account.interface';
import { LoginResponse } from '../../models/login/login-response.interface';

/**
 * Generated class for the LoginFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-login-form',
  templateUrl: 'login-form.component.html'
})
export class LoginFormComponent {

  account = {} as Account;   
  @Output() loginStatus: EventEmitter<LoginResponse>;

  constructor(private auth: AuthService, private navCtrl: NavController) {
    this.loginStatus = new EventEmitter<LoginResponse>();
  }

  async login(){

    const loginResponse = await this.auth.signInWithEmailAndPassword(this.account);
    this.loginStatus.emit(loginResponse);
    // try{
    //   const result: LoginResponse = { 
    //     result: await this.afAuth.auth.signInWithEmailAndPassword(this.account.email, this.account.password)
    //   }
    //   this.loginStatus.emit(result);
    // }
    // catch(e){
    //   console.error(e);

    //   const error: LoginResponse = {
    //     error: e
    //   }
    //   this.loginStatus.emit(error);

    // }
  }

  // navigateToPage(pageName: string){
  //   pageName === 'TabsPage' ? this.navCtrl.setRoot(pageName) : this.navCtrl.push(pageName);
  // }

  navigateToRegisterPage(){
    this.navCtrl.push('RegisterPage');
  }

}
