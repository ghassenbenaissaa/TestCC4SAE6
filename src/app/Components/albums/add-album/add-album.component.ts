import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlbumService } from 'src/app/Services/album.service';


@Component({
  selector: 'app-add-album',
  templateUrl: './add-album.component.html',
  styleUrls: ['./add-album.component.css']
})
export class AddAlbumComponent {

  constructor(private _router:Router, private _albumservice:AlbumService){}
  album : FormGroup = new FormGroup ({
    title : new FormControl('',[Validators.required,Validators.pattern('[a-z A-z 0-9]*')]),
    archived : new FormControl('',[Validators.required]),
    coverPicture : new FormControl('',[Validators.minLength(5)]),
    photo : new FormControl('',[Validators.required])
  })
  get title(){
    return this.album.get('title');
  }
  get archived(){
    return this.album.get('archived');
  }
  get coverPicture(){
    return this.album.get('coverPicture');
  }
  get photo(){
    return this.album.get('photo');
  }
  
add(){
  
  //console.log(this.album.value);
  console.log(this.album.getRawValue);
  this._albumservice.addalbum(this.album.getRawValue())
  this._router.navigate(['/albums'])
  /*this.album.patchValue({
    name:"test"
  })*/
  this.album.reset()
}

}
