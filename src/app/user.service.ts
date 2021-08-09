import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  backendurl = 'https://demo.rishtaguru.com/api';
  backendurltest = 'http://localhost:4555/api';
  backendurlnew = 'http://3.109.48.14/api/api';
  userauth = false;
  loginedinuserid;

  constructor(public http: HttpClient) {
    const getid = localStorage.getItem('id');
    if (getid) {
      this.loginedinuserid = getid;
    }
  }
  getallprofiles() {
    return this.http.get(`${this.backendurl}/user/allusers`);
  }

  viewoneprofile(id) {
    return this.http.get(`${this.backendurl}/user/details/${id}`);
  }

  //user signup
  usersignup(data) {
    return this.http.post(`${this.backendurl}/user/signup`, data);
  }
  //send otp
  sendotp(data) {
    return this.http.post(`${this.backendurl}/user/sendotp`, data);
  }

  verifyotp(data) {
    return this.http.post(`${this.backendurl}/user/verifyotp`, data);
  }

  //add other info
  addotheruserdetails(id, data) {
    return this.http.post(`${this.backendurl}/user/setting/${id}`, data);
  }

  //login
  login(data) {
    return this.http.post(`${this.backendurl}/user/login`, data);
  }

  //get drop down data
  getprofilefordd() {
    return this.http.get(`${this.backendurl}/admin/allprofilefor`);
  }

  //add image
  addimage(id, data) {
    return this.http.post(`${this.backendurl}/user/uploadimage/${id}`, data);
  }

  upload(id, file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('Photo1', file);

    const req = new HttpRequest(
      'POST',
      `${this.backendurl}/user/uploadimage/${id}`,
      formData
    );

    return this.http.request(req);
  }

  //rest api country
  getallflags() {
    return this.http.get(`${this.backendurl}/user/countrywithflag`);
  }

  getlogo() {
    return this.http.get(`${this.backendurl}/admin/viewweblogo/Two`);
  }

  //my profile
  getmyprofiledetail() {
    if (this.loginedinuserid !== undefined) {
      console.log(
        this.loginedinuserid + 'This is to check if it is null or not'
      );
      return this.http.get(
        `${this.backendurl}/user/details/${this.loginedinuserid}`
      );
    }
  }
}
