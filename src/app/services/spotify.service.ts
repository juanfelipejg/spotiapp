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
<<<<<<< HEAD
      'Authorization': 'Bearer BQBmT92WHt--KNhHFuJyiGzZ8r70uGhH-R-JujSur_xBM5-grPivkZCDK9H_MsmQzu4TbIQuZGdrR2B_mjtIBwRGhekNCTULr8ss8IjJxcvuDH2odBNztRzpcQtnuu49OhDiuY4LCy56MLermX9tHBDs5-8zYgE'
=======
      'Authorization': 'Bearer BQAur8Srt-2p3gKBKtsfOezm7VFkthE2pSiv830SmtGFciKRnoqcaAxSRSfFWAHYdqkD5NkQD72KmkNlZaZ-IIhCn6Ic7ZEqltRnFHL3L-3TZpZOveKAGfbBCywCaOhQkBe2J4HplcXRTNPOl7f40nxmz9obW1g'
>>>>>>> a007bf2455fe73a1d46295a174b28f56383267c3
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

  getTopTracks(id: string): Observable<any> {
<<<<<<< HEAD
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
      .pipe( map((data: any) => data.tracks));
=======
    return this.getQuery(`artists/${id}/top-tracks?market=US`).pipe(map((data: any) => data?.tracks))
>>>>>>> a007bf2455fe73a1d46295a174b28f56383267c3
  }
  
}
