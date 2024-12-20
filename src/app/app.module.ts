import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { AlbumsComponent } from './Components/albums/albums.component';
import { AddAlbumComponent } from './Components/Albums/add-album/add-album.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ListPhotosComponent } from './Components/list-photos/list-photos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AlbumsComponent,
    AddAlbumComponent,
    NotFoundComponent,
    ListPhotosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
