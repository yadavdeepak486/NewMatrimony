import { Component, OnInit } from '@angular/core';
// import { NgxTextEditorModule } from 'ngx-text-editor'
// import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  breadcrumb = [
    {
        title: 'Newsletter',
        subTitle: 'Members'
    }
]
}
