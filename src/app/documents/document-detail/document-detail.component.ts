import { Component } from '@angular/core';
import { Document } from '../document.model';
import { DocumentService } from '../document.service';
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-document-detail',
  templateUrl: './document-detail.component.html',
  styleUrls: ['./document-detail.component.css']
})
export class DocumentDetailComponent {
  document!: Document;

  constructor(private docService: DocumentService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(
      (queryParams: Params) => {
        this.document = this.docService.getDocument(this.route.snapshot.params['id']);
        console.log(queryParams)
    })
  }
}
