import { Injectable } from '@angular/core';
import {Contact} from './Contact';

@Injectable()
export class ContactsServiceService {
contacts:Contact[] = [
    {
    id: 1,
    fname:'Akshay',
    lname: 'Pathare',
    phone: 7875886129,
    email: 'abhiakshay@gmail.com',
    status: false
  },
  {
    id: 2,
    fname:'Preeti',
    lname: 'Pathare',
    phone: 7875886129,
    email: 'preeti@gmail.com',
    status: false
  }
  ];
  constructor() { }

  getContacts(){
    return this.contacts;
  }

  addContact(contact:Contact):void{
    this.contacts.push(contact);
  }

  updateContactList(list):void{
    this.contacts = list;
  }

  updateContact(contact,id):void{
    for(let i in this.contacts){
      if(this.contacts[i].id === id){
        this.contacts[i] = contact;
        break;
      }
    }
  }

  getContact(id):Contact{
   return this.contacts.filter((obj) => obj.id === id)[0];
  }

}