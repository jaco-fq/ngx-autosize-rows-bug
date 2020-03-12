import {Component, ViewChild} from '@angular/core';
import {Nav} from 'ionic-angular';

@Component({
  templateUrl: 'app.html'
})
export class NgxAutosizeRowsBug {
  @ViewChild(Nav) public nav: Nav;

  public constructor() {
  }
}

