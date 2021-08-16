import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery(query: string): any {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQB_Nahzs6dzgrWDgByO1woluzeCP4T2yqJMYpgsgI0fOz5c-mgkNT9N_fUHXLn7RliwO_EzUvnjdam5G03A-A02ohidjfeFOm9R11UGyVBAaR06m3n1DDMCGv8TY7X8rMyzkcHEPH5DQq7GTJ8c6yLTNkqkw4c'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases(): any {
    return this.getQuery('browse/new-releases').pipe( map( (data: any) => data['albums'].items));
  }

  getArtist(term: string) {
    return this.getQuery(`search?q=${term}&type=artist&limit=15`)
      .pipe( map( (data: any) => data['artists'].items));
  } 
  
}
