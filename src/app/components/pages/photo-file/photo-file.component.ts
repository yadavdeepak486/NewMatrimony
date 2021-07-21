import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-photo-file',
  templateUrl: './photo-file.component.html',
  styleUrls: ['./photo-file.component.scss'],
})
export class PhotoFileComponent implements OnInit {
  constructor(
    public adminService: AdminService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}
}
