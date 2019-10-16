import { Component, OnInit } from '@angular/core';
import { Category } from '../../../../shared/models/category';
import { CategoryService } from '../../services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'products-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
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

  searchByName(nameStr: string) {
    this.router.navigate(['/products'], { queryParams: { name: nameStr } });
  }

}
