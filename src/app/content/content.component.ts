import { Component, OnInit } from '@angular/core';
import { CueVal } from '../cuebox/cuebox.component';



@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  name: string;
  menuItems = ['Home', 'Budget Summary', 'Team Members'];
  cueValues: CueVal[] = [
    {
      headerText: 'Due Today',
      headerHasOptions: true,
      bodyValue: 27,
      bodyValueColor: 'blue',
      bodyText: 'TASK',
      footerIcon: 'done',
      footerText: 'Completed: ',
      footerValue: 7,
    },
    {
      headerText: 'Overdue',
      headerHasOptions: false,
      bodyValue: 4,
      bodyValueColor: 'red',
      bodyText: 'TASK',
      footerIcon: 'warning',
      footerText: 'Yesterdays overdue: ',
      footerValue: 2,
    },
    {
      headerText: 'Issues',
      headerHasOptions: false,
      bodyValue: 36,
      bodyValueColor: 'yellow',
      bodyText: 'OPEN',
      footerIcon: 'done',
      footerText: 'Closed today: ',
      footerValue: 0,
    },
    {
      headerText: 'Features',
      headerHasOptions: false,
      bodyValue: 42,
      bodyValueColor: 'grey',
      bodyText: 'PROPOSALS',
      footerIcon: 'done',
      footerText: 'Implemented today: ',
      footerValue: 2,
    },
  ];



  constructor() {

  }

  ngOnInit() {
    console.log(this.cueValues);
    this.name = 'John';
  }

}
