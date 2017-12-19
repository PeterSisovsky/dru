import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss'],
})
export class GithubComponent implements OnInit {

  menuItems = ['Issues', 'Commits', 'Pull Request'];

  constructor() {
  }

  ngOnInit(): any {
  }

}
