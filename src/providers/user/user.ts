import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { User } from '../../models/user/user';



/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})

}

@Injectable()
export class UserProvider {

  private url = 'http://localhost:3000/api/users';
  constructor(public http: HttpClient) {

  }

  public getUser(id: string):Observable<User> {
    return this.http.get<User>(`${this.url}/${id}`);
  }
  public getUsers(): Observable<User>{
    return this.http.get<User>(this.url);

  }
  public createUser(user: User ): Observable<User> {
    return this.http.post<User>(this.url,user,httpOptions);

  }
  public updateUser(user: User ): Observable<User> {
    return this.http.post<User>(this.url,user,httpOptions);


  }
  public deleteUser(id: string): Observable<User> {
    return this.http.delete<User>(`${this.url}/${id}`);
  }
}

//public toUserUpdate({
  //this.navCtrl.push(UserUpdatePage, { id: this})
//})
