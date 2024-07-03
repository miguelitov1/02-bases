import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor( private dbzService: DbzService ) {}

  get characters(): Character[] {
    return [ ...this.dbzService.characters ]; //si viene de una base de datos no hace falta que haga el spreat (...) ya que en ese caso al modificar characters no modificaria los valores originales.
  }

  onDeleteCharacter( id: string ): void {
    this.dbzService.onDeleteCharacterById( id );
  }

  onNewCharacter( character:Character ){
    this.dbzService.addCharacter( character );
  }

}
