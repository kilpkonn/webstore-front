import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../shared/models/product';
import { ProductService} from '../../services/product.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'product-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  product: Product;
  productImage: any;
  isImageLoading: boolean;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private productService: ProductService ) { }

  getProduct() {
    this.route.params.subscribe(params => {
      this.productService.getProductById(params.id)
        .subscribe(product => {
          this.product = product;
          this.getImageFromService();
        });
    });
  }

  createImageFromBlob(image: Blob) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      this.productImage = reader.result;
    }, false);

    if (image) {
      reader.readAsDataURL(image);
    }
  }

  getImageFromService() {
    this.isImageLoading = true;
    this.productService.getImage(this.product.id).subscribe(data => {
      this.createImageFromBlob(data);
      this.isImageLoading = false;
    }, error => {
      this.isImageLoading = false;
      console.log(error);
    });
  }

  ngOnInit() {
    this.getProduct();
  }

}
