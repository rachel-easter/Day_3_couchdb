import { Component,OnInit } from '@angular/core';
import { CouchdbService } from './crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private couchdbService: CouchdbService) { }
  documentId: string = '';
  document: any = {};
  newDocument: any = {
    "name": "Rachel",
    "age": 20,
    "city": "Sattur",
    "contacts": {
      "email": "rachel@gmail.com",
         }
        };
  ngOnInit(): void {
    
    this.loadDocumentById('adghencjuikhbfjkkkwn');
  }

  loadDocumentById(id: string): void {
    this.couchdbService.getDocumentById(id).subscribe(
      (data) => {
        this.documentId = id;
        this.document = data;
      },
      (error) => {
        console.error('Error loading document:', error);
      }
    );
  }

  createNewDocument(): void {
    
    this.couchdbService.createDocument(this.newDocument).subscribe(
      (data) => {
        console.log('Document created successfully:', data);
              },
      (error) => {
        console.error('Error creating document:', error);
      }
    );
  }

  updateExistingDocument(): void {
    
    this.couchdbService.updateDocument(this.documentId, this.document).subscribe(
      (data) => {
        console.log('Document updated successfully:', data);
       
      },
      (error) => {
        console.error('Error updating document:', error);
      }
    );
  }

  deleteDocument(): void {
   
    if (this.document._id && this.document._rev) {
      this.couchdbService.deleteDocument(this.document._id, this.document._rev).subscribe(
        (data) => {
          console.log('Document deleted successfully:', data);
          

        },
        (error) => {
          console.error('Error deleting document:', error);
        }
      );
    } else {
      console.warn('Document ID or revision missing. Unable to delete.');
    }
  }
}
 
