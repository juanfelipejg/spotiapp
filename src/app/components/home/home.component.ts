import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  newReleases: any[] = [];

  constructor(private spotify: SpotifyService) { 
    this.spotify.getNewReleases().subscribe( (data: any) => {
      this.newReleases = data?.albums?.items;
    });
  }

  ngOnInit(): void {
  }

}
