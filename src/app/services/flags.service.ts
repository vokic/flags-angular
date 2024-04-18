import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flag } from '../interface/flag';
@Injectable({
  providedIn: 'root',
})
export class FlagsService {
  private flagsUrl = 'https://restcountries.com/v3.1/all';

  constructor(private http: HttpClient) {}

  /**
   *
   * @return {Observable<Flag[]>}
   */
  getAllFlags(): Observable<Flag[]> {
    return this.http.get<Flag[]>(this.flagsUrl);
  }

  getCountryDetails(name: string): Observable<Flag> {
    return this.http.get<Flag>(`https://restcountries.com/v3.1/name/${name}`);
  }
}
