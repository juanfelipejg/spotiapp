import { Component, Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() public items: any[] = [];

  constructor(private router: Router) { }

  public getArtistId(item: any): void {
    let artistId;

    if(item?.type === 'album') {
      artistId = item?.artists?.[0]?.id;
    }

    if(item?.type === 'artist') {
      artistId = item?.id; 
    }

    this.router.navigate(['/artist', artistId]);

    
  }
}
