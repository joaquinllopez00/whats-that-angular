import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResultsComponent } from './results/results.component';
import { RemoveHtmlPipe } from './remove-html.pipe';
import { FixTitlePipe } from './fix-title.pipe';

@NgModule({
  declarations: [AppComponent, ResultsComponent, RemoveHtmlPipe, FixTitlePipe],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
