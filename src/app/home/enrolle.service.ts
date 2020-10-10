import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Data, UpdateDb, Result } from './EnrolleInterface';

@Injectable({
  providedIn: 'root'
})
export class EnrolleService {

  private url = 'http://localhost:3000/result';  // URL to web api

  constructor(
    private http: HttpClient,
  ) { }

  getEnrolles(): Observable<Result> {
      return this.http.get<Result>(this.url)
      .pipe(catchError(err => throwError(err)));
  }

UpdateNameOrStatus(id: number, value: UpdateDb): Observable<Object> {
  return this.http.put(`${this.url}/${id}`, value);
}
}
