import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  results: boolean = false;
  @Input('keyword') searchKeyword: string = '';

  onSearch($event: any) {
    $event.preventDefault();
    this.results = !this.results;
  }
}
