import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

import { NewsService } from '../services/news.service';
import { News } from '../../../shared/models/news';
import { slider } from '../../../shared/animations/route-animations';
import { listAnimation } from '../../../shared/animations/list-animations';
import {User} from '../../../shared/models/user';
import {AuthenticationService} from '../../../shared/services/authentication.service';

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
  user: User;
  show = false;
  news: News[];

  constructor(private newsService: NewsService,
              private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer,
              private authenticationService: AuthenticationService) {
    this.matIconRegistry.addSvgIcon(
      'add_circle',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/add_circle.svg')
    );
    this.user = authenticationService.currentUserValue;
  }

  ngOnInit() {
    this.getNews();
  }

  getNews(): void {
    this.newsService.getNews()
      .subscribe(news => this.news = news);
  }

  getSortedNews() {
    return this.news.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
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
