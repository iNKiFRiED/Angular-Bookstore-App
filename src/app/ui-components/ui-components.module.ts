import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { LoaderComponent } from './loader/loader.component';

@NgModule({
    imports: [
        SharedModule
    ],
    exports: [
        LoaderComponent
    ],
    declarations: [
        LoaderComponent
    ]
})
export class UIComponentsModule { }
