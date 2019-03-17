import { Component } from '@angular/core';
import { ContactService } from './services/contact.service';
import { Icontactinfo } from './interfaces/icontactinfo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Contact';

  contactsInfo: Array<Icontactinfo>

  constructor(private contactService: ContactService) { 
    this.getContacts();
  }

  getContacts() {
    this.contactService.getContacts().subscribe(data => {
      this.contactsInfo = [...data];
    });
  }
}
