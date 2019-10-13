import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RoastsPageComponent } from './roasts-page/roasts-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
// Material Imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InformationCardComponent } from './components/information-card/information-card.component';
import { CardDataComponent } from './components/information-card/card_data/card_data';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { BlogPageDetailComponent } from './blog-page/blog-page-detail/blog-page-detail.component';
import { BlogPostRoutingModule } from './blog-page/blog-page-routing.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AngularFireStorageModule, StorageBucket } from '@angular/fire/storage';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RoastsPageComponent,
    BlogPageComponent,
    InformationCardComponent,
    CardDataComponent,
    BlogPageDetailComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase, 'jake-maguy'),
    AngularFirestoreModule,
    AngularFireStorageModule,
    BrowserModule,
    AppRoutingModule,
    BlogPostRoutingModule,
    NgbModule,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient })
  ],
  entryComponents: [],
  providers: [
    { provide: StorageBucket, useValue: environment.firebase.storageBucket }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
