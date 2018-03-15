import { Component, OnInit } from '@angular/core';
import {Contact} from '../Contact';
import {ContactsServiceService} from '../contacts-service.service'
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
contacts:Contact[];
  constructor(private contactService:ContactsServiceService) { }

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
  }

}
