import { Component, Input, OnInit } from '@angular/core';
import { News } from "../../../../shared/models/news";

@Component({
  selector: 'news-component',
  templateUrl: './news-component.component.html',
  styleUrls: ['./news-component.component.css']
})
export class NewsComponentComponent implements OnInit {
  @Input() news: News;

  constructor() { }

  ngOnInit() {
  }

}
