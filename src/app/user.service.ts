import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  backendurltest = "https://demo.rishtaguru.com/api"
  backendurl = "http://localhost:4555/api"

  constructor(public http: HttpClient) { }



  getallprofiles() {
    return this.http.get(`${this.backendurl}/user/allusers`)
  }

  viewoneprofile(id) {
    return this.http.get(`${this.backendurl}/user/details/${id}`)
  }

  //user signup
  usersignup(data) {
    return this.http.post(`${this.backendurl}/user/signup`, data)
  }

  //get drop down data
  getprofilefordd() {
    return this.http.get(`${this.backendurl}/admin/allprofilefor`)
  }
}
