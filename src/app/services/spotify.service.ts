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
      'Authorization': 'Bearer BQA9EZSus2QbY8Lr9EQzbkPk2tqrZtVUbVFnEu2wul7NKSsKdzVwtzjLojuVdCtBYbJUPUI_jfmsgNJTK_Wppx4y7XknxmIHEKKdiQ3LH6lQLZLVwWgPc_j7-rmswz-kcukZklvIy9WsCySJbgYg_I73A65lYaY'
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
