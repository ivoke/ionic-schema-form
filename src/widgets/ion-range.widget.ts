import { Component } from '@angular/core';
import { RangeWidget } from 'angular2-schema-form';

@Component({
  selector: 'ion-sf-range-widget',
  template: `<ion-item>
  <ion-label [attr.for]="id">{{ schema.title }}</ion-label>
  <ion-range [attr.id]="id" [formControl]="control" [attr.min]="schema.minimum" [attr.max]="schema.maximum" [attr.disabled]="schema.readOnly?true:null">
    <ion-label range-left>{{ schema.minimum }}</ion-label>
    <ion-label range-right>{{ schema.maximum }}</ion-label>
  </ion-range>
  <input *ngIf="schema.readOnly" [attr.name]="name" type="hidden">
</ion-item>`
})
export class IonRangeWidget extends RangeWidget {}

