import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
    let header = new HttpHeaders().set(
      'auth-token',
      localStorage.getItem('auth-token')
    );
    return this.http.get(`${this.backendurl}/user/allusers`, {
      headers: header,
    });
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

  viewprofileadmin(id) {
    return this.http.get(`${this.backendurl}/user/otheruserdetails/${id}`);
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
  addotheruserdetails(data) {
    let header = new HttpHeaders().set(
      'auth-token',
      localStorage.getItem('auth-token')
    );
    return this.http.post(`${this.backendurl}/user/setting`, data, {
      headers: header,
    });
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

  upload(data) {
    const formData: FormData = new FormData();

    formData.append('Photo1', data.Photo1);
    formData.append('Photo2', data.Photo2);
    formData.append('Photo3', data.Photo3);
    let header = new HttpHeaders().set(
      'auth-token',
      localStorage.getItem('auth-token')
    );
    const req = new HttpRequest(
      'POST',
      `${this.backendurl}/user/uploadimage`,
      formData,
      {
        headers: header,
      }
    );
      console.log(req)
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
    return this.http.get(`${this.backendurl}/user/sentinterest`, {
      headers: header,
    });
  }

  receivedinterest() {
    let header = new HttpHeaders().set(
      'auth-token',
      localStorage.getItem('auth-token')
    );
    return this.http.get(`${this.backendurl}/user/recievedinterest`, {
      headers: header,
    });
  }

  acceptinterest(id) {
    let header = new HttpHeaders().set(
      'auth-token',
      localStorage.getItem('auth-token')
    );
    return this.http.get(`${this.backendurl}/user/acceptInterest/${id}`, {
      headers: header,
    });
  }

  rejectinterest(id) {
    let header = new HttpHeaders().set(
      'auth-token',
      localStorage.getItem('auth-token')
    );
    return this.http.get(`${this.backendurl}/user/rejectInterest/${id}`, {
      headers: header,
    });
  }

  addtoshortlist(id) {
    let header = new HttpHeaders().set(
      'auth-token',
      localStorage.getItem('auth-token')
    );
    return this.http.get(`${this.backendurl}/user/addshortlist/${id}`, {
      headers: header,
    });
  }

  myshortlist() {
    let header = new HttpHeaders().set(
      'auth-token',
      localStorage.getItem('auth-token')
    );
    return this.http.get(`${this.backendurl}/user/allshortlist`, {
      headers: header,
    });
  }

  addviewprofile(id) {
    let header = new HttpHeaders().set(
      'auth-token',
      localStorage.getItem('auth-token')
    );
    return this.http.get(`${this.backendurl}/user/addprofileview/${id}`, {
      headers: header,
    });
  }

  showmyprofileviewedby() {
    let header = new HttpHeaders().set(
      'auth-token',
      localStorage.getItem('auth-token')
    );
    return this.http.get(`${this.backendurl}/user/myprofileviewedby`, {
      headers: header,
    });
  }

  sendphotoreq(id) {
    let header = new HttpHeaders().set(
      'auth-token',
      localStorage.getItem('auth-token')
    );
    return this.http.get(`${this.backendurl}/user/addphotoreq/${id}`, {
      headers: header,
    });
  }

  mysentphotoreq() {
    let header = new HttpHeaders().set(
      'auth-token',
      localStorage.getItem('auth-token')
    );
    return this.http.get(`${this.backendurl}/user/sentphotoreq`, {
      headers: header,
    });
  }

  myreceivedphotoreq() {
    let header = new HttpHeaders().set(
      'auth-token',
      localStorage.getItem('auth-token')
    );
    return this.http.get(`${this.backendurl}/user/recievedphotoreq`, {
      headers: header,
    });
  }

  createchatroom(id) {
    let header = new HttpHeaders().set(
      'auth-token',
      localStorage.getItem('auth-token')
    );
    return this.http.get(`${this.backendurl}/user/addchatroom/${id}`, {
      headers: header,
    });
  }

  mychatroom() {
    let header = new HttpHeaders().set(
      'auth-token',
      localStorage.getItem('auth-token')
    );
    return this.http.get(`${this.backendurl}/user/mychatroom`, {
      headers: header,
    });
  }

  sendmsg(data, id, rid) {
    let header = new HttpHeaders().set(
      'auth-token',
      localStorage.getItem('auth-token')
    );
    return this.http.post(
      `${this.backendurl}/user/addchat/${id}/${rid}`,
      data,
      {
        headers: header,
      }
    );
  }

  chatsroom(id) {
    return this.http.get(`${this.backendurl}/user/chatroom/${id}`);
  }

  getplan(id) {
    return this.http.get(`${this.backendurl}/admin/viewoneplan/${id}`);
  }

  getfiltereduser(data) {
    let header = new HttpHeaders().set(
      'auth-token',
      localStorage.getItem('auth-token')
    );
    return this.http.post(`${this.backendurl}/user/filtereduser`, data, {
      headers: header,
    });
  }

  finduser(data) {
    return this.http.post(`${this.backendurl}/user/finduser`, data);
  }

  resetpassword(data) {
    return this.http.post(`${this.backendurl}/user/resetpassword`, data);
  }

  getmyip() {
    return this.http.get(
      `https://api.ipfind.com/me?auth=b4de4aba-d000-46f8-9ba0-2196c9b25ba6`
    );
  }

  //delete short list
  removeshortlist(id) {
    let header = new HttpHeaders().set(
      'auth-token',
      localStorage.getItem('auth-token')
    );
    return this.http.get(`${this.backendurl}/user/deleteshortlist/${id}`, {
      headers: header,
    });
  }

  getallpaymentlinks() {
    return this.http.get(`${this.backendurl}/admin/alllinks`);
  }

  makepaymentrequest(planId, userId) {
    return this.http.get(
      `${this.backendurl}/admin/makepayment/${planId}/${userId}`
    );
  }

  rapayorder(planId,rate) {
    let header = new HttpHeaders().set(
      'auth-token',
      localStorage.getItem('auth-token')
    );
    return this.http.get(`${this.backendurl}/admin/rapay/${planId}/${rate}`, {
      headers: header,
    });
  }

  rapaysuccesscheck(data, id) {
    let header = new HttpHeaders().set(
      'auth-token',
      localStorage.getItem('auth-token')
    );
    return this.http.post(
      `${this.backendurl}/admin/rapaysuccesscheck/${id}`,
      data,
      {
        headers: header,
      }
    );
  }

  // delete photorequest
  rejectphotoreq(id) {
    let header = new HttpHeaders().set(
      'auth-token',
      localStorage.getItem('auth-token')
    );
    return this.http.get(`${this.backendurl}/user/rejectphotoreq/${id}`, {
      headers: header,
    });
  }

  unblockprofile(id) {
    let header = new HttpHeaders().set(
      'auth-token',
      localStorage.getItem('auth-token')
    );
    return this.http.get(`${this.backendurl}/user/unblockprofile/${id}`, {
      headers: header,
    });
  }

  blockuser(id) {
    let header = new HttpHeaders().set(
      'auth-token',
      localStorage.getItem('auth-token')
    );
    return this.http.get(`${this.backendurl}/user/blockuser/${id}`, {
      headers: header,
    });
  }

  unblockuser(id) {
    let header = new HttpHeaders().set(
      'auth-token',
      localStorage.getItem('auth-token')
    );
    return this.http.get(`${this.backendurl}/user/unblockuser/${id}`, {
      headers: header,
    });
  }

  allblockedusersbyme() {
    let header = new HttpHeaders().set(
      'auth-token',
      localStorage.getItem('auth-token')
    );
    return this.http.get(`${this.backendurl}/user/allblockedusersbyme`, {
      headers: header,
    });
  }

  reportuser(id) {
    let header = new HttpHeaders().set(
      'auth-token',
      localStorage.getItem('auth-token')
    );
    return this.http.get(`${this.backendurl}/user/reportuser/${id}`, {
      headers: header,
    });
  }

  addviewedaddress(data,id){
    let header = new HttpHeaders().set(
      'auth-token',
      localStorage.getItem('auth-token')
    );
    return this.http.post(`${this.backendurl}/user/addviewedaddress/${id}`,data, {
      headers: header,
    });
  }

  sendmail(data,id) {
    return this.http.post(`${this.backendurl}/user/sendmail/${id}`, data);
  }

  myviewedaddress() {
    let header = new HttpHeaders().set(
      'auth-token',
      localStorage.getItem('auth-token')
    );
    return this.http.get(`${this.backendurl}/user/myviewedaddress`, {
      headers: header,
    });
  }
}
