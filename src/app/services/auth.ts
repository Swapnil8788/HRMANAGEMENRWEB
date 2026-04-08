import { inject, Injectable } from '@angular/core';
import { Api } from './api';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  api = inject(Api);

  getData(){
    return this.api.getData();
  }
}
