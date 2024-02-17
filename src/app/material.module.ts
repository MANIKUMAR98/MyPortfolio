import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';



const material = [
    MatCardModule,
    MatDividerModule
];

@NgModule({
  exports: [material],
  imports: [material]
})
export class MaterialModule { }