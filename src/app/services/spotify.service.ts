import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery(query: string): any {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQB3S_scYAM0wg4flBi1QskLZHVkrtvjkQbo9osfYvOewHAXJyVqKhteLKipdEtzC852FY4F_58WABp8vm1HRVWHqIxs-XBfWydRYi-Y7jckwH-62lskK6vJjYJxCeTbiLBsz8QSaHnDLzmwDzT_DrW9bvIxNbg'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases(): any {
    return this.getQuery('browse/new-releases').pipe( map( (data: any) => data['albums'].items));
  }

  getArtists(term: string) {
    return this.getQuery(`search?q=${term}&type=artist&limit=15`)
      .pipe( map( (data: any) => data['artists'].items));
  }

  getArtist(id: string): Observable<any> {
    return this.getQuery(`artists/${id}`)
  }
  
}
