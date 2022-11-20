import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../site-framework/category';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) { }
  
  // api for getting the category type---
  getCategories():Observable<Category> {
    const categoriesUrl = 'http://localhost:3000/categories';
    return this.http.get<Category>(categoriesUrl);
  }

  getAllProducts():Observable<Product> {
    const categoriesUrl = 'http://localhost:3000/products';
    return this.http.get<Product>(categoriesUrl);
  }

  createProduct(productBody: any): Observable<Product> {
    const productUrl = 'http://localhost:3000/products';
    return this.http.post<Product>(productUrl, productBody); // it returns an observable.
  }

  viewProduct(productId: any): Observable<Product> {
    const productUrl = 'http://localhost:3000/products/' + productId;
    return this.http.get<Product>(productUrl); // it returns an observable.
  }

  updateProduct(productId: any, productBody: any): Observable<Product> {
    const productUrl = 'http://localhost:3000/products/' + productId;
    return this.http.put<Product>(productUrl, productBody); // it returns an observable.
  }

  deleteProduct(productId: any): Observable<Product> {
    const productUrl = 'http://localhost:3000/products/' + productId;
    return this.http.delete<Product>(productUrl); // it returns an observable.
  }

  searchCategoryProduct(categoryId: any): Observable<Product> {
    const productUrl = 'http://localhost:3000/products?categoryId=' + categoryId;
    return this.http.get<Product>(productUrl); // it returns an observable.
  }

  searchDateProduct(dateParam: any): Observable<Product> {
    const productUrl = 'http://localhost:3000/products?date=' + dateParam;
    return this.http.get<Product>(productUrl); // it returns an observable.
  }
}
