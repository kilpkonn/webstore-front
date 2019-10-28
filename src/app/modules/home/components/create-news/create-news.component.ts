import { Component, OnInit } from '@angular/core';
import { News } from "../../../../shared/models/news";
import { NewsService } from "../../services/news.service";

@Component({
  selector: 'create-news',
  templateUrl: './create-news.component.html',
  styleUrls: ['./create-news.component.css']
})
export class CreateNewsComponent implements OnInit {
  public submitted = false;
  public news = new News();

  constructor(private newsService: NewsService) {
  }

  ngOnInit() {
  }

  newNews(): void {
    this.submitted = false;
    this.news = new News();
  }

  save() {
    this.newsService.createNews(this.news)
      .subscribe(data => console.log(data), error => console.log(error));
    this.news = new News();
  }

  onSubmit() {
    if (!this.isValidNews(this.news)) {
      // TODO: Display error
      return;
    }
    this.submitted = true;
    this.save();
  }

  private isValidNews(news: News) {
    return typeof news.headline !== 'undefined'
      && news.headline !== ''
      && typeof news.content !== 'undefined'
      && news.content !== ''
  }
}
