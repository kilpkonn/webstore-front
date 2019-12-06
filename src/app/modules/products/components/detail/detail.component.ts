import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../shared/models/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'product-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  product: Product;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private productService: ProductService) {
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
