import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-add-caracter',
  templateUrl: './add-caracter.component.html',
  styleUrls: ['./add-caracter.component.css']
})
export class AddCaracterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    id: '',
    name: '',
    power: 0
  };

  emitCharacter(): void {

    if (this.character.name.trim().length === 0) return;
    if (this.character.power <= 0) return;

    this.onNewCharacter.emit({ ...this.character });

    this.character = { id: '', name: '', power: 0 };

  }

}
