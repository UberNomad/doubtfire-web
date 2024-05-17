import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-group-set-selector',
  templateUrl: './group-set-selector.component.html',
  styleUrls: ['./group-set-selector.component.scss'],
})
export class GroupSetSelectorComponent {
  @Input() unit;
  @Input() selectedGroupSet;
  @Output() onSelectGroupSet = new EventEmitter();

  selectGroupSet() {
    console.log('selectGroupSet from new called');
    this.onSelectGroupSet.emit(this.selectedGroupSet);
    console.log(this.selectedGroupSet);
  }
}
