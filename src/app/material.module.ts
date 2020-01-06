import { NgModule } from '@angular/core';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  exports: [
    DragDropModule,
    MatGridListModule,
    MatSelectModule,
    MatIconModule,
    MatProgressSpinnerModule
  ]
})

export class MaterialModules {}
