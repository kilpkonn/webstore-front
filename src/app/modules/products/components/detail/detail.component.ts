import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../shared/models/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../../../shared/services/authentication.service';
import { User } from '../../../../shared/models/user';
import { Category } from '../../../../shared/models/category';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'product-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  product: Product;
  user: User;
  isEditingMode = false;
  categories: Category[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private productService: ProductService,
              private categoryService: CategoryService,
              private authenticationService: AuthenticationService
  ) {
    this.user = authenticationService.currentUserValue;
    authenticationService.getUser.subscribe((user) => this.user = user);
  }

  getProduct() {
    this.route.params.subscribe(params => {
      this.productService.getProductById(params.id)
        .subscribe((product) => {
          this.product = product;
        });
    });
  }

  updateProduct() {
    if (!this.isValidProduct(this.product)) {
      // TODO: Show error?
      console.log(this.categories.indexOf(this.product.category) >= 0)
      console.log(this.product)
      return;
    }
    this.productService.updateProduct(this.product.id, this.product)
      .subscribe((product) => this.product = product);
    this.isEditingMode = false;
  }

  editProduct() {
    this.isEditingMode = true;
    this.categoryService.getCategories()
      .subscribe((categories) => this.categories = categories);
  }

  categoryCompare(o1: Category, o2: Category) {
    return o1.id === o2.id;
  }

  getDescriptionRowsCount(desc: string) {
    return Math.max(desc.split('\n').length, 10);
  }

  ngOnInit() {
    this.getProduct();
  }

  private isValidProduct(product: Product) {
    return typeof product.name !== 'undefined'
      && this.categories.filter((cat) => cat.id === product.category.id).length > 0
      && product.amount > 0
      && product.priceLow > 0
      && product.priceHigh >= product.priceLow;
  }

}
