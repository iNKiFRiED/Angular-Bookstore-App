import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { InternalErrorComponent } from '../shared/internal-error';
import { NotFoundComponent } from '../shared/not-found';

const moduleDeclarations = [
  CommonModule,
  RouterModule
];

const declarations = [
  NotFoundComponent,
  InternalErrorComponent
];

@NgModule({
  imports: [
    ...moduleDeclarations
  ],
  exports: [
    ...moduleDeclarations,
    ...declarations,
  ],
  declarations
})
export class SharedModule { }
