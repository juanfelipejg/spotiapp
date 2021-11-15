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
      'Authorization': 'Bearer BQDKrk14QvLZG5RJnLj2SI6EnlHwJ4i9Gzr0vP1hCLo83FnHwcik-ktiBJ6XcMAlYTd53YT4vzcnEFGO9-JGGDwjhVsK0euyHx4l3rHVRitoNXOaP_4sQF9t7vhsQqac9D95iJYIqXQ0hHz5iEbC9XkVUsKRGos'
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
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
      .pipe( map((data: any) => data.tracks));
  }
  
}
