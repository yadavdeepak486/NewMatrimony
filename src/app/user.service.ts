import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  backendurltest = 'https://demo.rishtaguru.com/api';
  backendurl = 'http://localhost:4555/api';
  userauth = false;

  constructor(public http: HttpClient) {}
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
  allcountryfromrest() {
    return this.http.get(`https://restcountries.eu/rest/v2/all`);
  }
}
