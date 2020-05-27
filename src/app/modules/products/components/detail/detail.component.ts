import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../shared/models/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../../../shared/services/authentication.service';
import { User } from '../../../../shared/models/user';

@Component({
  selector: 'product-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  product: Product;
  user: User;
  isEditingMode = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private productService: ProductService,
              private authenticationService: AuthenticationService
  ) {
    this.user = authenticationService.currentUserValue;
    authenticationService.getUser.subscribe(user => this.user = user);
  }

  getProduct() {
    this.route.params.subscribe(params => {
      this.productService.getProductById(params.id)
        .subscribe(product => {
          this.product = product;
        });
    });
  }

  ngOnInit() {
    this.getProduct();
  }

}
