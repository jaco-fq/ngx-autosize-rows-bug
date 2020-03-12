import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {Config, IonicApp, IonicModule} from 'ionic-angular';
import {NgxAutosizeRowsBug} from './app.component';
import {AutosizeModule} from "ngx-autosize";

@NgModule({
  declarations: [
    NgxAutosizeRowsBug
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(NgxAutosizeRowsBug, {
      preloadModules: true
    }),
    AutosizeModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    NgxAutosizeRowsBug
  ],
  providers: [
  ]
})
export class AppModule {
  constructor(public config: Config) {
  }
}
