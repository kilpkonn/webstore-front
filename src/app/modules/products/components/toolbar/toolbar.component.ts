import { Component, OnInit } from '@angular/core';
import { Category } from '../../../../shared/models/category';
import { CategoryService } from '../../services/category.service';
import { Router } from "@angular/router";

@Component({
  selector: 'products-toolbar',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class ToolbarComponent implements OnInit {
  categories: Category[];

  constructor(private categoryService: CategoryService,
              private router: Router) {
  }

  getCategories(): void {
    this.categoryService.getCategories()
      .subscribe(categories => this.categories = categories);
  }

  ngOnInit() {
    this.getCategories();
  }

  searchByName(name_str: string) {
    this.router.navigate(['/products'], { queryParams: { name: name_str } });
  }

}
