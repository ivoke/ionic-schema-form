import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';
import { SchemaFormModule } from 'angular2-schema-form';

import {
  IonArrayWidget,
  IonButtonWidget,
  IonCheckboxWidget,
  IonIntegerWidget,
  IonObjectWidget,
  IonRadioWidget,
  IonRangeWidget,
  IonSelectWidget,
  IonStringWidget,
  IonTextAreaWidget
} from './widgets';

const WIDGETS = [
  IonArrayWidget,
  IonButtonWidget,
  IonCheckboxWidget,
  IonIntegerWidget,
  IonObjectWidget,
  IonRadioWidget,
  IonRangeWidget,
  IonSelectWidget,
  IonStringWidget,
  IonTextAreaWidget
];

@NgModule({
  imports: [CommonModule, IonicModule, SchemaFormModule],
  declarations: WIDGETS,
  entryComponents: WIDGETS,
  exports: WIDGETS
})
export class IonSchemaFormModule {
}
