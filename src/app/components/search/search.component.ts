import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  public artists: any = [];
  loading: boolean;
  

  constructor(private spotify: SpotifyService) { 
    this.loading = false;
  }

  search(term: string) {
    this.loading = this.validateTerm(term);
    this.spotify.getArtists(term).subscribe( (data: any) => {
      this.artists = data
      this.loading = false; 
    })
  }

  validateTerm(term: string): boolean {
    return term === '' || term === ' ' ? false : true;       
  }

}
