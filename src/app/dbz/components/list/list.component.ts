import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [{
    id: 'lakjsda2425454',
    name: 'Trunks',
    power: 100
  }];

  onDeleteCharacterById( id: string ): void {
    this.onDelete.emit( id );
  }


}
