import { Component, OnInit, Input } from '@angular/core';

export interface CueVal {
  headerText: string;
  headerHasOptions: boolean;
  bodyValue: number;
  bodyValueColor: string;
  bodyText: string;
  footerIcon: string;
  footerText: string;
  footerValue: number;
}

@Component({
  selector: 'app-cuebox',
  templateUrl: './cuebox.component.html',
  styleUrls: ['./cuebox.component.scss'],
})

export class CueboxComponent implements OnInit {

  @Input() cueValues: CueVal[];
  constructor() {
  }

  ngOnInit() {
  }

}
