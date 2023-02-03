import { Component, EventEmitter, Output } from '@angular/core';
import { DocumentService } from '../document-service.service';
import { Document } from '../document.model';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent {
  documents: Document[] = [];

  constructor(private documentService: DocumentService) {}

  @Output() selectedDocumentEvent = new EventEmitter<Document>();

  ngOnInit() {
    this.documents = this.documentService.getDocuments();
  }

  onSelectedDocument(document: Document) {
    this.selectedDocumentEvent.emit(document);
  }
}
