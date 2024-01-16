'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phoneList').
  component('phoneList', {
    template: `<ng-include src="'phone-list/phone-list.template.html'"></ng-include>`,
    controller: ['phone',
      function PhoneListController(phone) {
        phone.query().subscribe(phones => {
          this.phones = phones;
        });
        this.orderProp = 'age';
      }
    ]
  });
