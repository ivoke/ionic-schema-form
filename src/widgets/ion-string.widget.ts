import { Component } from '@angular/core';
import { StringWidget } from 'angular2-schema-form';

@Component({
  selector: 'ion-sf-string-widget',
  template: `<input *ngIf="this.getInputType()==='hidden'; else notHiddenFieldBlock" [attr.name]="name" type="hidden" [formControl]="control">
<ng-template #notHiddenFieldBlock>
  <ion-item>
    <ion-input [attr.type]="this.getInputType()"
      placeholder="{{ schema.title }}"
      [attr.readonly]="(schema.widget.id!=='color') && schema.readOnly?true:null"
      [attr.id]="id"
      [formControl]="control" [attr.placeholder]="schema.placeholder"
      [attr.maxLength]="schema.maxLength || null"
      [attr.minLength]="schema.minLength || null"
      [attr.disabled]="(schema.widget.id=='color' && schema.readOnly)?true:null"
    ></ion-input>
  </ion-item>
</ng-template>`
})
export class IonStringWidget extends StringWidget {}
