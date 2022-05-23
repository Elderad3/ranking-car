import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { RankingMainComponent } from './pages/ranking/ranking-main/ranking-main.component';
import { SharedModule } from './shared/chared.module';
import { RankingDetailComponent } from './pages/ranking/ranking-detail/ranking-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    RankingMainComponent,
    RankingDetailComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
