import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NgifSampleComponent } from './ngif-sample/ngif-sample.component';
import { NgswitchSampleComponent } from './ngswitch-sample/ngswitch-sample.component';
import { NgstyleSampleComponent } from './ngstyle-sample/ngstyle-sample.component';
import { NgclassSampleComponent } from './ngclass-sample/ngclass-sample.component';
import { NgforSampleComponent } from './ngfor-sample/ngfor-sample.component';
import { NgnonbindableSampleComponent } from './ngnonbindable-sample/ngnonbindable-sample.component';

@NgModule({
  declarations: [
    AppComponent,
    NgifSampleComponent,
    NgswitchSampleComponent,
    NgstyleSampleComponent,
    NgclassSampleComponent,
    NgforSampleComponent,
    NgnonbindableSampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
