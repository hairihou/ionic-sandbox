import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { SampleData } from '../interfaces/sample-data.interface';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getData(): Observable<SampleData[]> {
    return this.http.get<SampleData[]>('/api');
  }
}
