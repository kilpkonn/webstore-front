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
    this.isEditingMode = false;
  }

  editProduct() {
    this.isEditingMode = true;
    this.categoryService.getCategories()
      .subscribe((categories) => this.categories = categories);
  }

  ngOnInit() {
    this.getProduct();
  }

}
