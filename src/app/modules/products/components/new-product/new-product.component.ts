import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../../../shared/models/product';
import { Category } from '../../../../shared/models/category';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  private submitted: boolean;
  private product = new Product();
  categories: Category[];

  constructor(private productService: ProductService,
              private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.categoryService.getCategories()
      .subscribe(categories => this.categories = categories);
  }

  newProduct(): void {
    this.submitted = false;
    this.product = new Product();
  }


  save() {
    this.productService.createProduct(this.product)
      .subscribe(data => console.log(data), error => console.log(error));
    this.product = new Product();
  }

  onSubmit() {
    if (!this.isValidProduct(this.product)) {
      // TODO: Display error
      return;
    }
    this.submitted = true;
    this.save();
  }

  private isValidProduct(product: Product) {
    return product.name !== 'undefined'
      && this.categories.indexOf(product.category) >= 0
      && product.amount > 0
      && product.price > 0;
  }
}
