import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { SampleListItem } from '../interfaces/sample-data.interface';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getData(): Observable<SampleListItem[]> {
    return this.http.get<SampleListItem[]>('/api');
  }
}
