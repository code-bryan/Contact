import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactService.getContact().subscribe(data => {
      console.log(data);
    });
  }

}
