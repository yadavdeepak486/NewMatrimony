import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  backendurltest = 'https://demo.rishtaguru.com/api';
  backendurl = 'http://localhost:4555/api';
  backendurlnew = 'http://3.109.48.14/api/api';

  constructor(public http: HttpClient) {}

  //gets users
  getalluser() {
    return this.http.get(`${this.backendurl}/user/allusers`);
  }

  getfreeusers() {
    return this.http.get(`${this.backendurl}/user/type/FM`);
  }

  // featuresuser
  getfeaturesusers() {
    return this.http.get(`${this.backendurl}/user/type/FM`);
  }

  // inactiveuser
  getinactiveuser() {
    return this.http.get(`${this.backendurl}/user/inactiveuser`);
  }

  getpremiumusers() {
    return this.http.get(`${this.backendurl}/user/type/FM`);
  }

  getdeletedusers() {
    return this.http.get(`${this.backendurl}/user/type/FM`);
  }

  getblockedusers() {
    return this.http.get(`${this.backendurl}/user/type/FM`);
  }

  getreportedusers() {
    return this.http.get(`${this.backendurl}/user/type/FM`);
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
    return this.http.get(`${this.backendurl}/admin/deletereligion/${id}`);
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
    return this.http.get(`${this.backendurl}/admin/deletecaste/${id}`);
  }
  castesofreligion(id) {
    return this.http.get(`${this.backendurl}/admin/castesofreligion/${id}`);
  }
  multiplecaste(data) {
    return this.http.post(
      `${this.backendurl}/admin/manycastesofreligion`,
      data
    );
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
    return this.http.get(`${this.backendurl}/admin/deletelanguage/${id}`);
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
    return this.http.get(`${this.backendurl}/admin/deleteprofilefor/${id}`);
  }

  //maritalstatus

  getallmaritalstatus() {
    return this.http.get(`${this.backendurl}/admin/allmaritalstatus`);
  }
  addmaritalstatus(data) {
    return this.http.post(`${this.backendurl}/admin/addmaritalstatus`, data);
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
    return this.http.get(`${this.backendurl}/admin/deletemaritalstatus/${id}`);
  }

  //country
  allcountry() {
    return this.http.get(`${this.backendurl}/admin/allcountry`);
  }
  addcountry(data) {
    return this.http.post(`${this.backendurl}/admin/addcountry`, data);
  }
  getonecountry(id) {
    return this.http.get(`${this.backendurl}/admin/viewonecountry/${id}`);
  }
  editcountry(id, data) {
    return this.http.post(`${this.backendurl}/admin/editcountry/${id}`, data);
  }
  deletecountry(id) {
    return this.http.get(`${this.backendurl}/admin/deletecountry/${id}`);
  }

  //state
  allstate() {
    return this.http.get(`${this.backendurl}/admin/allstate`);
  }
  addstate(data) {
    return this.http.post(`${this.backendurl}/admin/addstate`, data);
  }
  getonestate(id) {
    return this.http.get(`${this.backendurl}/admin/onestate/${id}`);
  }
  statebycountry(id) {
    return this.http.get(`${this.backendurl}/admin/statebycountry/${id}`);
  }

  allstateofcountry(data) {
    return this.http.post(`${this.backendurl}/admin/stateofscountry`, data);
  }

  editstate(id, data) {
    return this.http.post(`${this.backendurl}/admin/editstate/${id}`, data);
  }
  deletestate(id) {
    return this.http.get(`${this.backendurl}/admin/deletestate/${id}`);
  }

  //get all city
  allcity() {
    return this.http.get(`${this.backendurl}/admin/allcity`);
  }
  addcity(data) {
    return this.http.post(`${this.backendurl}/admin/addcity`, data);
  }
  getonecity(id) {
    return this.http.get(`${this.backendurl}/admin/onecity/${id}`);
  }
  citybystate(id) {
    return this.http.get(`${this.backendurl}/admin/citybystate/${id}`);
  }
  editcity(id, data) {
    return this.http.post(`${this.backendurl}/admin/editcity/${id}`, data);
  }
  deletecity(id) {
    return this.http.get(`${this.backendurl}/admin/deletecity/${id}`);
  }

  //get all Familyvalue
  allfamilyvalues() {
    return this.http.get(`${this.backendurl}/admin/allfamilyvalues`);
  }
  addfamilyvalues(data) {
    return this.http.post(`${this.backendurl}/admin/addfamilyvalues`, data);
  }
  getonefamilyvalues(id) {
    return this.http.get(`${this.backendurl}/admin/viewonefamilyvalues/${id}`);
  }
  editfamilyvalues(id, data) {
    return this.http.post(
      `${this.backendurl}/admin/editfamilyvalues/${id}`,
      data
    );
  }
  deletefamilyvalues(id) {
    return this.http.get(`${this.backendurl}/admin/deletefamilyvalues/${id}`);
  }

  //get all familystatus
  allfamilystatus() {
    return this.http.get(`${this.backendurl}/admin/allfamilystatus`);
  }
  addfamilystatus(data) {
    return this.http.post(`${this.backendurl}/admin/addfamilystatus`, data);
  }
  getonefamilystatus(id) {
    return this.http.get(`${this.backendurl}/admin/viewonefamilystatus/${id}`);
  }
  editfamilystatus(id, data) {
    return this.http.post(
      `${this.backendurl}/admin/editfamilystatus/${id}`,
      data
    );
  }
  deletefamilystatus(id) {
    return this.http.get(`${this.backendurl}/admin/deletefamilystatus/${id}`);
  }

  //get all education
  alleducation() {
    return this.http.get(`${this.backendurl}/admin/alleducation`);
  }
  addeducation(data) {
    return this.http.post(`${this.backendurl}/admin/addeducation`, data);
  }
  getoneeducation(id) {
    return this.http.get(`${this.backendurl}/admin/viewoneeducation/${id}`);
  }
  editeducation(id, data) {
    return this.http.post(`${this.backendurl}/admin/editeducation/${id}`, data);
  }
  deleteeducation(id) {
    return this.http.get(`${this.backendurl}/admin/deleteeducation/${id}`);
  }

  //get all occupation
  alloccupation() {
    return this.http.get(`${this.backendurl}/admin/alloccupation`);
  }
  addoccupation(data) {
    return this.http.post(`${this.backendurl}/admin/addoccupation`, data);
  }
  getoneoccupation(id) {
    return this.http.get(`${this.backendurl}/admin/viewoneoccupation/${id}`);
  }
  editoccupation(id, data) {
    return this.http.post(
      `${this.backendurl}/admin/editoccupation/${id}`,
      data
    );
  }
  deleteoccupation(id) {
    return this.http.get(`${this.backendurl}/admin/deleteoccupation/${id}`);
  }

  //get allstar
  allstar() {
    return this.http.get(`${this.backendurl}/admin/allstar`);
  }
  addstar(data) {
    return this.http.post(`${this.backendurl}/admin/addstar`, data);
  }
  getonestar(id) {
    return this.http.get(`${this.backendurl}/admin/viewonestar/${id}`);
  }
  editstar(id, data) {
    return this.http.post(`${this.backendurl}/admin/editstar/${id}`, data);
  }
  deletestar(id) {
    return this.http.get(`${this.backendurl}/admin/deletestar/${id}`);
  }

  //get all moonsign
  allmoonsign() {
    return this.http.get(`${this.backendurl}/admin/allmoonsign`);
  }
  addmoonsign(data) {
    return this.http.post(`${this.backendurl}/admin/addmoonsign`, data);
  }
  getonemoonsign(id) {
    return this.http.get(`${this.backendurl}/admin/viewonemoonsign/${id}`);
  }
  editmoonsign(id, data) {
    return this.http.post(`${this.backendurl}/admin/editmoonsign/${id}`, data);
  }
  deletemoonsign(id) {
    return this.http.get(`${this.backendurl}/admin/deletemoonsign/${id}`);
  }

  //height
  getallheight() {
    return this.http.get(`${this.backendurl}/admin/allheight`);
  }
  addheight(data) {
    return this.http.post(`${this.backendurl}/admin/addheight`, data);
  }
  getoneheight(id) {
    return this.http.get(`${this.backendurl}/admin/viewoneheight/${id}`);
  }
  editheight(id, data) {
    return this.http.post(`${this.backendurl}/admin/editheight/${id}`, data);
  }
  deleteheight(id) {
    return this.http.get(`${this.backendurl}/admin/deleteheight/${id}`);
  }

  //get all employedin
  allemployedin() {
    return this.http.get(`${this.backendurl}/admin/allemployedin`);
  }
  addemployedin(data) {
    return this.http.post(`${this.backendurl}/admin/addemployedin`, data);
  }
  getoneemployedin(id) {
    return this.http.get(`${this.backendurl}/admin/viewoneemployedin/${id}`);
  }
  editemployedin(id, data) {
    return this.http.post(
      `${this.backendurl}/admin/editemployedin/${id}`,
      data
    );
  }
  deleteemployedin(id) {
    return this.http.get(`${this.backendurl}/admin/deleteemployedin/${id}`);
  }

  //from rest
  allcountryfromrest() {
    return this.http.get(`https://restcountries.eu/rest/v2/all`);
  }

  //staff roles
  getallrole() {
    return this.http.get(`${this.backendurl}/admin/allrole`);
  }
  addrole(data) {
    return this.http.post(`${this.backendurl}/admin/addrole`, data);
  }
  getonerole(id) {
    return this.http.get(`${this.backendurl}/admin/viewonerole/${id}`);
  }
  editrole(id, data) {
    return this.http.post(`${this.backendurl}/admin/editrole/${id}`, data);
  }
  deleterole(id) {
    return this.http.get(`${this.backendurl}/admin/deleterole/${id}`);
  }

  //staff
  getallstaff() {
    return this.http.get(`${this.backendurl}/admin/allstaff`);
  }
  addstaff(data) {
    return this.http.post(`${this.backendurl}/admin/addstaff`, data);
  }
  getonestaff(id) {
    return this.http.get(`${this.backendurl}/admin/viewonestaff/${id}`);
  }
  editstaff(id, data) {
    return this.http.post(`${this.backendurl}/admin/editstaff/${id}`, data);
  }
  deletestaff(id) {
    return this.http.get(`${this.backendurl}/admin/deletestaff/${id}`);
  }

  getlogo() {
    return this.http.get(`${this.backendurl}/admin/viewweblogo/Two`);
  }

  addlogo(data) {
    const formData: FormData = new FormData();
    formData.append('title', data?.title);
    formData.append('logo', data?.logo);
    formData.append('website', data.website);

    return this.http.post(`${this.backendurl}/admin/addlogo`, formData);
  }

  editlogo(id, data) {
    const formData: FormData = new FormData();
    formData.append('title', data?.title);
    formData.append('logo', data?.logo);
    formData.append('website', data.website);

    return this.http.post(`${this.backendurl}/admin/editlogo/${id}`, formData);
  }

  onelogo(id) {
    return this.http.get(`${this.backendurl}/admin/viewonelogo/${id}`);
  }

  deletelogo(id) {
    return this.http.get(`${this.backendurl}/admin/deletelogo/${id}`);
  }

  //happy story
  getallhappystory() {
    return this.http.get(`${this.backendurl}/admin/allhappystory`);
  }

  addhappystory(data) {
    const formData: FormData = new FormData();
    formData.append('img1', data.img1);
    formData.append('img2', data.img2);
    formData.append('img3', data.img3);
    formData.append('title', data.title);
    formData.append('desc', data.desc);
    formData.append('sortorder', data.sortorder);

    return this.http.post(`${this.backendurl}/admin/addhappystory`, formData);
  }

  onehappystory(id) {
    return this.http.get(`${this.backendurl}/admin/viewonehappystory/${id}`);
  }

  deletehappystory(id) {
    return this.http.get(`${this.backendurl}/admin/deletehappystory/${id}`);
  }

  updatehappystory(id, data) {
    const formData: FormData = new FormData();
    formData.append('img1', data.img1);
    formData.append('img2', data.img2);
    formData.append('img3', data.img3);
    formData.append('title', data.title);
    formData.append('desc', data.desc);
    formData.append('sortorder', data.sortorder);

    return this.http.post(
      `${this.backendurl}/admin/edithappystory/${id}`,
      formData
    );
  }

  getalllogo() {
    return this.http.get(`${this.backendurl}/admin/alllogo`);
  }

  // religionbasedcaste
  religionbasedcaste(id) {
    return this.http.get(`${this.backendurl}/admin/castesofreligion/${id}`);
  }

  //plan
  addplan(data) {
    return this.http.post(`${this.backendurl}/admin/addplan`, data);
  }

  allplans() {
    return this.http.get(`${this.backendurl}/admin/allplan`);
  }

  otpbal() {
    return this.http.get(
      `http://2factor.in/API/V1/8a6e826a-b96c-11e7-94da-0200cd936042/BAL/SMS`
    );
  }

  stafflogin(data) {
    return this.http.post(`${this.backendurl}/admin/login`, data);
  }
}
