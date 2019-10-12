import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../shared/models/product';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { listAnimation } from "../../../shared/animations/list-animations";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  animations: [listAnimation]
})
export class ProductsComponent implements OnInit {
  @Input() show: boolean = false;
  products: Product[];
  hasCat: boolean;

  constructor(private route: ActivatedRoute, private productService: ProductService) {
  }

  showProducts(): void {
    this.show = true;
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

}
