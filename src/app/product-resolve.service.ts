import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Product } from './_model/product.model';
import { ProductService } from './_services/product.service';
import { map } from 'rxjs/operators';
import { ImageProcessingService } from './image-processing.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolveService implements Resolve<Product> {

  constructor(private productService: ProductService,
    private imageProcessingService: ImageProcessingService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> {
    
    const id = route.paramMap.get("productId");

    if(id){
      //Fetch Details
      return this.productService.getProductDetailsById(id).pipe(
        map(p => this.imageProcessingService.createImages(p))
      );
    } else{
      //Return empty
      return of(this.getProductDetails());
    }
  }

  getProductDetails(){
    return{
    productId: null,
    productName: "",
    productDescription: "",
    productCategory: "",
    productDiscountedPrice: 0,
    productActualPrice: 0,
    preview: "",
    productImages: []
    };
  }
}
