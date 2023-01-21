import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlbumsComponent } from './albums/albums.component';
import { HeaderComponent } from './base-components/header/header.component';
import { FooterComponent } from './base-components/footer/footer.component';
import { AlbumCardComponent } from './albums/album-card/album-card.component';
import { HttpClientModule } from '@angular/common/http';
import { PhotosComponent } from './photos/photos.component';
import { PhotoCardComponent } from './photos/photo-card/photo-card.component';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';

// Angular material componenets
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

const routes: Routes = [
  { path: '',redirectTo:'home', pathMatch: 'full' },
  { path: 'home', component: AlbumsComponent },
  { path: 'photos/:albumId', component: PhotosComponent },
  { path: '**', component: ErrorComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    HeaderComponent,
    FooterComponent,
    AlbumCardComponent,
    PhotosComponent,
    PhotoCardComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
