/* tslint:disable:no-unused-variable */

// import { TestBed, async, inject } from '@angular/core/testing';
// import { SpotifyService } from './spotify.service';
//   it('should ...', inject([SpotifyService], (service: SpotifyService) => {
//     expect(service).toBeTruthy();
//   }));
// });

import {
  inject,
  fakeAsync,
  tick,
  TestBed
} from '@angular/core/testing';

import { MockBackend, MockConnection } from '@angular/http/testing';
import {
  Http,
  ConnectionBackend,
  BaseRequestOptions,
  Response,
  ResponseOptions
} from '@angular/http';

import { SpotifyService } from './spotify.service';

describe("HTTP Mock", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SpotifyService,
        MockBackend,
        BaseRequestOptions,
        // MockBackend로 구성한 Http
        {
          provide: Http,
          useFactory: (backend:ConnectionBackend, defaultOptions:BaseRequestOptions) => new Http(backend, defaultOptions),
          deps: [
            MockBackend,
            BaseRequestOptions
          ]
        }
      ]
    });
  });

  it("getTrack 테스트", inject([SpotifyService, MockBackend], fakeAsync((spotifyService, mockBackend) => {
    // Given
    let res;
    mockBackend.connections.subscribe( (c: MockConnection) => {
      expect(c.request.url).toBe('https://api.spotify.com/v1/tracks/TRACK_ID');
      c.mockRespond(new Response(new ResponseOptions({body: '{"name": "felipe"}'})));
    });
    
    // When
    spotifyService.getTrack('TRACK_ID').subscribe(_res => {
      res = _res;
    });
    tick();

    // Then
    expect(res.name).toBe('felipe');
  })));
});

