import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-component-menu',
  templateUrl: './component-menu.component.html',
  styleUrls: ['./component-menu.component.scss']
})

export class ComponentMenuComponent {
  @Input() menuItems = [];
  @Input() menuItemsClass: string;
}
