import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user-chat',
  templateUrl: './user-chat.component.html',
  styleUrls: ['./user-chat.component.scss'],
})
export class UserChatComponent implements OnInit {
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;

  mydetail: any;
  otheruser: any;
  rooms: any;
  chatingroom: any;
  chats: any;
  id: any;
  path1 = 'assets/img/user1.jpg';

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
    // this.id = this.route.snapshot.params['id'];
    // this.imageandname(this.id);
    this.mychatroom();
    //this.scrollToBottom();

    //this.refreshchat();
  }

  // ngAfterViewChecked() {
  //   this.cdr.detectChanges();
  //   this.scrollToBottom();
  // }

  // scrollToBottom(): void {
  //   try {
  //     this.myScrollContainer.nativeElement.scrollTop =
  //       this.myScrollContainer.nativeElement.scrollHeight;
  //   } catch (err) {}
  // }

  getmydetails() {
    this.userService.getmyprofiledetail().subscribe(
      (response: any) => {
        console.log(response);
        this.mydetail = response.data;
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
  }
}
