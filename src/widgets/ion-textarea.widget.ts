import { Component } from '@angular/core';
import { TextAreaWidget } from 'angular2-schema-form';

@Component({
  selector: 'ion-sf-textarea-widget',
  template: `<ion-item>
  <ion-label [attr.for]="id">{{ schema.title }}</ion-label>
  <ion-textarea [attr.readonly]="schema.readOnly"
                [attr.placeholder]="schema.placeholder"
		[attr.maxLength]="schema.maxLength || null"
                [attr.minLength]="schema.minLength || null"
                [formControl]="control"
  ></ion-textarea>
</ion-item>`
})
export class IonTextAreaWidget extends TextAreaWidget {}
