import { Component, OnInit } from '@angular/core';
import { ProductService } from 'app/product.service';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {

  albumInfo;
  constructor(private productService : ProductService) { }

  ngOnInit() {
    this.productService.getAlbum(1).subscribe(response => 
      this.albumInfo = response);
  }

}
