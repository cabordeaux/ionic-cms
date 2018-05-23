import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
//import { UserPage } from '../../pages/user/user';
import { User } from '../../models/user/user';
import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the UserCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-create',
  templateUrl: 'user-create.html',
})
export class UserCreatePage {

  public user: FormGroup;
  public errors: Array<any> =[];
  public errorMessage: string;
  //public user = new User();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private userProvider: UserProvider,
    private formBuilder: FormBuilder

  ) {

    this.user = this.formBuilder.group({
      username: [],
      email: [],
      first_name: [],
      last_name: []
    });
    //Just a test
    //this.createUser();
  }

  response(response: any): void{
    if(response.success === false){
      this.errors =response.error.errors;
      this.errorMessage = response.error.message;
    }

    if(response.success === true){
      console.log('Allright!!!')
      //this.navCtrl.push(UserPage, {id: response._id});
    }
  }

  public createUser(): void {
    this.userProvider.createUser(this.user.value).subscribe(
      //(response)=>{

        (response: any)=>{
          this.response(response);
          //this.navCtrl.push(UserPage, { id: response.user._id });
        }

    );
  }
}
