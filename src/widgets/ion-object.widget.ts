import { Component } from '@angular/core';
import { ObjectWidget } from 'angular2-schema-form';

@Component({
  selector: 'ion-sf-form-object',
  template: `<ion-list *ngFor="let fieldset of formProperty.schema.fieldsets">
  <ion-list-header *ngIf="fieldset.title">{{ fieldset.title }}</ion-list-header> 
  <div *ngFor="let fieldId of fieldset.fields">
    <sf-form-element [formProperty]="formProperty.getProperty(fieldId)"></sf-form-element>
  </div>
</ion-list>`
})
export class IonObjectWidget extends ObjectWidget {}
