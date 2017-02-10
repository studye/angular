import {
    Router,
    ActivatedRoute
} from '@angular/router';
import {
    RouterTestingModule
} from '@angular/router/testing';
import {
    HttpModule
} from '@angular/http';
import {By} from '@angular/platform-browser';
import {
    TestBed,
    fakeAsync,
    async,
    inject,
    tick,
    ComponentFixture
} from '@angular/core/testing';
import {ArtistComponent} from './artist.component';
import {SpotifyService} from './../shared/spotify.service';
import {BehaviorSubject} from 'rxjs';

describe("Router mocking", () => {
    let param$$ =new BehaviorSubject({}),
        stubActivatedRoute = {
            params: param$$.asObservable()
        };
            
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpModule,
                RouterTestingModule.withRoutes(
                    [
                        { path: 'artists/:id', component: ArtistComponent }
                    ]
                )
            ],
            declarations: [
                ArtistComponent
            ],
            providers: [
                SpotifyService,
                {
                    provide: ActivatedRoute,
                    useValue: stubActivatedRoute
                }
            ]
        }).compileComponents();
    }));

    describe('initialization', () => {
        it('retrieves the artist', fakeAsync(inject([SpotifyService], (service:SpotifyService) => {
            // Given
            // 1. router id 설정
            param$$.next({id: 2});
            
            // When
            // Component constructor
            let fixture:ComponentFixture<ArtistComponent> = TestBed.createComponent(ArtistComponent);
            let comp = fixture.componentInstance;
            
            // Then
            expect(comp.id).toEqual(2); // constructor 결과 확인
            
            // Given
            // 2. artist에 등록될 값 임시 저장
            let expectedRes = {
                "images": [
                    "http://img.naver.net/static/www/u/2013/0731/nmms_224940510.gif"
                ]
            };
            // 3. spy와 and.retureValue를 이용
            let getArtistSpy = spyOn(service, "getArtist").and.returnValue({
                subscribe(callback) {
                    callback(expectedRes);
                }
            });
            expect(comp.artist).not.toEqual(expectedRes);

            // When
            fixture.detectChanges();    // trigger ngOnInit

            // Then
            expect(getArtistSpy).toHaveBeenCalledWith(2); // id가 2로 호출되었는지 검사.
            expect(comp.artist).toEqual(expectedRes);
        })));
    });


    
});


