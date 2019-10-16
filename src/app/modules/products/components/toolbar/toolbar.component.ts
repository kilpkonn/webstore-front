import { Component, OnInit } from '@angular/core';
import { Category } from '../../../../shared/models/category';
import { CategoryService } from '../../services/category.service';
import { Router } from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {HttpClient, HttpParams} from '@angular/common/http';

@Component({
  selector: 'products-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  categories: Category[];
  filterForm = new FormGroup({
    category: new FormControl(''),
    name: new FormControl(''),
    sort: new FormControl(''),
    order: new FormControl('')
  })

  constructor(private http: HttpClient,
              private categoryService: CategoryService,
              private router: Router) {
  }

  onSubmit() {
    this.router.navigate(['products'], {queryParams: {
        category: this.filterForm.value.category,
        name: this.filterForm.value.name
        // sort: this.filterForm.value.sort,
        // order: this.filterForm.value.order
    }});
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
