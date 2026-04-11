import { inject, Injectable } from '@angular/core';
import { Api } from './api';
import { GET_ROLES } from './UrlPaths';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  api = inject(Api);

  getData(){
    return this.api.getData();
  }
  getRoles(){
    return this.api.get(GET_ROLES);
  }
}
