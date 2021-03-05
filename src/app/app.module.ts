import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TextstoreComponent } from './textstore/textstore.component';
import { TranslateComponent } from './translate/translate.component';
import {Routes, RouterModule} from '@angular/router';

const appRoutes: Routes = [
  {path: '', component: TranslateComponent},
  {path: 'stored', component: TextstoreComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TextstoreComponent,
    TranslateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
