import {ApplicationRef, inject, Injectable, NgZone} from '@angular/core';
import { Firestore, collection, collectionData, doc, docData, setDoc, updateDoc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Product} from './models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private firestore = inject(Firestore);
  private ngZone = inject(NgZone);

  getProducts(): Observable<any[]> {
    return this.ngZone.runOutsideAngular(() => {
      const productsRef = collection(this.firestore, 'products');
      return collectionData(productsRef, { idField: 'id' });
    });
  }

  getProductById(productId: string): Observable<Product>{
    const productRef = doc(this.firestore, `product/${productId}`);
    return docData(productRef, {idField: 'id'}) as Observable<Product>;
  }

  addProduct(product: Product): Promise<void> {
    const productRef = doc(this.firestore, `products/${product.id}`);
    return setDoc(productRef, product);
  }

  updateStock(productId: string, newStock: number): Promise<void> {
    const productRef = doc(this.firestore, `products/${productId}`);
    return updateDoc(productRef, { stock: newStock });
  }

  deleteProduct(productId: string): Promise<void> {
    const productRef = doc(this.firestore, `products/${productId}`);
    return deleteDoc(productRef);
  }
}
