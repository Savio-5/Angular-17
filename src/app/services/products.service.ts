import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { PaginationParams, Products } from '../Types';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private apiService: ApiService) { }

  getProducts = (url: string, params: PaginationParams): Observable<Products> => {
    return this.apiService.get(url, {
      params: {
        page: params.page.toString(),
        perPage: params.perPage.toString()
      },
      responseType: 'json'
    });
  }
}
