import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  newReleases: any[] = [];
  loading: boolean;
  errorService: boolean;
  errorServiceMessage: string = '';

  constructor(private spotify: SpotifyService) { 
    this.loading = true;
    this.errorService = false;

    this.spotify.getNewReleases().subscribe((data: any) => {
      this.newReleases = data;
      this.loading = false;
    }, (errorResponse: any) => {
      this.errorService = true;
      this.errorServiceMessage =  errorResponse?.error?.error?.message;
      this.loading = false;
    });
  }
}
