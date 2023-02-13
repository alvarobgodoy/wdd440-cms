import { Component, Input } from '@angular/core';
import { ActivatedRoute, RouterModule, Params } from '@angular/router';
import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent {
  contact!: Contact;

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService,
    private router: RouterModule) {}

  ngOnInit() {
    this.route.params.subscribe(
      (queryParams: Params) => {
        this.contact = this.contactService.getContact(queryParams['id']);
      }
    )
  }
}
