import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './Components/albums/albums.component';
import { AddAlbumComponent } from './Components/Albums/add-album/add-album.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';

const routes: Routes = [
  {path: 'albums',component:AlbumsComponent},
  {path: 'addAlbum',component:AddAlbumComponent},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
