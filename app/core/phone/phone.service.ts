import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

declare const angular: angular.IAngularStatic;
import { downgradeInjectable } from '@angular/upgrade/static';

export interface PhoneData {
  name: string;
  snippet: string;
  images: string[];
  age: number;
}

@Injectable()
export class Phone {
  constructor(@Inject(HttpClient) private http: HttpClient) { }
  query(): Observable<PhoneData[]> {
    return this.http.get<PhoneData[]>(`phones/phones.json`);
  }
  get(id: string): Observable<PhoneData> {
    return this.http.get<PhoneData>(`phones/${id}.json`);
  }
}

angular.module('core.phone')
  .factory('phone', downgradeInjectable(Phone));


/*
angular.
  module('core.phone').
  factory('phone', ['$resource',
    ($resource: angular.resource.IResourceService) =>
      $resource('phones/:phoneId.json', {}, {
        query: {
          method: 'GET',
          params: {phoneId: 'phones'},
          isArray: true
        }
      })
  ]);
  */
