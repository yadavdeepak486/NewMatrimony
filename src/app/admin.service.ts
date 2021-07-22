import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  backendurltest = 'https://demo.rishtaguru.com/api';
  backendurl = 'http://localhost:4555/api';

  constructor(public http: HttpClient) {}

  //gets users
  getalluser() {
    return this.http.get(`${this.backendurl}/user/allusers`);
  }

  getfreeusers() {
    return this.http.get(`${this.backendurl}/user/type/FM`);
  }

  getpremiumusers() {
    return this.http.get(`${this.backendurl}/user/type/PM`);
  }

  getdeletedusers() {
    return this.http.get(`${this.backendurl}/user/deletedusers`);
  }

  getblockedusers() {
    return this.http.get(`${this.backendurl}/user/allblockedusers`);
  }

  getreportedusers() {
    return this.http.get(`${this.backendurl}/user/allreportedusers`);
  }

  //profile attributes
  getallreligion() {
    return this.http.get(`${this.backendurl}/admin/allreligion`);
  }

  addreligion(data) {
    return this.http.post(`${this.backendurl}/admin/addreligion`, data);
  }

  getonereligion(id) {
    return this.http.get(`${this.backendurl}/admin/viewonereligion/${id}`);
  }

  editreligion(id, data) {
    return this.http.post(`${this.backendurl}/admin/editreligion/${id}`, data);
  }

  deleterelgion(id) {
    return this.http.delete(`${this.backendurl}/admin/deletereligion/${id}`);
  }

  //caste
  addcaste(data) {
    return this.http.post(`${this.backendurl}/admin/addcaste`, data);
  }
  getallcaste() {
    return this.http.get(`${this.backendurl}/admin/allcaste`);
  }
  getonecaste(id) {
    return this.http.get(`${this.backendurl}/admin/onecaste/${id}`);
  }
  editcaste(id, data) {
    return this.http.post(`${this.backendurl}/admin/editcaste/${id}`, data);
  }
  deletecaste(id) {
    return this.http.delete(`${this.backendurl}/admin/deletecaste/${id}`);
  }
  castesofreligion(id) {
    return this.http.get(`${this.backendurl}/admin/castesofreligion/${id}`);
  }

  //language
  addlanguage(data) {
    return this.http.post(`${this.backendurl}/admin/addlanguage`, data);
  }
  getalllanguage() {
    return this.http.get(`${this.backendurl}/admin/alllanguage`);
  }
  getonelanguage(id) {
    return this.http.get(`${this.backendurl}/admin/viewonelanguage/${id}`);
  }
  editlanguage(id, data) {
    return this.http.post(`${this.backendurl}/admin/editlanguage/${id}`, data);
  }
  deletelanguage(id) {
    return this.http.delete(`${this.backendurl}/admin/deletelanguage/${id}`);
  }

  //profilefor
  addprofilefor(data) {
    return this.http.post(`${this.backendurl}/admin/addprofilefor`, data);
  }
  getallprofilefor() {
    return this.http.get(`${this.backendurl}/admin/allprofilefor`);
  }
  getoneprofilefor(id) {
    return this.http.get(`${this.backendurl}/admin/viewoneprofilefor/${id}`);
  }
  editprofilefor(id, data) {
    return this.http.post(
      `${this.backendurl}/admin/editprofilefor/${id}`,
      data
    );
  }
  deleteprofilefor(id) {
    return this.http.delete(`${this.backendurl}/admin/deleteprofilefor/${id}`);
  }

  //maritalstatus
  addmaritalstatus(data) {
    return this.http.post(`${this.backendurl}/admin/addmaritalstatus`, data);
  }
  getallmaritalstatus() {
    return this.http.get(`${this.backendurl}/admin/allmaritalstatus`);
  }
  getonemaritalstatus(id) {
    return this.http.get(`${this.backendurl}/admin/viewonemaritalstatus/${id}`);
  }
  editmaritalstatus(id, data) {
    return this.http.post(
      `${this.backendurl}/admin/editmaritalstatus/${id}`,
      data
    );
  }
  deletemaritalstatus(id) {
    return this.http.delete(
      `${this.backendurl}/admin/deletemaritalstatus/${id}`
    );
  }

  //height
  getallheight() {
    return this.http.get(`${this.backendurl}/admin/allheight`);
  }

  //get all city
  allcity() {
    return this.http.get(`${this.backendurl}/admin/allcity`);
  }

  //get all education
  alleducation() {
    return this.http.get(`${this.backendurl}/admin/alleducation`);
  }
  
  //get all employedin
  allemployedin() {
    return this.http.get(`${this.backendurl}/admin/addemployedin`);
  }
  
    //get all occupation
  alloccupation() {
    return this.http.get(`${this.backendurl}/admin/alloccupation`);
  }

  //get all country
  allcountry() {
    return this.http.get(`${this.backendurl}/admin/allcountry`);
  }

  //get all state
  allstate() {
    return this.http.get(`${this.backendurl}/admin/allstate`);
  }

  //get all Familyvalue
  allfamilyvalues() {
    return this.http.get(`${this.backendurl}/admin/allfamilyvalues`);
  }

  //get all familystatus
  allfamilystatus() {
    return this.http.get(`${this.backendurl}/admin/allfamilystatus`);
  }

  //get allstar
  allstar() {
    return this.http.get(`${this.backendurl}/admin/allstar`);
  }
  //get all moonsign
  allmoonsign() {
    return this.http.get(`${this.backendurl}/admin/allmoonsign`);
  }
  
  
}
