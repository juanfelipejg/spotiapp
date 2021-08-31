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
      'Authorization': 'Bearer BQC4Nn175XDlbRU4PNiahktFARdFzVTwj3ECyAxY1_L7iEA2lXLXnzodGmJ2GoPpt0DQRu0lMuQ98V_5I5jocjf1iUg2nSVExd0GagE-47atOlwe_AD3dXTF2chb4MSnDaLtCXvrDrYMnjMFmP5il-ydLTNvbb4'
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
