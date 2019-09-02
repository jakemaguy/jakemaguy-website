import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RoastsPageComponent } from './roasts-page/roasts-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';

// Material Imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { BlogPostCreatorComponent } from './blog-post-creator/blog-post-creator.component'

// array to seperate material modules from regular ones
const materialImports = [
  BrowserAnimationsModule,
  MatDialogModule
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RoastsPageComponent,
    BlogPageComponent,
    BlogPostCreatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    materialImports
  ],
  entryComponents: [BlogPostCreatorComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
