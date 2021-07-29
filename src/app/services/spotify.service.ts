import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getNewReleases(): any {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDF4JDyaaMDzmjZ4X4B8Sc8h0nKTlkofmksADgiw6d-_LAWzrlRpWsM4LTci9RKH56Jg168LSmxDB8kOqQCjeWOOEqmjjZq_NI6dFI8vnndF-77wJjeFqri5ZG1SCj6YxxWNCHxOM2sqdSx2sFRRwMb_djUzY0'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }

  getArtist(term: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAFrY514Mk3H0SskP9eWW4vf1E71LI2A8rG9JvgnZeScy8d2urAY1dchovC_6czYAkH3KFIQG-h1Qql-Gst9LRabH_BZGDyNzACfBr4OhhIbsVWJsH9Si4mWiSy9d4GP-2o4skqbyx66viGdGvLv3M9rQSiPAY'
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${term}&type=artist&limit=15`, { headers });
  } 
  
}
