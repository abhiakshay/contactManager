import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {Contact} from '../Contact'
import {ContactsServiceService} from '../contacts-service.service'

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {
 id = 0;
 contact:Contact;
 email:string;
  constructor(  
  private route: ActivatedRoute,
  private location: Location,
  public contactsService:ContactsServiceService
  ) { 
  }

  ngOnInit() {
     this.id = Number(this.route.snapshot.paramMap.get('id'));
     this.contact = this.contactsService.getContact(this.id);
  }

  goBack():void{
    this.location.back();
  }

  updateContact(contact):void{
    this.contactsService.updateContact(contact,this.id);
    this.location.back();
  }

  deleteContact(contact):void{
     this.contactsService.deleteContact(contact,this.id);
     this.location.back();
  }

}
