import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RoastsPageComponent } from './roasts-page/roasts-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { BlogPostCreatorComponent } from './blog-post-creator/blog-post-creator.component'
// Material Imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input'; 


// array to seperate material modules from regular ones
const materialImports = [
  BrowserAnimationsModule,
  MatDialogModule,
  MatInputModule
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RoastsPageComponent,
    BlogPageComponent,
    BlogPostCreatorComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase, 'jmaguy-personal-website'),
    AngularFirestoreModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    materialImports
  ],
  entryComponents: [BlogPostCreatorComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
