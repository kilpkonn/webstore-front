import { Component, OnInit } from '@angular/core';
import { News } from '../../../../shared/models/news';
import { NewsService } from '../../services/news.service';
import { FileInput } from 'ngx-material-file-input';
import { ImageService } from '../../../products/services/image.service';

@Component({
  selector: 'create-news',
  templateUrl: './create-news.component.html',
  styleUrls: ['./create-news.component.css']
})
export class CreateNewsComponent implements OnInit {
  public submitted = false;
  public news = new News();

  readonly maxFileSize = 104857600; // 100 MB
  public imageFile: FileInput;

  constructor(private newsService: NewsService,
              private imageService: ImageService) {
  }

  ngOnInit() {
  }

  newNews(): void {
    this.submitted = false;
    this.news = new News();
  }

  save() {
    this.imageService.uploadImage(this.imageFile.files[0])
      .subscribe(data => {
        this.news.imageUrl = data.url;
        this.newsService.createNews(this.news)
          .subscribe(news => console.log(news), err => console.log(err));
        this.news = new News();
      }, error => console.log(error));
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
      && (this.imageFile.files.length === 0
        || (this.imageFile.files.length === 1
          && this.imageFile.files[0].size <= this.maxFileSize));
  }
}
