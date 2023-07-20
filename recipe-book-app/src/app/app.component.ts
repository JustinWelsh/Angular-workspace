import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-app';
  loadedFeature: string = 'recipe';
  // value: number = 5;

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
