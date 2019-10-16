import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { NewsService } from '../services/news.service';
import { News } from '../../../shared/models/news';
import { slider } from '../../../shared/animations/route-animations';
import { listAnimation } from '../../../shared/animations/list-animations';

@Component({
  host: {
    '[@routeAnimations]': '',
    '(@routeAnimations.done)': 'onAnimationFinished()'
  },
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [slider, listAnimation]
})
export class HomeComponent implements OnInit {
  show = false;
  news: News[];

  constructor(private newsService: NewsService,
              private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      'add_circle',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/add_circle.svg')
    );
  }

  ngOnInit() {
    this.getNews();
  }

  getNews(): void {
    this.newsService.getNews()
      .subscribe(news => this.news = news);
  }

  removeNews(news: News) {
    this.newsService.deleteNews(news.id)
      .subscribe(data => {
        this.news.splice(this.news.indexOf(news), 1);
        // Verify by pulling new products?
      }, error => console.log(error));
  }

  onAnimationFinished() {
    this.show = true;
  }
}
