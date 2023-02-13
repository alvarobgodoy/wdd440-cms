import { Component } from '@angular/core';
import { Document } from '../document.model';
import { DocumentService } from '../document.service';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { WindRefService } from 'src/app/win-ref.service';

@Component({
  selector: 'app-document-detail',
  templateUrl: './document-detail.component.html',
  styleUrls: ['./document-detail.component.css']
})
export class DocumentDetailComponent {
  document!: Document;
  nativeWindow: any;

  constructor(private docService: DocumentService,
              private router: Router,
              private route: ActivatedRoute,
              private windRefService: WindRefService) {}

  ngOnInit() {
    this.route.params.subscribe(
      (queryParams: Params) => {
        this.document = this.docService.getDocument(this.route.snapshot.params['id']);
    })
    this.nativeWindow = this.windRefService.getNativeWindow();
  }

  onView() {
    if(this.document.url) {
      this.nativeWindow.open(this.document.url);
    }
  }

  onDelete() {
      this.docService.deleteDocument(this.document);
      this.router.navigate(['/documents'])
 }
}
