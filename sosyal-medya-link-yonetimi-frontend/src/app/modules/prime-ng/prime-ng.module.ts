import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule} from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FileUploadModule } from 'primeng/fileupload';
import { TagModule } from 'primeng/tag';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { PaginatorModule } from 'primeng/paginator';
import { DividerModule } from 'primeng/divider';
import { SliderModule } from 'primeng/slider';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [],
  imports: [],
  exports:[
    TableModule,
    CommonModule,
    RippleModule,
    ButtonModule,
    DropdownModule,
    DialogModule, 
    ToastModule, 
    ToolbarModule, 
    ConfirmDialogModule, 
    InputTextareaModule, 
    FileUploadModule,
    TagModule, 
    RadioButtonModule, 
    RatingModule, 
    InputTextModule, 
    InputNumberModule,
    PaginatorModule,
    DividerModule,
    SliderModule
  ]
})
export class PrimeNgModule { }
