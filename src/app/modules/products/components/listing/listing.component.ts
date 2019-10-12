import { Component, Input, OnInit } from '@angular/core';
import { Product } from "../../../../shared/models/product";

@Component({
  selector: 'product-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  @Input() product: Product

  constructor() { }

  ngOnInit() {
  }

}
