
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
   // CommonModule,
   // RouterModule,
   // HttpClientModule,
   // FormsModule
  ],
  exports: [
    //FormsModule,
    //RouterModule,
    //HttpClientModule,
    HeaderComponent,
    FooterComponent]
})
export class CoreModule { }
