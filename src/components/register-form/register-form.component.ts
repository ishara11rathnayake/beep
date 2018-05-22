import { Component, ViewChild, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../providers/auth/auth.service';
import { LoginResponse } from '../../models/login/login-response.interface';

import { Account } from '../../models/accounts/account.interface';
// import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-register-form',
  templateUrl: 'register-form.component.html'
})
export class RegisterFormComponent {

  account = {} as Account;
  @Output() resgisterStatus: EventEmitter<LoginResponse>;

  // @ViewChild('email') user;
  // @ViewChild('password') password;

  constructor(private auth: AuthService) {
    this.resgisterStatus = new EventEmitter <LoginResponse>();
  }

  async register() {

    try{
      const result = await this.auth.createUserWithEmailAndPassword(this.account);
      this.resgisterStatus.emit(result);
    } catch(e){
      console.error(e);
      this.resgisterStatus.emit(e);
    }

  }
  
}
