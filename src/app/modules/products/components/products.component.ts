import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../../../shared/models/product';
import { ProductService } from '../services/product.service';
import { listAnimation } from "../../../shared/animations/list-animations";
import { slider } from "../../../shared/animations/route-animations";

@Component({
  host: {
    '[@routeAnimations]': '',
    '(@routeAnimations.done)': "onAnimationFinished()"
  },
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  animations: [slider, listAnimation]
})
export class ProductsComponent implements OnInit {
  show: boolean = false;
  products: Product[];

  constructor(private route: ActivatedRoute,
              private productService: ProductService) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(queryParams => {
      if (typeof queryParams.category !== 'undefined') {
        this.productService.getFilteredProducts(queryParams.category)
          .subscribe(products => this.products = products);
      } else {
        this.productService.getProducts()
          .subscribe(products => this.products = products);
      }
    });
    // this.getProducts();
  }

  onAnimationFinished () {
    this.show = true;
  }

}
