import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncrementComponent } from './increment/increment.component';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { DoghnutComponent } from './doghnut/doghnut.component';
 


@NgModule({
  declarations: [
    IncrementComponent,
    DoghnutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule
  ],
  exports: [
    IncrementComponent,
    DoghnutComponent
  ]
})
export class ComponentsModule { }
