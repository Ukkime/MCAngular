import { Component } from '@angular/core';

@Component({
  selector: 'app-swipe-test',
  templateUrl: './swipe-test.component.html',
  styleUrl: './swipe-test.component.css',
})
export class SwipeTestComponent {
  items = [
    { name: 'Item 1', swiped: false },
    { name: 'Item 2', swiped: false },
    { name: 'Item 3', swiped: false },
    { name: 'Item 4', swiped: false },
  ];

  onSwipeLeft(index: number) {
    this.items[index].swiped = true;
  }

  onSwipeRight(index: number) {
    this.items[index].swiped = false;
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }
}
