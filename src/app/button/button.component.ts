import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Output() onSelection = new EventEmitter();

  @Input() item;

  buttons = [
      {
        id: 1,
        name: "1"
      },
      {
        id: 2,
        name: "2"
      },
      {
        id: 3,
        name: "3"
      },
      {
        id: 4,
        name: "4"
      }
    ];
    
  constructor() { }

  ngOnInit() {
  }

  onSelect(item) {
    this.onSelection.emit(item);
  }

}
