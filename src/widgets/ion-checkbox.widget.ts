import { Component } from '@angular/core';
import { CheckboxWidget } from 'angular2-schema-form';

@Component({
  selector: 'ion-sf-checkbox-widget',
  template: `<ion-item>
  <ion-label fixed>{{ schema.title }}</ion-label>
  <div *ngIf="schema.type !== 'array'">
    <ion-checkbox checked="{{ control.value }}"></ion-checkbox>
  </div>
  <input *ngIf="schema.readOnly" [attr.name]="name" type="hidden" [formControl]="control">
</ion-item>`
})
export class IonCheckboxWidget extends CheckboxWidget {
}
