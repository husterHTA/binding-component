import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Customer } from './Customer';
import { Product } from './Product';

@Injectable({
  providedIn: 'root'
})
export class MediatorService {

  constructor() { }

  //Sự kiện cập nhật customer
  private customerChangedSubject$ = new BehaviorSubject<Customer>();
  public customerChanged = this.customerChangedSubject$.asObservable();

  public eventCustomerChanged(customer: Customer) {
    this.customerChangedSubject$.next(customer);
  }

  //Sự kiện cập nhật product
  private productChangedSubject$ = new BehaviorSubject<Product>();
  public productChanged = this.productChangedSubject$.asObservable();

  public eventProductChanged(product: Product) {
    this.productChangedSubject$.next(product);
  }
}
