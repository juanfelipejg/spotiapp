import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent {
  public artist: any;
  public topTracks: any[] = []; 
  loading: boolean;

  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {
    this.loading = true;
    this.router.params.subscribe( params => {
      this.getArtists(params['id']);
      this.getTopTracks(params['id']);
    })    
  }

  getArtists(id: string) {
    this.spotify.getArtist(id).subscribe((artist) => this.artist = artist);
    this.loading = false;  
  }

  getTopTracks(id: string) {
    this.spotify.getTopTracks(id).subscribe((topTracks) => {      
      this.topTracks = topTracks;
    })
  }

}
