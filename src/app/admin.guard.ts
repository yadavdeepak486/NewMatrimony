import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from './admin.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  mypermissons:any
  constructor(private routes: Router,private adminService: AdminService) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {


//         this.adminService.staffdetail().subscribe(
//           (response: any) => {
//             console.log(response);
//             this.mypermissons = response.data.role;
//           },
//           (error) => {
//             console.log(error);
//           }
//         );


//         if(this.mypermissons.edit_happystory)

// edit_happystory: false
// edit_othersetting: false
// edit_otpsystem: false
// edit_plans: false
// edit_profileattribute: false
// edit_staff: false
// edit_userprofile: true
// edit_websitesetup: false


      if(localStorage.getItem('auth-adtoken') !== null){
        return true;
      }else{
        this.routes.navigate(['/admin-login']);
      return false
      }
  }
}
