import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../../../shared/models/product';
import { Category } from '../../../../shared/models/category';
import { CategoryService } from '../../services/category.service';
import { FileInput } from 'ngx-material-file-input';
import { ImageService } from '../../services/image.service';

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
  public imageFile: FileInput;

  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private imageService: ImageService) {
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
    this.product.imageUrl = this.imageFile.files[0].name;
    this.imageService.uploadImage(this.imageFile.files[0])
      .subscribe(data => {
        this.product.imageUrl = data.url;
        this.productService.createProduct(this.product)
          .subscribe(product => console.log(product), err => console.log(err));
        this.product = new Product();
      }, error => console.log(error));
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
        || (this.imageFile.files.length === 1
          && this.imageFile.files[0].size <= this.maxFileSize));
  }
}
