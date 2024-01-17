// couchdb.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CouchdbService {
  private baseUrl = 'http://localhost:5984/sample';

  constructor(private http: HttpClient) { }

  getDocumentById(documentId: string): Observable<any> {
    const url = `${this.baseUrl}/${documentId}`;
    return this.http.get(url);
  }

  createDocument(document: any): Observable<any> {
    const url = `${this.baseUrl}`;
    return this.http.post(url, document);
  }

  updateDocument(documentId: string, document: any): Observable<any> {
    const url = `${this.baseUrl}/${documentId}`;
    return this.http.put(url, document);
  }

  deleteDocument(documentId: string, rev: string): Observable<any> {
    const url = `${this.baseUrl}/${documentId}?rev=${rev}`;
    return this.http.delete(url);
  }
}
