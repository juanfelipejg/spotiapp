import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDF4JDyaaMDzmjZ4X4B8Sc8h0nKTlkofmksADgiw6d-_LAWzrlRpWsM4LTci9RKH56Jg168LSmxDB8kOqQCjeWOOEqmjjZq_NI6dFI8vnndF-77wJjeFqri5ZG1SCj6YxxWNCHxOM2sqdSx2sFRRwMb_djUzY0'
    });
    this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers }).subscribe(data => {
      console.log(data);      
    });
  }
}
