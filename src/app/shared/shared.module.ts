import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

const MAT_COMPONENTS = [
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule
];

@NgModule({
    imports: [...MAT_COMPONENTS, CommonModule],
    exports: [...MAT_COMPONENTS]
})
export class SharedModule { }
