import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Category} from "./category";

@Injectable()
export class CategoryService {
  baseUrl: string = 'http://127.0.0.1:3000/categories/';

  constructor(private http: Http) { }

  show(id: number): Observable<Category[]> {
    return this.http
        .get(this.baseUrl + id)
        .map(res => res.json());
  }
}
