import { Component, OnInit } from '@angular/core';
import {ContactsServiceService} from '../contacts-service.service';
import {Contact} from '../Contact';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  contact:Contact = {
    id:0,
    fname: '',
    lname: '',
    email: '',
    phone: 0,
    status: false
  };
  constructor(
    private location: Location,
    private contactService:ContactsServiceService) { }

  ngOnInit() {
  }

  addContact(contact){
    this.contactService.addContact(contact);
    this.location.back();
  }

}
