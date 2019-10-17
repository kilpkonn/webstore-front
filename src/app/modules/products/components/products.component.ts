import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../../../shared/models/product';
import { ProductService } from '../services/product.service';
import { listAnimation } from '../../../shared/animations/list-animations';
import { slider } from '../../../shared/animations/route-animations';

@Component({
  host: {
    '[@routeAnimations]': '',
    '(@routeAnimations.done)': 'onAnimationFinished()'
  },
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  animations: [slider, listAnimation]
})
export class ProductsComponent implements OnInit {
  show = false;
  products: Product[];
  private sortFunc = function(a: Product, b: Product) {
    return a.id - b.id;
  };

  constructor(private route: ActivatedRoute,
              private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  private getProducts() {
    this.route.queryParams.subscribe(queryParams => {
      this.productService.getFilteredProducts(queryParams)
        .subscribe(products => this.products = products.sort((a, b) => this.sortFunc(a, b)));
    });
  }

  onAnimationFinished() {
    setTimeout(() => this.show = true, 200);
  }

  removeProduct(product: Product) {
    this.productService.deleteProduct(product.id)
      .subscribe(data => {
        this.products.splice(this.products.indexOf(product), 1);
        // Verify by pulling new products?
      }, error => console.log(error));
  }

  trackElement(index: number, element: any) {
    return element ? element.id : null
  }

}
