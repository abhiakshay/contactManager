import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import {ContactsServiceService} from './contacts-service.service'

const routes:Routes = [
  {path:"contactList",component: ContactListComponent},
  {path:"viewContact/:id",component: ViewContactComponent},
  {path:"addContact",component:AddContactComponent},
  { path: '',
    redirectTo: '/addContact',
    pathMatch: 'full'
  },
]

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    AddContactComponent,
    ViewContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [ContactsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
