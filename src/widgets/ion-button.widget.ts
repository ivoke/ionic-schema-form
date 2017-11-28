import { Component } from '@angular/core';
import { ButtonWidget } from 'angular2-schema-form';

@Component({
  selector: 'ion-sf-button-widget',
  template: `<button ion-button (click)="button.action($event)">{{ button.label }}</button>`
})
export class IonButtonWidget extends ButtonWidget {}
