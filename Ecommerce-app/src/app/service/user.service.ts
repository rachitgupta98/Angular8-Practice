import { Injectable } from '@angular/core';
import { User } from '../entities/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user:User = new User(false, "");
  constructor() { }
}
