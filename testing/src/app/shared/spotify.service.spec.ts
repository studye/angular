/* tslint:disable:no-unused-variable */
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
        
        // MockBackend로 구성한 Http
        MockBackend,
        BaseRequestOptions,
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

  it("getTrack 테스트 [HTTP mocking] - Service (inject)", fakeAsync(inject(
    [SpotifyService, MockBackend],
    (spotifyService, mockBackend) => {
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
    }
  )));

  it("getTrack 테스트 [HTTP mocking] - Service (TestBed.get)", fakeAsync(() => {
      // Given
      let res;
      let spotifyService = TestBed.get(SpotifyService);
      let mockBackend = TestBed.get(MockBackend);

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
    }
  ));
});
