import { Contact } from "./contact.model"
import { MOCKCONTACTS } from './MOCKCONTACTS';

export class ContactService {
    private contacts: Contact[] = [];

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