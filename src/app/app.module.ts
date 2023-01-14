import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlbumsComponent } from './albums/albums.component';
import { HeaderComponent } from './base-components/header/header.component';
import { FooterComponent } from './base-components/footer/footer.component';
import { AlbumCardComponent } from './albums/album-card/album-card.component';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { PhotosComponent } from './photos/photos.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { PhotoCardComponent } from './photos/photo-card/photo-card.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    HeaderComponent,
    FooterComponent,
    AlbumCardComponent,
    PhotosComponent,
    PhotoCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
