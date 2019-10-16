import { Component, Input, OnInit } from '@angular/core';
import { Product } from "../../../../shared/models/product";
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'product-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  productImage: any;
  isImageLoading: boolean;

  @Input() product: Product;

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
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

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getImageFromService();
  }

}
