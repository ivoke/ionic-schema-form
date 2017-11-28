import { Component } from '@angular/core';
import { RadioWidget } from 'angular2-schema-form';

@Component({
  selector: 'ion-sf-radio-widget',
  template: `<ion-list radio-group>
  <ion-list-header>{{ schema.title }}</ion-list-header>
  <ion-item *ngFor="let option of schema.oneOf">
    <ion-label>{{ option.title }}</ion-label>
    <ion-radio [attr.name]="name" value="{{ control.value }}" [attr.disabled]="schema.readOnly"></ion-radio>
  </ion-item>
  <input *ngIf="schema.readOnly" [attr.name]="name" type="hidden" [formControl]="control">
</ion-list>` 
})
export class IonRadioWidget extends RadioWidget {}

