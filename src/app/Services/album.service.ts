import { Injectable } from '@angular/core';
import { Album } from '../Models/Album';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  albums : Album[] = [];
  constructor() { }

  addalbum ( album: Album){
    this.albums.push(album)
  }
}
