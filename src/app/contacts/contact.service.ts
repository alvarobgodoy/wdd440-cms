import { EventEmitter, Injectable } from "@angular/core";
import { Contact } from "./contact.model"
import { MOCKCONTACTS } from './MOCKCONTACTS';

@Injectable({
    providedIn: 'root'
})

export class ContactService {
    private contacts: Contact[] = [];

    contactSelectedEvent = new EventEmitter<Contact>();

    constructor() {
        this.contacts = MOCKCONTACTS;
    }

    getContacts() {
        return this.contacts.slice();
    }

    getContact(id: string) {
        this.contacts.find((contact) => {
            return contact.id = id;
        })
    }
}