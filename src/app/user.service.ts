import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { }

  getallprofiles() {
    return this.http.get("http://localhost:4000/api//user/allusers")
  }
}
