import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatChipsModule} from '@angular/material/chips';

const material = [
    MatCardModule,
    MatDividerModule,
    MatTooltipModule,
    MatExpansionModule,
    MatChipsModule
];

@NgModule({
  exports: [material],
  imports: [material]
})
export class MaterialModule { }