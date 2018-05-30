import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Md5 } from 'ts-md5/dist/md5'

import { UserProvider } from '../../providers/user/user';
import { User } from '../../models/user/user';

/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  public user: User;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private userProvider: UserProvider,
    //private ts
  ) {
    this.getUser(this.navParams.data.id);
  }

  private getUser(id: string): void{
    this.userProvider.getUser(id).subscribe(
      (response:any)=>{
        this.user = response.user;
        this.user.gravatarUrl = 'https://www.gravatar.com/avatar'
        +Md5.hashStr(this.user.email)
        +'?d=mm&s=512'
      }
    );
  }
  }


