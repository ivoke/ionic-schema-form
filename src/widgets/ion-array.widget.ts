import { Component } from '@angular/core';
import { ArrayWidget } from 'angular2-schema-form';

@Component({
  selector: 'ion-sf-array-widget',
  template: `<ion-list>
  <ion-list-header>{{ schema.title }}</ion-list-header>
  <ion-item *ngFor="let itemProperty of formProperty.properties; let i=index; trackBy:trackByIndex">
    <sf-form-element [formProperty]="itemProperty"></sf-form-element>
    <button ion-button color="danger" (click)="removeItem(i)" item-end outline icon-only>
      <ion-icon name='remove-circle' is-active="false"></ion-icon>
    </button>
  </ion-item>
  <button ion-button icon-only color="secondary" (click)="addItem()">
    <ion-icon name="add-circle" is-active="false"></ion-icon>
  </button>
</ion-list>`
})
export class IonArrayWidget extends ArrayWidget {}
