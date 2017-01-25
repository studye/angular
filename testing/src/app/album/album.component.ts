import { Location } from '@angular/common';
import { SpotifyService } from './../spotify.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html'
})
export class AlbumComponent implements OnInit {
  id: string;
  album: Object;

  constructor(private route: ActivatedRoute,
              private spotify: SpotifyService, // <-- injected
              private location: Location) {
    route.params.subscribe(params => { this.id = params['id']; });
  }

  ngOnInit(): void {
    this.spotify
      .getAlbum(this.id)
      .subscribe((res: any) => this.renderAlbum(res));
  }

  back(): void {
    this.location.back();
  }

  renderAlbum(res: any): void {
    this.album = res;
  }

}
