import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IContact } from '../../interfaces/icontact';
import { Icontactinfo } from '../../interfaces/icontactinfo';

@Component({
  selector: 'app-contact-info-form',
  templateUrl: './contact-info-form.component.html',
  styleUrls: ['./contact-info-form.component.css']
})
export class ContactInfoFormComponent implements OnInit {

  @Input() contactInfo: Icontactinfo
  @Output() addNewContactInfo = new EventEmitter();

  constructor() {
    
  }

  ngOnInit() {
    if (!this.contactInfo) {
      this.cancel();
    } 
  }

  newContact() {
    let contact:IContact = { contactType: null, contact: null };
    this.contactInfo.contacts.push(contact);
  }

  submit() {
    this.addNewContactInfo.emit(this.contactInfo);
  }

  cancel() {
    let newContactInfo:Icontactinfo = { name: null, lastname: null, contacts: [] };
    this.contactInfo = newContactInfo;
  }
}
