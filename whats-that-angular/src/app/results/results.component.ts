import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  constructor(private http: HttpClient) {
    this.youtubeKey = environment.youtubeApiKey;
  }
  @Input('search-keyword') searchKeyword!: string;
  key!: string;
  wikiData!: string;
  wikiUrl!: string;
  youtubeUrl!: string;
  youtubeKey: string;
  youtubeData: any = [];
  ngOnInit() {
    this.key = this.key = this.searchKeyword.split(' ').join('+');
    this.wikiUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=1&srsearch=${this.key}`;
    this.http
      .get(this.wikiUrl)
      .toPromise()
      .then((data: any) => {
        this.wikiData = data.query.search[0].snippet;
      });

    this.youtubeUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&max_results=3&key=${this.youtubeKey}&q=what+is+${this.key}`;
    this.http
      .get(this.youtubeUrl)
      .toPromise()
      .then((data: any) => {
        this.youtubeData = data;
      });
  }
}
