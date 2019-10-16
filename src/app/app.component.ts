import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fader, slider } from './shared/animations/route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slider,
    // fader
  ]
})
export class AppComponent {
  title = 'frontend';

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
