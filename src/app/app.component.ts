import { Component, OnInit } from '@angular/core';
import { ContactService } from './services/contact.service';
import { Icontactinfo } from './interfaces/icontactinfo';
import { IUpdateform } from './interfaces/iupdateform';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'Contact';

  contactsInfo: Array<Icontactinfo>
  contactInfo: Icontactinfo;
  isUpdate: boolean = false;
  showForm: boolean = false;
  table: boolean = true;

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.contactService.getContacts().subscribe(data => {
      this.contactsInfo = [...data];
    });
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }

  toggleView() {
    this.table = !this.table;
  }

  addNewContactInfo(newContactInfo: Icontactinfo) {
    this.contactsInfo.push(newContactInfo);
  }

  updateContactInfo(contactInfo: Icontactinfo) {
    this.isUpdate = true;
    this.showForm = true;
    this.contactInfo = contactInfo;
  }

  cleanContactInfo(event: IUpdateform) {
    this.contactInfo = event.contact;
    this.isUpdate = event.isUpdate
    this.showForm = event.showForm
  }
}
