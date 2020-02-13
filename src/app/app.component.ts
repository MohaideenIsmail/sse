import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  components = [
    {
      id: 1,
      name: "1",
      visible: true
    },
    {
      id: 2,
      name: "2",
      visible: true
    },
    {
      id: 3,
      name: "3",
      visible: true
    },
    {
      id: 4,
      name: "4",
      visible: true
    }
  ];

  toggleComponent(ev) {
    let isAllHidden = this.components.filter((item) => {
      return item.visible;
    });
    if (isAllHidden.length === 1 && isAllHidden[0].id === ev.id) {
      alert("Not allowed to hide all columns");
    } else {
      this.components.forEach((item) => {
        if (ev.id === item.id) {
          item.visible = !item.visible;
        }
      });
    } 
  }
}
