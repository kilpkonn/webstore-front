import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../../../shared/models/product';
import { ProductService } from '../services/product.service';
import { listAnimation } from "../../../shared/animations/list-animations";
import { slider } from "../../../shared/animations/route-animations";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

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

  constructor(private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer,
              private route: ActivatedRoute,
              private productService: ProductService) {
    this.matIconRegistry.addSvgIcon(
      'add_circle',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/add_circle.svg')
    );
  }

  ngOnInit() {
    this.getProducts();
  }

  private getProducts() {
    this.route.queryParams.subscribe(queryParams => {
      if (typeof queryParams.category !== 'undefined') {
        this.productService.getFilteredProducts(queryParams.category)
          .subscribe(products => this.products = products);
      } else {
        this.productService.getProducts()
          .subscribe(products => this.products = products);
      }
    });
  }

  onAnimationFinished() {
    this.show = true;
  }

  removeProduct(product: Product) {
    this.productService.deleteProduct(product.id)
      .subscribe(data => {
        this.products.splice(this.products.indexOf(product), 1);
        // Verify by pulling new products?
      }, error => console.log(error));
  }

}
