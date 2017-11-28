import { Component } from '@angular/core';
import { IntegerWidget } from 'angular2-schema-form';

@Component({
  selector: 'ion-sf-integer-widget',
  template: `<ion-item>
  <ion-label [attr.for]="id">{{ schema.title }}</ion-label>
  <ion-input type="number" [attr.readonly]="schema.readOnly?true:null"
    [formControl]="control"
    [attr.min]="schema.minimum"
    [attr.max]="schema.maximum"
    [attr.placeholder]="schema.placeholder"
    [attr.maxLength]="schema.maxLength || null"
    [attr.minLength]="schema.minLength || null"
  ></ion-input>
</ion-item>`
})
export class IonIntegerWidget extends IntegerWidget {}
