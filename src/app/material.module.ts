import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import {MatTableDataSource} from '@angular/material';


@NgModule({
   imports: [MatButtonModule, MatChipsModule],
   exports: [MatButtonModule, MatChipsModule]
})

export class MaterialModule {

}
