import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import {MatTooltipModule} from '@angular/material/tooltip';

const material = [
    MatCardModule,
    MatDividerModule,
    MatTooltipModule
];

@NgModule({
  exports: [material],
  imports: [material]
})
export class MaterialModule { }