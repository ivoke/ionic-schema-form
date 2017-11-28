import { DefaultWidgetRegistry } from 'angular2-schema-form';

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

export class IonWidgetRegistry extends DefaultWidgetRegistry {
  constructor() {
    super();
    this.register('array', IonArrayWidget);
    this.register('object', IonObjectWidget);

    this.register('button', IonButtonWidget);
    this.register('radio', IonRadioWidget);
    this.register('range', IonRangeWidget);
    this.register('select', IonSelectWidget);
    this.register('textarea', IonTextAreaWidget);

    this.register('integer', IonIntegerWidget);
    this.register('number', IonIntegerWidget);

    this.register('checkbox', IonCheckboxWidget);
    this.register('boolean', IonCheckboxWidget);

    this.register('string', IonStringWidget);
    this.register('search', IonStringWidget);
    this.register('tel', IonStringWidget);
    this.register('url', IonStringWidget);
    this.register('email', IonStringWidget);
    this.register('password', IonStringWidget);
    this.register('color', IonStringWidget);
    this.register('date', IonStringWidget);
    this.register('date-time', IonStringWidget);
    this.register('time', IonStringWidget);
  }
}
