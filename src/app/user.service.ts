import {
  HttpClient,
  HttpHeaders,
  HttpEvent,
  HttpRequest,
} from '@angular/common/http';
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

  getTransferIp() {
    let header = new HttpHeaders().set(
      'auth-token',
      localStorage.getItem('auth-token')
    );
  }

  getallprofiles() {
    return this.http.get(`${this.backendurl}/user/allusers`);
  }

  viewoneprofile(id) {
    let header = new HttpHeaders().set(
      'auth-token',
      localStorage.getItem('auth-token')
    );
    return this.http.get(`${this.backendurl}/user/userdetails/${id}`, {
      headers: header,
    });
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
    let header = new HttpHeaders().set(
      'auth-token',
      localStorage.getItem('auth-token')
    );
    return this.http.post(
      `${this.backendurl}/user/setting`,
      {
        headers: header,
      },
      data
    );
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
    let header = new HttpHeaders().set(
      'auth-token',
      localStorage.getItem('auth-token')
    );
    return this.http.get(`${this.backendurl}/user/details`, {
      headers: header,
    });
  }

  sendinterest(id) {
    let header = new HttpHeaders().set(
      'auth-token',
      localStorage.getItem('auth-token')
    );
    return this.http.get(`${this.backendurl}//user/addinterest/${id}`, {
      headers: header,
    });
  }

  sentinterest() {
    let header = new HttpHeaders().set(
      'auth-token',
      localStorage.getItem('auth-token')
    );
    return this.http.get(`${this.backendurl}//user/sentinterest`, {
      headers: header,
    });
  }
}
