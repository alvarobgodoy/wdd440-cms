import { Component, EventEmitter, Output } from '@angular/core';
import { Document } from '../document.model';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent {
  documents: Document[] = [
    new Document('1', 'Doc n1', 'Description of document number 1 here', 'https://wikipedia.com', 'docs3892, doc324'),
    new Document('2', 'Doc n2', 'Description of document number 2 here', 'https://wikipedia.com', 'docs4352, doc678'),
    new Document('3', 'Doc n3', 'Description of document number 3 here', 'https://wikipedia.com', 'docs36542, doc865'),
    new Document('4', 'Doc n4', 'Description of document number 4 here', 'https://wikipedia.com', 'docs36592, doc8549'),
    new Document('5', 'Doc n5', 'Description of document number 5 here', 'https://wikipedia.com', 'docs546, doc543')
  ]

  @Output() selectedDocumentEvent = new EventEmitter<Document>();

  onSelectedDocument(document: Document) {
    this.selectedDocumentEvent.emit(document);
  }
}
