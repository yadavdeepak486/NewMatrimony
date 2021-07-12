import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  backendurl = "http://localhost:4000/api"

  constructor(public http: HttpClient) { }


  //gets users
  getalluser() {
    return this.http.get(`${this.backendurl}/user/allusers`)
  }

  getfreeusers() {
    return this.http.get(`${this.backendurl}/user/type/FM`)
  }

  getpremiumusers() {
    return this.http.get(`${this.backendurl}/user/type/PM`)
  }

  getdeletedusers() {
    return this.http.get(`${this.backendurl}/user/deletedusers`)
  }

  getblockedusers() {
    return this.http.get(`${this.backendurl}/user/allblockedusers`)
  }

  getreportedusers() {
    return this.http.get(`${this.backendurl}/user/allreportedusers`)
  }

  //profile attributes
  getallreligion() {
    return this.http.get(`${this.backendurl}/admin/allreligion`)
  }

  addreligion(data) {
    return this.http.post(`${this.backendurl}/admin/addreligion`, data)
  }

  getonereligion(id) {
    return this.http.get(`${this.backendurl}/admin/viewonereligion/${id}`)
  }

  editreligion(id, data) {
    return this.http.post(`${this.backendurl}/admin/editreligion/${id}`, data)
  }

  deleterelgion(id) {
    return this.http.delete(`${this.backendurl}/admin/deletereligion/${id}`)
  }

  //caste
  getallcaste() {
    return this.http.get(`${this.backendurl}/admin/allcaste`)
  }


}
