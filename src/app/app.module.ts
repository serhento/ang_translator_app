import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TextstoreComponent } from './textstore/textstore.component';
import { TranslateComponent } from './translate/translate.component';
import {Routes, RouterModule} from '@angular/router';
import { TranslateItemComponent } from './translate-item/translate-item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const appRoutes: Routes = [
  {path: '', component: TextstoreComponent},
  {path: 'item/:id', component: TranslateItemComponent},
  {path: 'translate', component: TranslateComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TextstoreComponent,
    TranslateComponent,
    TranslateItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
