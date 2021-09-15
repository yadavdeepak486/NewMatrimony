import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/admin.service';
import { UserService } from 'src/app/user.service';

@Component({
    selector: 'app-faq',
    templateUrl: './faq.component.html',
    styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
    data:any;
    constructor(
    public userService: UserService,
    public adminService: AdminService,
    public toastr: ToastrService
    ) { }

    ngOnInit(): void {
        this.getfaq();
    }

    // pageTitleContent = [
    //     {
    //         title: 'Frequently Asked Questions',
    //         backgroundImage: 'assets/img/page-title/page-title4.jpg'
    //     }
    // ]

    // faqItem = [
    //     {
    //         title: 'What is Directory Listing?',
    //         paragraph: 'Sed perspiciatis unde omnis natus error sit voluptatem totam rem aperiam, eaque quae architecto beatae explicabo. Lorem ipsum dolor sit amet, elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit.'
    //     },
    //     {
    //         title: 'Do I have to commit to a yearly subscription?',
    //         paragraph: 'Sed perspiciatis unde omnis natus error sit voluptatem totam rem aperiam, eaque quae architecto beatae explicabo. Lorem ipsum dolor sit amet, elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit.'
    //     },
    //     {
    //         title: 'How much time does it take to get approval?',
    //         paragraph: 'Sed perspiciatis unde omnis natus error sit voluptatem totam rem aperiam, eaque quae architecto beatae explicabo. Lorem ipsum dolor sit amet, elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit.'
    //     },
    //     {
    //         title: 'Can I create a free listing?',
    //         paragraph: 'Sed perspiciatis unde omnis natus error sit voluptatem totam rem aperiam, eaque quae architecto beatae explicabo. Lorem ipsum dolor sit amet, elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit.'
    //     },
    //     {
    //         title: 'How many different listings can I make?',
    //         paragraph: 'Sed perspiciatis unde omnis natus error sit voluptatem totam rem aperiam, eaque quae architecto beatae explicabo. Lorem ipsum dolor sit amet, elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit.'
    //     },
    //     {
    //         title: 'What if I want to delete the listing?',
    //         paragraph: 'Sed perspiciatis unde omnis natus error sit voluptatem totam rem aperiam, eaque quae architecto beatae explicabo. Lorem ipsum dolor sit amet, elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit.'
    //     },
    //     {
    //         title: 'How do I sign up to get a directory listing added?',
    //         paragraph: 'Sed perspiciatis unde omnis natus error sit voluptatem totam rem aperiam, eaque quae architecto beatae explicabo. Lorem ipsum dolor sit amet, elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit.'
    //     },
    //     {
    //         title: 'What are the other features the Directory Listing have?',
    //         paragraph: 'Sed perspiciatis unde omnis natus error sit voluptatem totam rem aperiam, eaque quae architecto beatae explicabo. Lorem ipsum dolor sit amet, elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit.'
    //     }
    // ]

    getfaq() {
        const id = 'faq';
        console.log(id);
        this.adminService.getonepagebypath(id).subscribe(
          (response: any) => {
            console.log(response);
            this.data = response.data.html;
          },
          (error) => {
            console.log(error);
          }
        );
      }

}