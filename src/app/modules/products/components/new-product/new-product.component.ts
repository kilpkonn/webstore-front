import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../../../shared/models/product';
import { Category } from '../../../../shared/models/category';
import { CategoryService } from '../../services/category.service';
import { FileInput } from 'ngx-material-file-input';

@Component({
  selector: 'new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  public submitted: boolean;
  public product = new Product();
  categories: Category[];

  readonly maxFileSize = 104857600; // 100 MB
  private imageFile: FileInput;

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
    return typeof product.name !== 'undefined'
      && this.categories.indexOf(product.category) >= 0
      && product.amount > 0
      && product.price > 0
      && (this.imageFile.files.length === 0
          || (this.imageFile.files.length === 0
          && this.imageFile.files[1].size <= this.maxFileSize));
  }
}
