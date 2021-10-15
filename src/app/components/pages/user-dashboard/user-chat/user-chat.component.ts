import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user-chat',
  templateUrl: './user-chat.component.html',
  styleUrls: ['./user-chat.component.scss'],
})
export class UserChatComponent implements OnInit,OnDestroy {
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;

  mydetail: any;
  otheruser: any;
  rooms: any;
  chatingroom: any;
  chats: any;
  id: any;
  path1 = 'assets/img/user1.jpg';
  useDefault:any
  data ={
    OnlineUsers:""
  }

  chatform = new FormGroup({
    msg: new FormControl(''),
  });

  constructor(
    public userService: UserService,
    public routes: Router,
    public route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getmydetails();
    this.mychatroom();
    this.scrollToBottom();
  }

  ngOnDestroy():void{
  }

  scrollToBottom(): void {
      this.myScrollContainer.nativeElement.scroll({
        top: this.myScrollContainer.nativeElement.scrollHeight,
        left: 0,
        behavior: 'smooth'})
  }

  getmydetails() {
    this.userService.getmyprofiledetail().subscribe(
      (response: any) => {
        console.log(response);
        this.mydetail = response.data;
        this.useDefault = this.mydetail.OnlineUsers == 1?true:false
      },
      (error) => {
        console.log(error);
      }
    );
  }

  //get chatti image and name
  imageandname(id) {
    this.userService.viewoneprofile(id).subscribe(
      (response: any) => {
        console.log(response);
        this.otheruser = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  mychatroom() {
    this.userService.mychatroom().subscribe(
      (response: any) => {
        console.log(response);
        this.rooms = response.data;
        console.log(response.data[0].receiver._id);
        if (this.mydetail?._id == response.data[0].receiver?._id) {
          console.log('to set sender id');
          this.imageandname(response.data[0].sender._id);
          const tosetid = response.data[0].sender._id;
          console.log(tosetid);
          this.chatwith(tosetid, response.data[0]._id);
        } else {
          console.log('to set receiver id');
          this.imageandname(response.data[0].receiver._id);
          const tosetid = response.data[0].receiver._id;
          console.log(tosetid);
          this.chatwith(tosetid, response.data[0]._id);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  chatwith(id, roomid) {
    console.log(id, roomid);
    this.chatingroom = roomid;
    console.log(this.chatingroom);
    this.imageandname(id);
    this.userService.chatsroom(this.chatingroom).subscribe(
      (response: any) => {
        console.log(response);
        this.chats = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
    this.scrollToBottom()
    setInterval(() => {
      this.userService.chatsroom(this.chatingroom).subscribe(
        (response: any) => {
          console.log(response);
          this.chats = response.data;
        },
        (error) => {
          console.log(error);
        }
      );
    }, 3000);
  }

  refreshchat(chatroom) {
    this.userService.chatsroom(chatroom).subscribe(
      (response: any) => {
        console.log(response);
        this.chats = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  sendmsg() {
    console.log(this.chatform.value);
    console.log(this.otheruser._id);
    console.log(this.chatingroom);
    // console.log(this.chatform.value);
    this.userService
      .sendmsg(this.chatform.value, this.otheruser._id, this.chatingroom)
      .subscribe(
        (response: any) => {
          console.log(response);
          this.chatform.reset();
          this.chatwith(this.otheruser._id, this.chatingroom);
          console.log(this.chatingroom);
          this.refreshchat(response.data.chatroom);
        },
        (error) => {
          console.log(error);
        }
      );
      this.scrollToBottom()
  }

  toggle(event: MatSlideToggleChange) {
    console.log(this.mydetail.OnlineUsers)
    console.log('toggle', this.mydetail.OnlineUsers == 0 ?event.checked:!event.checked);
    console.log('toggle', event.checked);
        this.useDefault = event.checked;
        const changevalue = event.checked?'1':'0'
        this.data.OnlineUsers = changevalue
        console.log(this.data)
    this.userService.addotheruserdetails(this.data).subscribe(
      (response: any) => {
        console.log(response);
        this.getmydetails();
      },
      (error) => {
        console.log(error);
      }
    );

  }
}
