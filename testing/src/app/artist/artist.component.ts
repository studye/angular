import { SpotifyService } from './../shared/spotify.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html'
})
export class ArtistComponent implements OnInit {
  id: string;
  artist: Object;

  constructor(
      private route: ActivatedRoute, 
      private spotify: SpotifyService,
      private location: Location) {
    
    // 클래스가 생성되자 마자 id를 받음.
    route.params.subscribe(params => { this.id = params['id']; });
  }

  ngOnInit(): void {
    this.spotify
      .getArtist(this.id) // Observable 형태
      .subscribe((res: any) => this.renderArtist(res));
  }

  back(): void {
    this.location.back();
  }

  renderArtist(res: any): void {
    this.artist = res;
  }
}
