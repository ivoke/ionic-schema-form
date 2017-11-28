# Ionic Schema Forms
Schema forms for Ionic v2 and up using the [angular2-schema-form](https://github.com/makinacorpus/angular2-schema-form) module.

## Installation

`npm install ionic-schema-form`

Import the ionic-schema-form module:

```typescript
import { NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SchemaFormModule, WidgetRegistry } from "angular2-schema-form";
import { IonWidgetRegistry, IonSchemaFormModule } from "ionic-schema-form";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    SchemaFormModule,
    IonSchemaFormModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    {provide: WidgetRegistry, useClass: IonWidgetRegistry}
  ]
})
export class AppModule {}
```

