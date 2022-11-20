import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css'],
})
export class DeleteProductComponent implements OnInit {
  productId = 0;

  constructor(private activatedRoute: ActivatedRoute,private productService:ProductsService) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      console.log(data);
      this.productId = data['id'];
      console.log(this.productId);

      this.productService.deleteProduct(this.productId).subscribe({
        next: data => {
          console.log(data);
          console.log("deleted product");
          
        },
        error: error => {
          console.log(error);
          
        }
      })

    });
  }
}
