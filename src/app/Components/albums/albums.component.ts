import { Component } from '@angular/core';
import { Album } from 'src/app/Models/Album';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from 'src/app/Services/album.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent {
  albums : Album[] = [];
  constructor(private _activated: ActivatedRoute, private _albumService: AlbumService) {
    this.albums=this._albumService.albums;
  }
}
