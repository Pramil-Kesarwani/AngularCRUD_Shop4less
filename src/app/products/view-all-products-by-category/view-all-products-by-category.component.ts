import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-view-all-products-by-category',
  templateUrl: './view-all-products-by-category.component.html',
  styleUrls: ['./view-all-products-by-category.component.css']
})
export class ViewAllProductsByCategoryComponent implements OnInit {

  searchCategory:any;
  productList: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService:ProductsService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      console.log(data);
      this.searchCategory = data['id']
      console.log(this.searchCategory);
      
      this.productService.searchCategoryProduct(this.searchCategory).subscribe({
        next: data => {
          this.productList = data;
          console.log(this.productList);
          
        },
        error: error => {
          console.log(error);
          
        }
      })

    })

  }

}
