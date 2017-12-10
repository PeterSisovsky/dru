import { Component, OnInit } from '@angular/core';
import { MenuSectionModel, MainMenuItemModel } from './menu.model';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    trigger('moveMenu', [
      state('unrolled', style({
        /*transform: 'translateY(-100%)',*/  height: 0, overflow: 'hidden',
      })),
      state('rolled', style({
        /*transform: 'translateY(0)',*/  height: '*', overflow: 'hidden'
      })),
      transition('rolled <=> unrolled', animate('300ms ease-in-out')),
    ]),
    trigger('rotateArrow', [
      state('unrolled', style({
        transform: 'rotate(0)',
      })),
      state('rolled', style({
        transform: 'rotate(90deg)',
      })),
      transition('rolled <=> unrolled', animate('300ms ease-in-out')),
    ]),
  ],
})
export class MenuComponent implements OnInit {

  menu: MenuSectionModel[] = [
    {
      title: 'Fuse',
      items: [
        {
          title: 'Dashboard',
          icon: 'dashboard',
        }
      ]
    },
    {
      title: 'Components',
      items: [
        {
          title: 'Form',
          icon: 'format_list_bulleted',
          badge: {
            title: '1',
            color: '#58acf2',
            shape: 'elipsis'
          }
        },
        {
          title: 'Mail',
          icon: 'mail',
          badge: {
            title: '2',
            color: 'red',
            shape: 'elipsis'
          }
        },
        {
          title: 'Game',
          icon: 'date_range',
        },
        {
          title: 'To-Do',
          icon: 'fast_forward',
        },
      ]
    },
    {
      title: 'User Interface',
      items: [
        {
          title: 'Typography',
          icon: 'format_size',
        },
        {
          title: 'Colors',
          icon: 'format_paint',
        },
        {
          title: 'Icons',
          icon: 'photo',
          badge: {
            title: 'NEW',
            color: 'green',
            shape: 'box'
          }
        },
        {
          title: 'Buttons',
          icon: 'crop_7_5',
        },
        {
          title: 'Inputs',
          icon: 'input',
        },
        {
          title: 'Advanced',
          icon: 'code',
          expanded: false,
          animationStatus: 'unrolled',
          subItems: [
            {
              title: 'subcat1',
              icon: 'code',
            },
            {
              title: 'subcat2',
              icon: 'code',
            },
            {
              title: 'subcat3',
              icon: 'code',
            },
          ],
        },
      ]
    },
    {
      title: 'Other',
      items: [
        {
          title: 'Forms',
          icon: 'featured_play_list',
          expanded: false,
          animationStatus: 'unrolled',
          subItems: [
            {
              title: 'subcat1',
              icon: 'code',
            },
            {
              title: 'subcat2',
              icon: 'code',
            },
            {
              title: 'subcat3',
              icon: 'code',
            },
            {
              title: 'subcat4',
              icon: 'code',
            },
            {
              title: 'subcat5',
              icon: 'code',
            },
          ],
        },
      ]
    },
  ];
  constructor() {
  }
  ngOnInit() {
  }

  expand(status: MainMenuItemModel): void {
    if (status.expanded == null) {
    } else {
      status.expanded = !status.expanded;
      if (status.expanded) {
        status.animationStatus = 'rolled';
      } else {
        status.animationStatus = 'unrolled';
      }
    }
  }
}
