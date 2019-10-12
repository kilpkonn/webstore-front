import { Component, OnInit } from '@angular/core';
import { NewsService } from "../services/news.service";
import { News } from "../../../shared/models/news";
import { slider } from "../../../shared/animations/route-animations";
import { listAnimation } from "../../../shared/animations/list-animations";

@Component({
  host: {
    '[@routeAnimations]': '',
    '(@routeAnimations.done)': "onAnimationFinished()"
  },
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [slider, listAnimation]
})
export class HomeComponent implements OnInit {
  show: boolean = false;
  news: News[];

  constructor(private newsService: NewsService) { }

  getNews(): void {
    this.newsService.getNews()
      .subscribe(news => this.news = news);
  }

  ngOnInit() {
    this.getNews();
  }

  onAnimationFinished () {
    this.show = true;
  }
}
