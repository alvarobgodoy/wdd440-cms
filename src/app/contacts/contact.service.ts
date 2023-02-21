import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Contact } from "./contact.model"
import { MOCKCONTACTS } from './MOCKCONTACTS';

@Injectable({
    providedIn: 'root'
})

export class ContactService {
    private contacts: Contact[] = [];
    maxId: number;

    contactSelectedEvent = new EventEmitter<Contact>();
    contactListChangedEvent = new Subject<Contact[]>();

    constructor() {
        this.contacts = MOCKCONTACTS;
        this.maxId = this.getMaxId();
    }

    getContacts() {
        return this.contacts.slice();
    }

    getContact(id: string): Contact {
        for (let contact of this.contacts) {
            if (contact.id == id) {
                return contact;
            }
        }
        return null!;
    }

    deleteContact(contact: Contact) {
        if (!contact) {
            return;
        }
        const pos = this.contacts.indexOf(contact);
        if (pos < 0) {
            return;
        }
        this.contacts.splice(pos, 1);
        this.contactListChangedEvent.next(this.contacts.slice());
    }

    getMaxId(): number {
        let maxId = 0;
    
        for (const contact of this.contacts) {
          const currentId = +contact.id;
          if(currentId > maxId) {
            maxId = currentId;
          }
        }
        return maxId
    }

    addContact(newContact: Contact) {
        if(!newContact) {
          return
        }
    
        this.maxId++;
        newContact.id = this.maxId.toString();
        this.contacts.push(newContact);
        this.contactListChangedEvent.next(this.contacts.slice());
    }
    
    updateContact(originalContact: Contact, newContact: Contact) {
        if(!originalContact || !newContact) {
            return
        }
    
        let pos = this.contacts.indexOf(originalContact)
        if(pos < 0) {
            return
        }
    
        newContact.id = originalContact.id;
        this.contacts[pos] = newContact;
        this.contactListChangedEvent.next(this.contacts.slice());
      }
}