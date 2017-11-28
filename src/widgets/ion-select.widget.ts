import { Component } from '@angular/core';
import { SelectWidget } from 'angular2-schema-form';

@Component({
  selector: 'ion-sf-select-widget',
  template: `<ion-item>
  <ion-label>{{ schema.title }}</ion-label>
  <ion-select *ngIf="schema.type !== 'array'" [(ngModel)]="control.value" [attr.name]="name" [attr.disabled]="schema.readOnly">
    <ion-option *ngFor="let option of schema.oneOf" [value]="option.enum[0]">{{ option.title }}</ion-option>
  </ion-select>
  <ion-select *ngIf="schema.type === 'array'" multiple [formControl]="control" [attr.name]="name" [attr.disabled]="schema.readOnly">
    <ion-option *ngFor="let option of schema.oneOf" [value]="option.enum[0]">{{ option.title }}</ion-option>
  </ion-select>
  <input *ngIf="schema.readOnly" [attr.name]="name" type="hidden" [formControl]="control">
</ion-item>`
})
export class IonSelectWidget extends SelectWidget {}
