import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getNewReleases(): any {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCJNV2J0Og6_BV9iq6UeoW_7XUijFEAxuRqDztY-n9VEw3DzeiiTDQ_HTjns98ByePOGsRAgsfNTw3BxIS666XOsV7Y5h3hglWtxVOxnQ_AkM0bSsvu9RJKrctos6hZwbcvJMtLfRi-V1Kot3l3EAKPAT-y_HY'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
      .pipe( map( (data: any) => data['albums'].items));
  }

  getArtist(term: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCJNV2J0Og6_BV9iq6UeoW_7XUijFEAxuRqDztY-n9VEw3DzeiiTDQ_HTjns98ByePOGsRAgsfNTw3BxIS666XOsV7Y5h3hglWtxVOxnQ_AkM0bSsvu9RJKrctos6hZwbcvJMtLfRi-V1Kot3l3EAKPAT-y_HY'
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${term}&type=artist&limit=15`, { headers })
      .pipe( map( (data: any) => data['artists'].items));
  } 
  
}
